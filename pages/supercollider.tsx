import IndexText from "@/components/content/page/IndexText"
import PageLayout from "@/components/layout/page/PageLayout"
import ListLayout from "@/components/layout/projects/ListLayout"
import ProjectGrid from "@/components/listing/ProjectGrid"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"
import { forwardRef } from "react"

function IndexPage( props: InferGetStaticPropsType< typeof getStaticProps>, ref: React.ForwardedRef<HTMLDivElement> ) {

    return <ListLayout 
        title="SuperCollider"
        projects={props.projects}
        above={
            <IndexText>
                <p>Projekty, které obsahují zvukový server SuperCollider</p>
            </IndexText>
        }
    />;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( {keyword: "supercollider" } )
        }
    }

}

export default forwardRef(IndexPage)