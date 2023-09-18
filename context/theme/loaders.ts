import { THEMES } from "./ThemecontextProvider";

const STORAGE_NAME = "theme";

export const getBrowserTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.dark : THEMES.light;

export const getStoredTheme = () => localStorage.getItem( STORAGE_NAME ) as THEMES | null;

export const getHtmlTheme = () => typeof document !== "undefined"
    ? document.querySelector<HTMLBaseElement>( ":root" )!.dataset.theme as THEMES
    : undefined;

export const getDefaultTheme = () => {

        const html = getHtmlTheme();
        const themeLocalStorage = getStoredTheme();
        const themeSystem = getBrowserTheme();

        return ( html ?? themeLocalStorage ?? themeSystem )
}

export const setStoredTheme = ( t: THEMES ) => localStorage.setItem( STORAGE_NAME,  t );

export const setHtmlTheme = ( t: THEMES ) => {
    if ( typeof document !== "undefined" )
        document.querySelector<HTMLBaseElement>( ":root" )!.dataset.theme = t;
}