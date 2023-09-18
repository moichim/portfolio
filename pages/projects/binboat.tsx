import Content from "@/components/content/Content"
import Partial from "@/components/content/partials/Partial"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import img1 from "@/public/binboat/1.jpg"
import img3 from "@/public/binboat/3.jpg"
import img4 from "@/public/binboat/4.jpg"
import img6 from "@/public/binboat/6.jpg"
import img7 from "@/public/binboat/7.jpg"
import img8 from "@/public/binboat/8.jpg"
import thumb from "@/public/binboat/thumb.jpg"


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

				<Picture md={8} src={thumb} />

				<Partial md={4}>

					<Text>
						<p>Binboat, s.r.o. poskytuje software pro neziskové organizace a poskytovatele sociálních služeb.</p>
						<p>Mottem společnosti je "Pomůžeme Vám neztratit se v moři Vašich dat."</p>
					</Text>

					<Picture src={img8} />

				</Partial>

				<Picture md={6} lg={4} src={img1} />
				<Picture md={6} lg={4} src={img1} />
				<Picture md={6} lg={4} src={img3} />
				<Picture md={6} lg={4} src={img4} />
				<Picture md={6} lg={4} src={img6} />
				<Picture md={6} lg={4} src={img7} />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)