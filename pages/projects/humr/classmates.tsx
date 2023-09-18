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

import img1 from "@/public/spoluzaci/1.jpg";
import img2 from "@/public/spoluzaci/2.jpg";
import img3 from "@/public/spoluzaci/3.jpg";
import img4 from "@/public/spoluzaci/4.jpg";
import img5 from "@/public/spoluzaci/5.jpg";


export const metadata: Metadata = {
	"title": "Classmates",
	"description": "Book design",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/spoluzaci/1.JPG",
	"color": "#031830",
	"year": 2006,
	"month": 12,
	"day": 9,
	"keywords": [ "design" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	// useScheme([{ bg: "#eee" }, {bg: "black"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Picture md={4} lg={3} src={img1} />
				<Text md={4} lg={3}>
					<p>In cooperation with Martina Horáková, we designed a history book.</p>
                    <p>In the research project, we found "jewish" students who attended our grammar school before the WWII. Some of them were Jews, others were labelled as such by the racial Norimberg Laws.</p>
				</Text>
				<Picture md={4} src={img3} />
				<Picture md={8} src={img4} />
				<Partial md={4}>
					<Text>
						<p>The publication brings memories of people who knew those "Jews" before they were expelled from the school and deported. It also includes archive materials and broader historical context</p>
                        <p>The book was designed as a textbook about the Holocaust for grammar schools. It serves as such until today, being issued 3 times in Czech and 2 times in English.</p>
						<ul>
							<li><a href="https://shoah.deportal.cz/file/shoah/attachment/1">Classmates</a> PDF 13 MB</li>
							<li><a href="https://shoah.deportal.cz/file/shoah/attachment/5">Spolužáci</a> PDF 84 MB</li>
						</ul>
					</Text>
				</Partial>

                <Picture md={6} lg={8} src={img5} />
                <Partial md={4} lg={3}>
                    <Picture src={img2} />
                    <Picture src={img3} />
                    <Text>
                    <p>This research was later followed by another project <Link href="/projects/humr/room-127">Room 127</Link>.</p>
                    </Text>
                </Partial>

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)