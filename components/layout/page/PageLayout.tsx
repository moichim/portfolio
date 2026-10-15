import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./PageLayout.module.scss";
import PageTransition, { PageTransitionRef } from "@/components/transitions/PageTransition";
import SeoHead from "@/components/utils/SeoHead";

type PageLayoutProps = React.PropsWithChildren & {
    title?: string;
    description?: string;
    noindex?: boolean;
}

function PageLayout( props: PageLayoutProps, ref: PageTransitionRef ) {

    const classes = clsx([
        styles.container,
        
    ]);

    return <PageTransition ref={ref}>
            <SeoHead
                title={props.title}
                description={props.description}
                noindex={props.noindex}
            />
            <main className={classes}>
                {props.children}
            </main>
    </PageTransition>

}


export default forwardRef( PageLayout );