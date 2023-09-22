import { forwardRef } from "react";
import { useLayoutContext } from "@/context/layout/LayoutContext";
import { Metadata } from "@/data/ProjectsManager";
import clsx from "clsx";
import Head from "next/head";
import styles from "./ProjectLayout.module.scss";
import ProjectTransition, { PageTransitionRef } from "@/components/transitions/ProjectTransition";
import { Link } from "@madeinhaus/nextjs-page-transition";
import { formatTitle } from "@/components/utils/formatters";


type ProjectProps = React.PropsWithChildren & {
    meta: Metadata
}

function ProjectLayout(props: ProjectProps, ref: PageTransitionRef) {

    const context = useLayoutContext();

    const classes: string[] = [
        styles.container
    ];

    if (context.isZoomed)
        classes.push(styles.zoomed);

    return <ProjectTransition ref={ref}>
        <Head>
            <title>{formatTitle(props.meta.title)}</title>
        </Head>
        <main>
            <article className={clsx(classes)}>

                <header className={styles.header}>
                    <h1>{props.meta.title}</h1>
                    <p>{props.meta.description} ({props.meta.year})</p>
                </header>

                <div className={styles.content}>
                    {props.children}
                </div>

            </article>
        </main>

        <aside className={styles.footer}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>

            </div>
            <div>{props.meta.title}</div>

        </aside>

        


    </ProjectTransition>;

}


export default forwardRef(ProjectLayout);