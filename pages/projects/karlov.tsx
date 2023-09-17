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

                <Picture lg={6} src="/karlov/4.jpg" />

                <Text lg={4}>
                    <p>I designed an exhibition and a monography of a social research project.</p>
                    <p>The desearch was done by the Department of Social Anthropology UWB in Pilsen. It was about people who used to live in Pilsen's quarter called Karlov.</p>
                    <p>That quarter does not exist anymore. The research was about strong collective identity and shared memories of Karlov's former inhabitants.</p>
                </Text>

                <Picture lg={6} src="/karlov/1.jpg" />
                <Picture lg={4} src="/karlov/2.jpg" />
                <Picture lg={4} src="/karlov/3.jpg" />
                <Picture lg={6} src="/karlov/6.jpg" />
                <Picture lg={4} src="/karlov/5.jpg" />
                <Picture lg={3} src="/karlov/15.jpg" />
                <Partial lg={3}>
                    <Picture src="/karlov/14.jpg"/>
                    <Picture src="/karlov/10.jpg"/>
                </Partial>
                <Picture lg={4} src="/karlov/12.jpg" />
                <Picture lg={8} src="/karlov/13.jpg" />

			</Content>

			<Link href="/">Home</Link>
		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)