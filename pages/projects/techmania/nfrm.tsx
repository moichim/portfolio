import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import ProjectsManager, { Metadata, ProjectMetadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"
import ProjectGrid from "@/components/listing/ProjectGrid";
import styles from "../../../components/navigation/Footer.module.scss";

type IndexPageProps = {
	projects: ProjectMetadata[],
}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import obalka from "@/public/brozura/obalka.jpg"
import vnitrek from "@/public/brozura/vnitrek.jpg"


export const metadata: Metadata = {
	"title": "Brožura Neformální vzdělávání v plzeňském kraji",
	"description": "Návrh designu publikace",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/brozura/vnitrek.jpg",
	"color": "gray",
	"year": 2018,
	"month": 7,
	"day": 25,
	"keywords": [ "design", "blender", "techmania" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#ededed" }, {bg: "#0b1b1f"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

                <Picture lg={4} src={obalka} />
                <Picture lg={8} src={vnitrek} />

			</Content>

			<div className={styles.container}>
			<div style={{paddingTop: "5rem"}}>Další projekty pro Techmania Science Center</div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
				</svg>
			<div style={{height: "1rem"}}></div>
				<ProjectGrid projects={props.projects}/>
			</div>

		</ProjectLayout>
	)
}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( {keyword: "techmania" } )
        }
    }

}

export default forwardRef(IndexPage)