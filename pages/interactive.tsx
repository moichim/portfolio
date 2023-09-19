import IndexText from "@/components/content/page/IndexText"
import PageLayout from "@/components/layout/page/PageLayout"
import ListLayout from "@/components/layout/projects/ListLayout"
import ProjectGrid from "@/components/listing/ProjectGrid"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"
import { forwardRef } from "react"

function IndexPage( props: InferGetStaticPropsType< typeof getStaticProps>, ref: React.ForwardedRef<HTMLDivElement> ) {

    return <ListLayout 
        title="Interaktivita"
        projects={props.projects}
        above={
            <IndexText>
                <p>Multimediální instalace, projekce a interaktivní exponáty.</p>
            </IndexText>
        }
    />;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( {keyword: "interactive" } )
        }
    }

}

export default forwardRef(IndexPage)