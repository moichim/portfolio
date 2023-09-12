import PageTransition from "@/components/ui/PageTransition"
import { Metadata } from "next"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

const variable = "Něco tu máme";

export const metadata: Metadata = {
	title: "Jan Jáchimúv projekt"

}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {

	let sth = "ale zase";


	return (
		<PageTransition ref={ref}>
			<div className="IndexPage">První projekt</div>
		</PageTransition>
	)
}

export default forwardRef(IndexPage)