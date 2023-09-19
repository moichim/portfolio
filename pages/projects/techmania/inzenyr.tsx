import Content from "@/components/content/Content"
import Partial from "@/components/content/partials/Partial"
import Picture from "@/components/content/partials/Picture"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import fotostena from "@/public/inzenyr/fotostena.jpg"
import fulldome from "@/public/inzenyr/fulldome.png"
import motive from "@/public/inzenyr/motive.jpg"
import stena from "@/public/inzenyr/stena.jpg"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
	"title": "Grafika expozice Inženýr",
	"description": "Vizuální ídentita interaktivní expozice",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/inzenyr/fotostena.jpg",
	"color": "#0f1d1f",
	"year": 2019,
	"month": 8,
	"day": 1,
	"keywords": [ "design", "featured" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#e3f7fc" }, {bg: "#0b1b1f"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Partial lg={6}>
					<Picture src={fotostena} />
					<Picture lg={6} src={motive} />
				</Partial>
				<Partial lg={6}>
					<Picture src={stena} />
					<Picture src={fulldome} />
				</Partial>

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)