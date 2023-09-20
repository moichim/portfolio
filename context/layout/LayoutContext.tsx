import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { createContext, useContext } from "react"

type LayoutContextType = {
    isZoomed: boolean,
    setIsZoomed: React.Dispatch<React.SetStateAction<boolean>>,
    isExpanded: boolean,
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValue: LayoutContextType = {
    isZoomed: false,
    setIsZoomed: ( val ) => {},
    isExpanded: false,
    setIsExpanded: ( val ) => {}
}

const LayoutContext = createContext<LayoutContextType>( defaultValue );

export const LayoutContextProvider: React.FC<React.PropsWithChildren> = props => {

    const [ isZoomed, setIsZoomed ] = React.useState<boolean>( false );
    const [ isExpanded, setIsExpanded ] = React.useState<boolean>( false );

    const router = useRouter();

    useEffect( () => {
        setIsZoomed( false );
    }, [router.asPath]);

    const value = {
        isZoomed,
        setIsZoomed,
        isExpanded,
        setIsExpanded
    }

    return <LayoutContext.Provider value={value}>
        {props.children}
    </LayoutContext.Provider>

}

export const useLayoutContext = () => {
    return useContext( LayoutContext );
}