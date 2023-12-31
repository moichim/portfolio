import Content from "@/components/content/Content"
import Partial from "@/components/content/partials/Partial"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { Metadata } from "@/data/ProjectsManager"
import { Link } from "@madeinhaus/nextjs-page-transition"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import img1 from "@/public/pokoj_127/1.jpg"
import img2 from "@/public/pokoj_127/2.jpg"
import img3 from "@/public/pokoj_127/3.jpg"
import img4 from "@/public/pokoj_127/4.jpg"
import img5 from "@/public/pokoj_127/5.jpg"


export const metadata: Metadata = {
	"title": "Room 127",
	"description": "Book design",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/pokoj_127/1.jpg",
	"color": "#033030",
	"year": 2007,
	"month": 6,
	"day": 20,
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
					<p>Design of a book about the Shoah</p>
					<p>The oral history research succeded a previous project <Link href="/projects/humr/classmates">Classmates</Link>. As the previous book focuses on the Pilsen's grammar school, Room 127 is about fates of young Jews who shared a room in the Theresienstadt ghetto between 1941 - 1944.</p>
				</Text>
				<Picture md={6} src={img2} />
				<Picture md={8} src={img4} />
				<Partial md={4}>
					<Text>
						<p>The publication consists of two tomes:</p>
						<ul>
							<li><a href="https://shoah.deportal.cz/file/shoah/attachment/6">Main book</a> describes fates of all Room 127 inhabitants as well as the general context</li>
							<li><a href="https://shoah.deportal.cz/file/shoah/attachment/4">Memories of survivors</a> presents personal memories of 5 boys, who survived</li>
						</ul>
					</Text>
					<Picture md={8} src={img3} />
				</Partial>


				<Picture md={6} lg={9} src={img5} />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)