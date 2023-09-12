import PageLayout from "@/components/layout/PageLayout"
import PageTransition from "@/components/ui/PageTransition"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {
	return (
		<PageLayout ref={ref}>
			<div className="IndexPage">Úvodní stránka</div>
		</PageLayout>
	)
}

export default forwardRef(IndexPage)