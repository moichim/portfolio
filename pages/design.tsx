import IndexText from "@/components/content/page/IndexText"
import ListLayout from "@/components/layout/projects/ListLayout"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"

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