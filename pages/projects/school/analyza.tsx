import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import Youtube from "@/components/content/partials/Youtube"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import img1 from "@/public/analyza/jj_matik_a.jpg"
import img2 from "@/public/analyza/jj_matik_b.jpg"
import img3 from "@/public/analyza/jj_matik_c.jpg"
import img4 from "@/public/analyza/jj_matik_d.jpg"
import img5 from "@/public/analyza/jj_matik_e.jpg"



type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
    "title": "Matematická analýza",
    "description": "Intervence",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/analyza/jj_matik_a.jpg",
    "color": "#210901",
    "year": 2011,
    "month": 4,
    "day": 17,
    "keywords": ["school"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{ bg: "#fcfcfc" }, { bg: "#1c1c1c" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Picture md={6} src={img2}></Picture>
                <Text md={6} lg={3} xl={2}>
                    <p>Vyrobil jsem "kopii" vysokoškolských skript a tajně jsem ji podvrhl do univerzitní knihovny.</p>
                </Text>
                <Picture md={6} lg={4} src={img4}></Picture>
                <Picture md={8} src={img1}></Picture>
                <Picture md={6} lg={3} src={img5}></Picture>
                <Picture md={6} src={img3}></Picture>

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)