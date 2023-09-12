import ProjectsManager from "@/data/ProjectsManager";
import { InferGetStaticPropsType } from "next";
import { forwardRef } from "react";

function ProjectsPage( props: InferGetStaticPropsType< typeof getStaticProps>, ref: React.ForwardedRef<HTMLDivElement> ) {
    console.log( props.projects );

    return <>
        {props.projects.map( project => {
            project
        } )}
    </>;
    
}

export async function getStaticProps() {

    const files = ProjectsManager.getProjectsMetadata();

    return {
        props: {
            projects: files
        }
    }

}

export default forwardRef( ProjectsPage );