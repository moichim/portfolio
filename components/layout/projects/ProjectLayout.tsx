import { forwardRef } from "react";
import { PageTransitionRef } from "../../ui/PageTransition";
// import ProjectTransition from "../../ui/ProjectTransition";
import styles from "./ProjectLayout.module.scss";
import Head from "next/head";
import { Metadata } from "@/data/ProjectsManager";
import { PageContextProvider, usePageContext } from "@/context/project/ProjectContext";
import clsx from "clsx";
import dynamic from "next/dynamic";
import ProjectTransition from "@/components/ui/ProjectTransition";


type ProjectProps = React.PropsWithChildren & {
    meta: Metadata
}

function ProjectLayout( props: ProjectProps, ref: PageTransitionRef ) {

    const context = usePageContext();

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