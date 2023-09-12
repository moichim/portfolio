'use client';

import ThemeProvider from "./theme/themeContext"
import TransitionProvider from "./transition/TransitionProvider"

/** Providers available only to the page content (not to navigation) */
const LayoutInnerProviders: React.FC<React.PropsWithChildren> = props => {
    return <TransitionProvider>
            {props.children}
        </TransitionProvider>;
}

export default LayoutInnerProviders;