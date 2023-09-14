import ListLayout from "@/components/layout/projects/ListLayout"
import ProjectGrid from "@/components/partials/ProjectGrid"
import IndexText from "@/components/partials/page/IndexText"
import PageTransition from "@/components/ui/PageTransition"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"
import Link from "next/link"
import { forwardRef } from "react"

function IndexPage( props: InferGetStaticPropsType< typeof getStaticProps>, ref: React.ForwardedRef<HTMLDivElement> ) {

    return <ListLayout 
        ref={ref}
        projects={props.projects}
        above={
            <IndexText>
                Programuji a <Link href="/design">designuji</Link>. Snažím se to dělat normálně
            </IndexText>
        }
    />;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( {visibility: true} )
        }
    }

}

export default forwardRef(IndexPage)