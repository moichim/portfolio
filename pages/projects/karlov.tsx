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

import img1 from "@/public/karlov/1.jpg";
import img2 from "@/public/karlov/2.jpg";
import img3 from "@/public/karlov/3.jpg";
import img4 from "@/public/karlov/4.jpg";
import img5 from "@/public/karlov/5.jpg";
import img6 from "@/public/karlov/6.jpg";
import img10 from "@/public/karlov/10.jpg";
import img11 from "@/public/karlov/11.jpg";
import img12 from "@/public/karlov/12.jpg";
import img13 from "@/public/karlov/13.jpg";
import img14 from "@/public/karlov/14.jpg";
import img15 from "@/public/karlov/15.jpg";
import thumb from "@/public/karlov/thumb.jpg";


export const metadata: Metadata = {
	"title": "V Plzni na Karlově",
	"description": "Design of a research project",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/karlov/thumb.jpg",
	"color": "#1C0324",
	"year": 2019,
	"month": 8,
	"day": 1,
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ primary: "#5E0040",bg: "#FFF6F0", text: "brown" }, {bg: "#1A0C02", text: "pink"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

                <Picture lg={6} src={img4} />

                <Text lg={4}>
                    <p>I designed an exhibition and a monography of a social research project.</p>
                    <p>The desearch was done by the Department of Social Anthropology UWB in Pilsen. It was about people who used to live in Pilsen's quarter called Karlov.</p>
                    <p>That quarter does not exist anymore. The research was about strong collective identity and shared memories of Karlov's former inhabitants.</p>
                </Text>

                <Picture lg={6} src={img1} />
                <Picture lg={4} src={img2} />
                <Picture lg={4} src={img3} />
                <Picture lg={6} src={img6} />
                <Picture lg={4} src={img5} />
                <Picture lg={3} src={img15} />
                <Partial lg={3}>
                    <Picture src={img14}/>
                    <Picture src={img10}/>
                </Partial>
                <Picture lg={4} src={img12} />
                <Picture lg={8} src={img13} />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)