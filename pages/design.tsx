import IndexText from "@/components/content/page/IndexText"
import PageLayout from "@/components/layout/page/PageLayout"
import ListLayout from "@/components/layout/projects/ListLayout"
import ProjectGrid from "@/components/listing/ProjectGrid"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"
import { forwardRef } from "react"

function IndexPage( props: InferGetStaticPropsType< typeof getStaticProps>) {

    return <ListLayout 
        title="Design"
        projects={props.projects} 
        above={
            <IndexText>
                <p>Vizuální identity, knihy a další věci. Původně jsem vazač knih.</p>
            </IndexText>
        }
    />;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( {keyword: "design" } )
        }
    }

}

export default IndexPage