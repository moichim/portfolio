'use client';

import { LayoutContextProvider } from "./layout/LayoutContext";
import ThemeProvider from "./theme/ThemecontextProvider"
import TransitionProvider from "./transition/TransitionProvider";

/** Providers available only to the page content (not to navigation) */
const LayoutInnerProviders: React.FC<React.PropsWithChildren> = props => {
    return <TransitionProvider>
            {props.children}
        </TransitionProvider>;
}

export default LayoutInnerProviders;