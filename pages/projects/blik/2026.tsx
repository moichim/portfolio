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

import img1 from "@/public/blik/2026/main.jpg"
import img2 from "@/public/blik/2026/vertical.jpg"
import img3 from "@/public/blik/2026/thumb.jpg"
import img4 from "@/public/blik/2026/zastavka-crop.jpg"
import img5 from "@/public/blik/2026/thumb2.jpg"
import img6 from "@/public/blik/2026/story.jpg"
import { useScheme } from "@/context/scheme/SchemeContextProvider"

export const metadata: Metadata = {
	"title": "Blik Blik 2026",
	"description": "Grafika festivalu světla",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/blik/2026/thumb.jpg",
	"color": "#0a8196",
	"year": 2026,
	"month": 3,
	"day": 12,
	"keywords": [ "design", "featured" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ primary: "#172a96", bg: "#f5fbfd" }, {bg: "#01011a"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Picture md={6} lg={8} src={img1} />

				<Text md={6} lg={3}>
					<p>Vizuál pro plzeňský festival světla Blik Blik 2026. Téma Symbióza. Online i print.</p>
				</Text>

				
				<Picture md={6} lg={3} src={img2} />
				<Picture md={6} lg={5} src={img3} />
				<Picture md={6} lg={3} src={img4} />
				<Picture md={6} lg={5} src={img5} />
				<Picture md={6} lg={3} src={img6} />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)