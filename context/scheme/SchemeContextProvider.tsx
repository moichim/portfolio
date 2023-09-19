import Head from "next/head"
import Script from "next/script"
import React from "react"

/** Define a color scheme override */
type SchemeDef = {
    primary?: string,
    text?: string,
    bg?: string,
    highlight?: string
}

/**
 * One value provided => colors apply to both temes
 * Two values provided => colors apply to light and dark themes
 */
type SchemeDefinitionInHook = SchemeDef|[
    /** The light theme */
    SchemeDef, 
    /** The dark theme */
    SchemeDef
]

type SchemeContextType = {
    scheme?: SchemeDefinitionInHook,
    setScheme: React.Dispatch<React.SetStateAction<SchemeDefinitionInHook|undefined>>
}

const contextDefaultValue: SchemeContextType = {
    setScheme: ( scheme ) => undefined
}

const SchemeContext = React.createContext<SchemeContextType>( contextDefaultValue );


/** Print a single scheme variable */
const printVariable = ( s: SchemeDef, v: keyof SchemeDef ) => {
    if ( v in s ) 
        return `--moichim-${v}:${s[v]};`;
    return "";
}

/** Print a single scheme */
const printScheme = ( s:SchemeDef ) => {
    return `
        ${printVariable(s,"text")}
        ${printVariable(s,"bg")}
        ${printVariable(s,"primary")}
        ${printVariable(s,"highlight")}
    `;
}

/** Prepare the CSS that shall be eventually displayed in the header */
const renderStyles = ( scheme: SchemeDefinitionInHook|undefined ) => {

    let style: string|undefined = undefined;

    if ( scheme !== undefined ) {

        if ( Array.isArray( scheme ) ) {

            style = `
            :root[data-theme=light] body {
                ${printScheme(scheme[0])}
            }
            :root[data-theme=dark] body {
                ${printScheme(scheme[1])}
            }
            `;

        }
        else if ( typeof scheme === "object" ) {

            style = `
            :root body {
                ${printScheme(scheme)}
            }
            `;
        }

    }

    return style;

}

const SchemeContextProvider: React.FC< React.PropsWithChildren > = ( props ) => {

    const [ scheme, setScheme ] = React.useState<SchemeDefinitionInHook|undefined>();

    let style = renderStyles( scheme );

    return <SchemeContext.Provider value={{
        scheme,
        setScheme: setScheme.bind( this )
    }}>
        {style && 
            <Head>
            <style id="scheme">
                {style}
            </style>
        </Head>
        }
        {props.children}
    </SchemeContext.Provider>

}

export default SchemeContextProvider;


/** 
 * Override the global CSS variables by providing custom copors for the page 
*/
export const useScheme = ( scheme: SchemeDefinitionInHook ) => {

    const context = React.useContext( SchemeContext );

    React.useEffect( () => {

        context.setScheme( scheme );

        return () => context.setScheme(undefined);

    }, [] );

    return context;

}