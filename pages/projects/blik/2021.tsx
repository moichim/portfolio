import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import Content from "@/components/partials/content/Content"
import Partial from "@/components/partials/content/Partial"
import Picture from "@/components/partials/content/Picture"
import Youtube from "@/components/partials/content/Youtube"
import { useScheme } from "@/context/color/ColorContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import Link from "next/link"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import blik from "@/public/blik/2021/blik.jpg";
import horizontal from "@/public/blik/2021/horizontal.jpg";
import vertical from "@/public/blik/2021/vertical.jpg";

export const metadata: Metadata = {
	"title": "Blik Blik 2021",
	"description": "Vizuál plzeňského festivalu světla",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/blik/2021/blik.jpg",
	"color": "#081F2D",
	"year": 2021,
	"month": 10,
	"day": 1,
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	// useScheme([{ bg: "white" }, {bg: "black"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Partial lg={8}>

                    <Youtube id="gAaklnZr6Rc" />
					<Picture src={blik} />

				</Partial>

                <Picture lg={4} src={vertical} />
                <Picture src={horizontal} />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)