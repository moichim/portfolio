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
import Youtube from "@/components/content/partials/Youtube"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
    "title": "HUM",
    "description": "Videomapping",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/blik/hum/hum.jpg",
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

                <Youtube id="FhpBt2aWzn8" sm={6} md={4} lg={3}short>Záznam z akce</Youtube>

                <Youtube id="ZqE5RLFFzc0" sm={6} md={4} lg={3}short>Animace</Youtube>

                <Text md={4} lg={3}>
                    <p>Videomapping na budově Studijní a vědecké knihovny Plzeňského kraje.</p>
                    <p>Městská zvuková "Urban Jungle".</p>
                    <p>Stopáž: 1 min</p>
                    <p>Zvuk: Generativní kompozice naprogramovaná v SuperCollideru z využitím vlastních samplů a syntetizátorů</p>
                    <p>Vizuál: Resolume Arena</p>
                    <p>Projekce vznikla v rámci School of Videomapping, 2023 Plzeň pod vedením Luca Pulvirenti a Cristina Santangelo.</p>
                </Text>

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)