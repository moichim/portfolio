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

import img from "@/public/noc-vedcu/nv.jpg";


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
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#f2fcfc" }, {bg: "#042129"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Picture lg={8} src={img} />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)