import Head from "next/head"
import Script from "next/script"
import React from "react"

type SchemeDef = {
    primary?: string,
    text?: string,
    bg?: string
}

type SchemeType = SchemeDef|SchemeDef[]

type ColorContextType = {
    scheme?: SchemeType,
    setScheme: React.Dispatch<React.SetStateAction<SchemeType|undefined>>
}

const defaultValue: ColorContextType = {
    setScheme: ( scheme ) => undefined
}

const ColorContext = React.createContext<ColorContextType>( defaultValue );



const ColorContextProvider: React.FC< React.PropsWithChildren > = ( props ) => {

    const [ scheme, setScheme ] = React.useState<SchemeType|undefined>(  );

    let style: string|undefined = undefined;

    const printVariable = ( s: SchemeDef, v: keyof SchemeDef ) => {

        if ( v in s ) 
            return `--moichim-${v}:${s[v]};`;

        return "";
        
    }

    if ( scheme !== undefined ) {

        if ( Array.isArray( scheme ) ) {

            style = `
            :root[data-theme=light] body {
                ${printVariable(scheme[0],"text")}
                ${printVariable(scheme[0],"bg")}
                ${printVariable(scheme[0],"primary")}
            }
            :root[data-theme=dark] body {
                ${printVariable(scheme[1],"text")}
                ${printVariable(scheme[1],"bg")}
                ${printVariable(scheme[1],"primary")}
            }
            `;

        }
        else if ( typeof scheme === "object" ) {

            style = `
            :root body {
                ${printVariable(scheme,"text")}
                ${printVariable(scheme,"bg")}
                ${printVariable(scheme,"primary")}
            }
            `;
        }

    }

    console.log( "štyl", style );

    return <ColorContext.Provider value={{
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
    </ColorContext.Provider>

}

export default ColorContextProvider;

export const useScheme = ( scheme: SchemeType ) => {

    const context = React.useContext( ColorContext );

    React.useEffect( () => {

        context.setScheme( scheme );

        return () => context.setScheme(undefined);

    }, [] );

    return context;

}