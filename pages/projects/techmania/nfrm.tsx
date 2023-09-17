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
	"title": "Brožura Neformální vzdělávání v plzeňském kraji",
	"description": "Návrh designu publikace",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/brozura/vnitrek.jpg",
	"color": "gray",
	"year": 2018,
	"month": 7,
	"day": 25,
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#ededed" }, {bg: "#0b1b1f"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

                <Picture lg={4} src="/brozura/obalka.jpg" />
                <Picture lg={8} src="/brozura/vnitrek.jpg" />

			</Content>

			<Link href="/">Home</Link>
		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)