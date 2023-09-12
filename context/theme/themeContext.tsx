"use client";

import Script from "next/script";
import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { getDefaultTheme, getStoredTheme, setStoredTheme, setHtmlTheme } from "./loaders";

// Values are classes that shall be appended to the site DOM
export enum THEMES {
    light = "light",
    dark = "dark"
}

type ThemeContextType = {
    /** @deprecated Should not be used since there are two themes only. */
    theme?: THEMES,
    isDark?: boolean,
    toggleTheme: () => void,
}

const defaultThemeValue: ThemeContextType = {
    toggleTheme: ( ) => {},
}

/** Global context instance */
const ThemeContext = createContext<ThemeContextType>( defaultThemeValue );

/** Global ThemeContext provider */
const ThemeProvider: React.FC<PropsWithChildren> = props => {

    const [ theme, setTheme ] = useState<THEMES>();

    const [ isInit, setIsInit ] = useState<boolean>( false );

    const toggleTheme = () => setTheme( 
        previous => previous === THEMES.light 
            ? THEMES.dark 
            : THEMES.light 
    );

    useEffect( () => {

        // Initial load gets the data from the storage or from the browser
        if ( ! isInit ) {
            setTheme( getDefaultTheme() );
            setIsInit( true );
        }

        // Subsequential runs stores the value
        if ( theme !== getStoredTheme() && isInit ) {
            setStoredTheme( theme! );
            setHtmlTheme( theme! );
        }

        // Watch for system theme changes
        const propagateTheme = (e:MediaQueryListEvent) => {
            setTheme( e.matches ? THEMES.dark: THEMES.light );
        }

        const listener = window.matchMedia( "(prefers-color-scheme: dark)" );

        listener.addEventListener( "change", propagateTheme );

        return () => listener.removeEventListener( "change", propagateTheme );

    }, [ theme ] );


    const isDark = theme !== undefined
        ? theme === THEMES.dark
        : undefined;

    const values: ThemeContextType = {
        theme: theme,
        toggleTheme: toggleTheme.bind(this),
        isDark
    }

    return <ThemeContext.Provider value={values}>
        <Script
            id="theme-setup"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{__html: `

                // Get the stored theme
                var stored = localStorage.getItem( "theme" );

                // Get theme from the browser
                var browser = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

                // Project the theme into DOM
                document.querySelector( ':root' ).dataset.theme = ( stored ?? browser );

            ` }}
        >
        </Script>
        {props.children}
    </ThemeContext.Provider>

}

export default ThemeProvider;

export const useTheme = () => {
    return useContext( ThemeContext );
}