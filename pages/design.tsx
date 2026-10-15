import IndexText from "@/components/content/page/IndexText"
import ListLayout from "@/components/layout/projects/ListLayout"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"

function IndexPage( props: InferGetStaticPropsType< typeof getStaticProps>) {

    return <ListLayout 
        title="Design"
        description="Selected visual identity, book design and other graphic design projects by Jan Jáchim."
        projects={props.projects} 
        above={
            <IndexText>
                <p>Originally, I am a book binder. I have been working on visual identities, books and other design projects for a long time. Here is some selection, and I will probably hide it completely.</p>
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