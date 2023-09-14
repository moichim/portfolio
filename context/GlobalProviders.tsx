'use client';

import { PageContextProvider } from "./project/ProjectContext";
import ThemeProvider from "./theme/themeContext"
import TransitionProvider from "./transition/TransitionProvider"

/** Global context providers for the entire application */
const GlobalProviders: React.FC<React.PropsWithChildren> = props => {
    return <PageContextProvider><ThemeProvider>
            {props.children}
    </ThemeProvider></PageContextProvider>
}

export default GlobalProviders;