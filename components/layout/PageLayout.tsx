import Header from "./navigation/Header";
import { ForwardRefComponent } from "framer-motion";
import PageTransition, { PageTransitionRef } from "../ui/PageTransition";
import { forwardRef } from "react";

function PageLayout( props: React.PropsWithChildren, ref: PageTransitionRef ) {

    return <>
        <PageTransition ref={ref}>
            {props.children}
        </PageTransition>
    </>

}


export default forwardRef( PageLayout );