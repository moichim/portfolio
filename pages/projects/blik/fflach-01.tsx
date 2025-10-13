import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import img1 from "@/public/blik/pipak/1.png"
import img2 from "@/public/blik/pipak/2.png"
import img3 from "@/public/blik/pipak/3.png"
import img4 from "@/public/blik/pipak/4.png"
import img5 from "@/public/blik/pipak/5.png"
import img6 from "@/public/blik/pipak/6.png"
import img7 from "@/public/blik/pipak/7.png"
import img8 from "@/public/blik/pipak/8.png"
import img9 from "@/public/blik/pipak/9.png"

import Youtube from "@/components/content/partials/Youtube"
import Link from "next/link"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
    "title": "Fflach #1",
    "description": "Interaktivní exponát pro Laboratoř zvuků",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/blik/pipak/thumb.png",
    "color": "#180621",
    "year": 2025,
    "month": 6,
    "day": 14,
    "keywords": ["interactive", "processing", "supercollider"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{ bg: "#28292bff", text: "white", primary: "blue" }, { bg: "#1c1c1c" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Youtube id="JTdsOx3bkrk" md={6} />

                <Youtube id="4v0F1UUcQLc" md={6} />

                <Text md={4} lg={3}>
                    <p>Interaktivní "light painting" s procedurálním vizuálem a zvukem.</p>
                </Text>

                <Picture src={img1} md={6} />



                {/* <Picture src={img5} md={6} /> */}
                <Picture src={img6} md={6} />

                <Picture src={img8} md={6} />
                <Picture src={img9} md={6} />



                <Text md={4} lg={3}>
                    <h2>Technologie</h2>
                    <ul>
                        <li>Processing.org</li>
                        <li>SuperCollider</li>
                    </ul>
                    <h2>Provedení a výkon</h2>
                    <ul>
                        <li>5 x 8 m projekce</li>
                        <li>max. 800 animovaných částic</li>
                        <li>20-30 FPS</li>
                    </ul>
                </Text>

                <Picture src={img2} md={6} lg={4} />

                <Picture src={img3} md={6} />

                <Picture src={img4} md={6} />

                <Picture src={img7} md={6} lg={4} />

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)