import IndexText from "@/components/content/page/IndexText"
import PageLayout from "@/components/layout/page/PageLayout"
import ListLayout from "@/components/layout/projects/ListLayout"
import ProjectGrid from "@/components/listing/ProjectGrid"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"
import { forwardRef } from "react"

function IndexPage( props: InferGetStaticPropsType< typeof getStaticProps>, ref: React.ForwardedRef<HTMLDivElement> ) {

    return <ListLayout 
        title="Processing"
        projects={props.projects}
        above={
            <IndexText>
                <p>Projekty, které jsem realizoval ve frameworku Processing</p>
            </IndexText>
        }
    />;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( {keyword: "processing" } )
        }
    }

}

export default forwardRef(IndexPage)