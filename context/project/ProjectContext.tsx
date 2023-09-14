import React from "react";
import { createContext, useContext } from "react"

type PageContextType = {
    isZoomed: boolean,
    setIsZoomed: React.Dispatch<React.SetStateAction<boolean>>,
    isExpanded: boolean,
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValue: PageContextType = {
    isZoomed: false,
    setIsZoomed: ( val ) => {},
    isExpanded: false,
    setIsExpanded: ( val ) => {}
}

const PageContext = createContext<PageContextType>( defaultValue );

export const PageContextProvider: React.FC<React.PropsWithChildren> = props => {

    const [ isZoomed, setIsZoomed ] = React.useState<boolean>( false );
    const [ isExpanded, setIsExpanded ] = React.useState<boolean>( false );

    const value = {
        isZoomed,
        setIsZoomed,
        isExpanded,
        setIsExpanded: setIsExpanded.bind(this)
    }

    return <PageContext.Provider value={value}>
        {props.children}
    </PageContext.Provider>

}

export const usePageContext = () => {
    return useContext( PageContext );
}