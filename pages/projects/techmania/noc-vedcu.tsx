import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import ProjectsManager, { Metadata, ProjectMetadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

type IndexPageProps = {
	projects: ProjectMetadata[],
}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import img from "@/public/noc-vedcu/nv.jpg"
import styles from "../../../components/navigation/Footer.module.scss";
import ProjectGrid from "@/components/listing/ProjectGrid";



export const metadata: Metadata = {
	"title": "Noc vědců 2015",
	"description": "Vizuální ídentita interaktivní expozice",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/noc-vedcu/nv.jpg",
	"color": "#042129",
	"year": 2015,
	"month": 8,
	"day": 1,
	"keywords": [ "design", "techmania" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#f2fcfc" }, {bg: "#042129"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Picture lg={8} src={img} />

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