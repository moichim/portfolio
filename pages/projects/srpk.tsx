import Content from "@/components/content/Content"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import Partial from "@/components/content/partials/Partial"
import Picture from "@/components/content/partials/Picture"
import catalogue from "@/public/stavba-roku/catalog.jpg"
import concept from "@/public/stavba-roku/koncept.jpg"
import logo from "@/public/stavba-roku/logo.png"


export const metadata: Metadata = {
	"title": "Stavba roku Plzeňského kraje",
	"description": "Vizuální identita architektonické soutěže.",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/stavba-roku/catalog.jpg",
	"color": "#3b5413",
	"year": 2010,
	"month": 2,
	"day": 14,
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	// useScheme([{ bg: "#eee" }, {bg: "black"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Picture md={8} src={catalogue} />


                <Partial md={4}>

					<Text>
						<p>Binboat, s.r.o. poskytuje software pro neziskové organizace a poskytovatele sociálních služeb.</p>
						<p>Mottem společnosti je "Pomůžeme Vám neztratit se v moři Vašich dat."</p>
					</Text>

					<Picture src={logo} />

				</Partial>

				<Picture md={8} src={concept} />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)