import IndexText from "@/components/content/page/IndexText"
import ListLayout from "@/components/layout/projects/ListLayout"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"
import Link from "next/link"

function IndexPage( props: InferGetStaticPropsType< typeof getStaticProps> ) {

    return <ListLayout
        projects={props.projects}
        above={
            <IndexText>
                Zde jsou všechny práce, které jsem na web dal.
            </IndexText>
        }
    />;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( )
        }
    }

}

export default IndexPage