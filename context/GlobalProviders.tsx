'use client';

import SchemeContextProvider from "./scheme/SchemeContextProvider";
import { LayoutContextProvider } from "./layout/LayoutContext";
import ThemeProvider from "./theme/ThemecontextProvider"
import TransitionProvider from "./transition/TransitionProvider"
import { PageTransitionContext } from "@madeinhaus/nextjs-page-transition";

/** Global context providers for the entire application */
const GlobalProviders: React.FC<React.PropsWithChildren> = props => {
    return <PageTransitionContext>
        <SchemeContextProvider>
            <LayoutContextProvider>
                <ThemeProvider>
                    {props.children}
                </ThemeProvider>
            </LayoutContextProvider>
        </SchemeContextProvider>
    </PageTransitionContext>
}

export default GlobalProviders;