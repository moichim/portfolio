import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import PageTransition from "@/components/ui/PageTransition"
import ProjectTransition from "@/components/ui/ProjectTransition"
import { Metadata } from "@/data/ProjectsManager"
import { Metadata as Meta } from "next"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>





export const metadata: Metadata = {
	"title": "Druhý projekt",
	"authors": [{
		"name": "Janův jiná"
	}],
	"image": "/fireman.webp",
	"color": "green",
	"year": 2023,
	"month": 10,
	"day": 7,
	"keywords": [ "art" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {

	let sth = "ale zase";


	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<div className="IndexPage">První projekt</div>
		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)