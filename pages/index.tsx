import ListLayout from "@/components/layout/projects/ListLayout"
import IndexText from "@/components/partials/page/IndexText"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"
import Link from "next/link"
import { forwardRef } from "react"
import dynamic from "next/dynamic";
import { useScheme } from "@/context/color/ColorContextProvider"

// const ListLayout = dynamic( () => import( "@/components/layout/projects/ListLayout" ) );

function IndexPage( props: InferGetStaticPropsType< typeof getStaticProps> ) {

    

    return <ListLayout
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

export default IndexPage