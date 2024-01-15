import Content from "@/components/content/Content"
import Partial from "@/components/content/partials/Partial"
import Picture from "@/components/content/partials/Picture"
import Youtube from "@/components/content/partials/Youtube"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import img1 from "@/public/blik/2023/0031.jpg"
import img2 from "@/public/blik/2023/0075.jpg"
import img3 from "@/public/blik/2023/0100.jpg"
import img4 from "@/public/blik/2023/0179.jpg"
import img5 from "@/public/blik/2023/0189.jpg"
import img6 from "@/public/blik/2023/0216.jpg"
import img7 from "@/public/blik/2023/0220.jpg"
import img8 from "@/public/blik/2023/0284.jpg"
import { useScheme } from "@/context/scheme/SchemeContextProvider"

export const metadata: Metadata = {
	"title": "Blik Blik 2023",
	"description": "Propagační videoprojekce pro Blik Blik 2023",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/blik/2023/thumb.jpg",
	"color": "#265208",
	"year": 2023,
	"month": 3,
	"day": 20,
	"keywords": [ "design", "featured", "interactive", "blender" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ primary: "#207324", bg: "#cffad1" }, {bg: "#0b1a01"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Youtube md={6} lg={8} id="2WD7oqWaLCQ" />

				<Text md={6} lg={3}>
					<p>Projekce pro finančního partnera festivalu.</p>
					<p>Animace v Blenderu.</p>
				</Text>

				<Picture md={6} lg={3} src={img1} />
				<Picture md={6} lg={3} src={img2} />
				<Picture md={6} lg={3} src={img3} />
				<Picture md={6} lg={3} src={img4} />
				<Picture md={6} lg={3} src={img5} />
				<Picture md={6} lg={3} src={img6} />
				<Picture md={6} lg={3} src={img7} />
				<Picture md={6} lg={3} src={img8} />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)