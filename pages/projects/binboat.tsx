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
	"title": "Binboat",
	"description": "Vizuální identita softwarové firmy",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/binboat/thumb.jpg",
	"color": "#3295a8",
	"year": 2017,
	"month": 4,
	"day": 11,
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#eee" }, {bg: "black"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Picture md={8} src="/binboat/thumb.jpg" />

				<Partial md={4}>

					<Text>
						<p>Binboat, s.r.o. poskytuje software pro neziskové organizace a poskytovatele sociálních služeb.</p>
						<p>Mottem společnosti je "Pomůžeme Vám neztratit se v moři Vašich dat."</p>
					</Text>

					<Picture src="/binboat/8.jpg" />

				</Partial>

				<Picture md={6} lg={4} src="/binboat/1.jpg" />
				<Picture md={6} lg={4} src="/binboat/2.jpg" />
				<Picture md={6} lg={4} src="/binboat/3.jpg" />
				<Picture md={6} lg={4} src="/binboat/4.jpg" />
				<Picture md={6} lg={4} src="/binboat/6.jpg" />
				<Picture md={6} lg={4} src="/binboat/7.jpg" />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)