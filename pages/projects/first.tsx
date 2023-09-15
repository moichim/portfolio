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

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>





export const metadata: Metadata = {
	"title": "První projekt",
	"description": "interaktivní instalace",
	"authors": [{
		"name": "Janův jiná"
	}],
	"image": "/fireman.webp",
	"color": "green",
	"year": 2023,
	"month": 11,
	"day": 1,
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Text xs={12} lg={6} xl={4}>Toto je nějaký text</Text>
				<Text xs={12} lg={6} xl={4}>Toto je nějaký text</Text>
				<Text lg={6} xl={4}>Toto je nějaký text</Text>
				<Youtube lg={5} id="CMZrZ6R6uxM"/>
				<Picture lg={3} src="/fireman.webp"/>
				<Picture lg={3} src="/fireman.webp">Nějaký obrázek</Picture>

			</Content>

			<Link href="/">Home</Link>
		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)