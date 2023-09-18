import { forwardRef } from "react";
import { useLayoutContext } from "@/context/layout/LayoutContext";
import { Metadata } from "@/data/ProjectsManager";
import clsx from "clsx";
import Head from "next/head";
import styles from "./ProjectLayout.module.scss";
import ProjectTransition, { PageTransitionRef } from "@/components/transitions/ProjectTransition";


type ProjectProps = React.PropsWithChildren & {
    meta: Metadata
}

function ProjectLayout( props: ProjectProps, ref: PageTransitionRef ) {

    const context = useLayoutContext();

    const classes: string[] = [
        styles.container
    ];

    if (context.isZoomed)
        classes.push( styles.zoomed );

    return <ProjectTransition ref={ref}>
        <Head>
            <title>{props.meta.title} | Jan Jáchim</title>
        </Head>
        <main>
            <article className={clsx(classes)}>
                
                <header className={styles.header}>
                    <h1>{props.meta.title}</h1>
                    <p>{props.meta.description}</p>
                </header>

                <div className={styles.content}>
                    {props.children}
                </div>

            </article>
        </main>
        </ProjectTransition>;

}


export default forwardRef( ProjectLayout );