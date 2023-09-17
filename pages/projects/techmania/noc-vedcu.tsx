import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import Content from "@/components/partials/content/Content"
import Partial from "@/components/partials/content/Partial"
import Picture from "@/components/partials/content/Picture"
import { useScheme } from "@/context/color/ColorContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import Link from "next/link"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
	"title": "Noc vědců 2015",
	"description": "Vizuální ídentita interaktivní expozice",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/noc-vedcu/nv.jpg",
	"color": "#042129",
	"year": 2019,
	"month": 8,
	"day": 1,
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#f2fcfc" }, {bg: "#042129"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Picture lg={8} src="/noc-vedcu/nv.jpg" />

			</Content>

			<Link href="/">Home</Link>
		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)