import { forwardRef } from "react";
import PageTransition, { PageTransitionRef } from "../../ui/PageTransition";
import ProjectTransition from "../../ui/ProjectTransition";
import Head from "next/head";
import { Metadata, ProjectMetadata } from "@/data/ProjectsManager";
import ProjectGrid from "@/components/partials/ProjectGrid";
import { formatTitle } from "@/utils/formatters";
import styles from "./ListLayout.module.scss"

type ListLayoutProps = {
    title?: string,
    projects: ProjectMetadata[],
    above?: React.ReactNode,
    below?: React.ReactNode
}

function ListLayout( props: ListLayoutProps, ref: PageTransitionRef ) {

    return <PageTransition ref={ref}>
        <Head>
            <title>
                {formatTitle( props.title )}
            </title>
        </Head>
        <main className={styles.container}>
                
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