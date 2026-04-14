import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./PageLayout.module.scss";
import PageTransition, { PageTransitionRef } from "@/components/transitions/PageTransition";
import SeoHead from "@/components/utils/SeoHead";

function PageLayout( props: React.PropsWithChildren, ref: PageTransitionRef ) {

    const classes = clsx([
        styles.container,
        
    ]);

    return <PageTransition ref={ref}>
            <SeoHead />
            <main className={classes}>
                {props.children}
            </main>
    </PageTransition>

}


export default forwardRef( PageLayout );