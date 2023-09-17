import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import Content from "@/components/partials/content/Content"
import Partial from "@/components/partials/content/Partial"
import Picture from "@/components/partials/content/Picture"
import Text from "@/components/partials/content/Text"
import { useScheme } from "@/context/color/ColorContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import Link from "next/link"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


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

				<Picture md={8} src="/stavba-roku/catalog.jpg" />


                <Partial md={4}>

					<Text>
						<p>Binboat, s.r.o. poskytuje software pro neziskové organizace a poskytovatele sociálních služeb.</p>
						<p>Mottem společnosti je "Pomůžeme Vám neztratit se v moři Vašich dat."</p>
					</Text>

					<Picture src="/stavba-roku/logo.png" />

				</Partial>

				<Picture md={8} src="/stavba-roku/koncept.jpg" />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)