'use client';

import ThemeProvider from "./theme/themeContext"
import TransitionProvider from "./transition/TransitionProvider"

/** Global context providers for the entire application */
const GlobalProviders: React.FC<React.PropsWithChildren> = props => {
    return <ThemeProvider>
            {props.children}
    </ThemeProvider>
}

export default GlobalProviders;