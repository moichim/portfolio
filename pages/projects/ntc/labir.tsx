import Content from "@/components/content/Content";
import Partial from "@/components/content/partials/Partial";
import Picture from "@/components/content/partials/Picture";
import ProjectLayout from "@/components/layout/projects/ProjectLayout";
import { useScheme } from "@/context/scheme/SchemeContextProvider";
import { Metadata } from "@/data/ProjectsManager";
import { forwardRef } from "react";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export const metadata: Metadata = {
	"title": "LabIR Edu",
	"description": "Programování a grafika pro vzdělávací platformu",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/binboat/thumb.jpg",
	"color": "#3295a8",
	"year": 2021,
	"month": 3,
	"day": 29,
	"keywords": [  ],
	"public": false
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#eee" }, {bg: "black"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>


			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)