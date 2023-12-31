import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import img from "@/public/zlatohlavek/thumb.jpg"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
	"title": "Galerie Zlatohlávek",
	"description": "Vizuální identita prodejní galerie.",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/zlatohlavek/thumb.jpg",
	"color": "#54401f",
	"year": 2015,
	"month": 4,
	"day": 31,
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	// useScheme([{ bg: "#eee" }, {bg: "black"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Picture md={8} src={img} />

				<Text md={4} lg={3}>

					<p>Vizuální identita vychází z názvu galerie a zároveň z jejích prostorocých dispozic.</p>
					<p>V logu se potkává silueta zlatohlávka s "hranolem" značíscím výstavní prostor.</p>

				</Text>

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)