import { formatTitle } from "@/components/utils/formatters";
import clsx from "clsx";
import Head from "next/head";
import { forwardRef } from "react";
import styles from "./PageLayout.module.scss";
import PageTransition, { PageTransitionRef } from "@/components/transitions/PageTransition";

function PageLayout( props: React.PropsWithChildren, ref: PageTransitionRef ) {

    const classes = clsx([
        styles.container,
        
    ]);

    return <PageTransition ref={ref}>
            <Head>
                <title>{formatTitle()}</title>
            </Head>
            <main className={classes}>
                {props.children}
            </main>
    </PageTransition>

}


export default forwardRef( PageLayout );