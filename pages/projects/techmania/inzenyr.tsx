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
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#e3f7fc" }, {bg: "#0b1b1f"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Partial lg={6}>
					<Picture src="/inzenyr/fotostena.jpg" />
					<Picture lg={6} src="/inzenyr/motive.jpg" />
				</Partial>
				<Partial lg={6}>
					<Picture src="/inzenyr/stena.jpg" />
					<Picture src="/inzenyr/fulldome.png" />
				</Partial>

			</Content>

			<Link href="/">Home</Link>
		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)