import Header from "../navigation/Header";
import { ForwardRefComponent } from "framer-motion";
import PageTransition, { PageTransitionRef } from "../../ui/PageTransition";
import { forwardRef } from "react";
import Head from "next/head";
import { formatTitle } from "@/utils/formatters";
import styles from "./PageLayout.module.scss";
import clsx from "clsx";
import ProjectTransition from "@/components/ui/ProjectTransition";

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