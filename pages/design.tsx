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
                <p>Původně jsem vazač knih. Vizuální identity, knihy a další věci jsem dělal dlouho. Tady mám jen malý výběr.</p>
            </IndexText>
        }
    />;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( {keyword: "design", publicFilter: true } )
        }
    }

}

export default IndexPage