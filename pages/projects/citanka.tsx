import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import img from "@/public/citanka/thumb.jpg"
import Youtube from "@/components/content/partials/Youtube"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
	"title": "Čítanka",
	"description": "Knižní vazba",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/citanka/thumb.jpg",
	"color": "#54401f",
	"year": 2009,
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

				<Picture md={6} lg={4} src={img} />

                <Youtube md={6} lg={4} id="VMYmwdikUkI" />

				<Text md={4} lg={3}>

					<p>Druháci ve Waldorfských školách dostávají od rodičů ručně psanou, ilustrovanou a vázanou čítanku.</p>
					<p>Má partnerka dělala kaligrafii. Ilustrace jsme dělali cca společně, vazbu a desky jsem dělal já.</p>
                    <p>Toto není úplně projekt jako ostatní, ale chtěl jsem, aby to někde bylo ukázaný..</p>

				</Text>

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)