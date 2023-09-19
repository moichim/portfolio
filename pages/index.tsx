import IndexText from "@/components/content/page/IndexText"
import ListLayout from "@/components/layout/projects/ListLayout"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"
import { Link } from "@madeinhaus/nextjs-page-transition"

function IndexPage( props: InferGetStaticPropsType< typeof getStaticProps> ) {

    

    return <ListLayout
        projects={props.projects}
        above={
            <IndexText>
                <p className="mobileOnly">Jmenuji se Jan Jáchim.</p>
                <p>Dělám <Link href="/code">kód</Link>, <Link href="/design">design</Link> a  <Link href="/interactive">interaktivní projekty</Link>. <em>Snažím se to dělat normálně.</em></p>
            </IndexText>
        }
    />;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( {keyword: "featured", visibility: true} )
        }
    }

}

export default IndexPage