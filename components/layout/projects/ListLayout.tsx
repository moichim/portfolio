import { forwardRef } from "react";
import PageTransition, { PageTransitionRef } from "../../ui/PageTransition";
import ProjectTransition from "../../ui/ProjectTransition";
import Head from "next/head";
import { Metadata, ProjectMetadata } from "@/data/ProjectsManager";
import ProjectGrid from "@/components/partials/ProjectGrid";
import { formatTitle } from "@/utils/formatters";
import styles from "./ListLayout.module.scss";
import dynamic from "next/dynamic";
import clsx from "clsx";

type ListLayoutProps = {
    title?: string,
    projects: ProjectMetadata[],
    above?: React.ReactNode,
    below?: React.ReactNode
}

function ListLayout( props: ListLayoutProps, ref: PageTransitionRef ) {

    const classes = clsx([
        styles.container,
        "test"
    ]);

    return <PageTransition ref={ref}>
        <Head>
            <title>
                {formatTitle( props.title )}
            </title>
        </Head>
        <main className={classes}>
                
                {props.title && <header className={styles.header}>
                    <h1>{props.title}</h1>
                </header> }

                {props.above && props.above}

                <ProjectGrid projects={props.projects}/>

                {props.below && props.below}

        </main>
        </PageTransition>;

}


export default forwardRef( ListLayout );