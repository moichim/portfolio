import { forwardRef } from "react";
import { useLayoutContext } from "@/context/layout/LayoutContext";
import { Metadata } from "@/data/ProjectsManager";
import clsx from "clsx";
import Head from "next/head";
import styles from "./ProjectLayout.module.scss";
import ProjectTransition, { PageTransitionRef } from "@/components/transitions/ProjectTransition";
import Link from "next/link";


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

        <aside className={styles.footer}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>

            </div>
            <div>{props.meta.title}</div>
            <div><Link href="/">Jan Jáchim</Link></div>
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
            </div>

        </aside>

        <nav className={styles.nav}>
            <ul>
                <li><Link href="/code">Code</Link></li>
                <li><Link href="/interactive">Intermedia</Link></li>
                <li><Link href="/design">Design</Link></li>
                <li><Link href="/projects">All works</Link></li>
            </ul>
        </nav>


    </ProjectTransition>;

}


export default forwardRef(ProjectLayout);