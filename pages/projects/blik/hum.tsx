import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import img1 from "@/public/maruska/1.jpg"
import img2 from "@/public/maruska/2.jpg"
import img3 from "@/public/maruska/3.jpg"
import img6 from "@/public/maruska/6.jpg"
import img7 from "@/public/maruska/7.jpg"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
    "title": "HUM",
    "description": "Videomapping",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/maruska/1.jpg",
    "color": "#180621",
    "year": 2023,
    "month": 3,
    "day": 27,
    "keywords": ["interactive", "featured"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{ bg: "#fcfcfc" }, { bg: "#1c1c1c" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Picture md={6} lg={4} src={img2}></Picture>
                <Picture md={6} lg={4} src={img7}></Picture>
                <Text md={6} lg={3}>
                    <p>Projekce vznikla v rámci School of Videomapping, 2023 Plzeň pod vedením Luca Pulvirenti a Cristina Santangelo.</p>
                    <p>Stopáž: 1 min</p>
                    <p>Zvuk: Generativní kompozice naprogramovaná v SuperCollideru</p>
                    <p>Vizuál: Resolume Arena</p>
                </Text>
                <Picture md={6} lg={3} src={img6}></Picture>
                <Picture md={6} lg={4} src={img3}></Picture>
                <Text md={6} lg={3}>
                    <p>Through the thermocamera, the visitor can discover that the head of the girl is hot.</p>
                    <p>The light and sound is controlled by the thermocamera - by the temperature of the focal point of the camera.</p>
                    <p>When the camera points at the sculpture's head, the girl starts singing. Whenever the IR camera sees a human, the sculpture starts heartbeating.</p>
                </Text>

                <Picture md={6} lg={4} src={img6}></Picture>
                <Picture md={6} lg={8} src={img1}></Picture>

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)