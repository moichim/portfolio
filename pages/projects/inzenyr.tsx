import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import Content from "@/components/partials/content/Content"
import PageTransition from "@/components/ui/PageTransition"
import ProjectTransition from "@/components/ui/ProjectTransition"
import { Metadata } from "@/data/ProjectsManager"
import { Metadata as Meta } from "next"
import { forwardRef } from "react"
import Text from "@/components/partials/content/Text"
import Youtube from "@/components/partials/content/Youtube"
import Picture from "@/components/partials/content/Picture"
import Link from "next/link"
import { useScheme } from "@/context/color/ColorContextProvider"
import Partial from "@/components/partials/content/Partial"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>





export const metadata: Metadata = {
	"title": "Grafika expozice Inženýr",
	"description": "Vizuální ídentita interaktivní expozice",
	"authors": [{
		"name": "Janův jiná"
	}],
	"image": "/inzenyr/fotostena.jpg",
	"color": "blue",
	"year": 2023,
	"month": 11,
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