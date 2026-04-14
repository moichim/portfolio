import ProjectGrid from "@/components/listing/ProjectGrid";
import { ProjectMetadata } from "@/data/ProjectsManager";
import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./ListLayout.module.scss";
import PageTransition, { PageTransitionRef } from "@/components/transitions/PageTransition";
import SeoHead from "@/components/utils/SeoHead";

type ListLayoutProps = {
    title?: string,
    projects: ProjectMetadata[],
    above?: React.ReactNode,
    below?: React.ReactNode
}

function ListLayout( props: ListLayoutProps, ref: PageTransitionRef ) {

    const classes = clsx([
        styles.container,
    ]);

    return <PageTransition ref={ref}>
        <SeoHead title={props.title} />
        <main className={classes}>
                
                {props.title && <header className={styles.header}>
                    <h1>{props.title}</h1>
                </header>}

                {props.above && props.above}

                <ProjectGrid projects={props.projects}/>

                {props.below && props.below}

        </main>
        </PageTransition>;

}


export default forwardRef( ListLayout );