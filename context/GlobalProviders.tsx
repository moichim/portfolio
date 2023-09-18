'use client';

import SchemeContextProvider from "./scheme/SchemeContextProvider";
import { LayoutContextProvider } from "./layout/LayoutContext";
import ThemeProvider from "./theme/ThemecontextProvider"
import TransitionProvider from "./transition/TransitionProvider"

/** Global context providers for the entire application */
const GlobalProviders: React.FC<React.PropsWithChildren> = props => {
    return <SchemeContextProvider>
        <LayoutContextProvider>
            <ThemeProvider>
                {props.children}
            </ThemeProvider>
        </LayoutContextProvider>
    </SchemeContextProvider>
}

export default GlobalProviders;