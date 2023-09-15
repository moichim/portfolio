'use client';

import ColorContextProvider from "./color/ColorContextProvider";
import { PageContextProvider } from "./project/ProjectContext";
import ThemeProvider from "./theme/themeContext"
import TransitionProvider from "./transition/TransitionProvider"

/** Global context providers for the entire application */
const GlobalProviders: React.FC<React.PropsWithChildren> = props => {
    return <ColorContextProvider>
        <PageContextProvider>
            <ThemeProvider>
                {props.children}
            </ThemeProvider>
        </PageContextProvider>
    </ColorContextProvider>
}

export default GlobalProviders;