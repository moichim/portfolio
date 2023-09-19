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
    "title": "Blablátor",
    "description": "Interaktivní exponát",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/maruska/1.jpg",
    "color": "#363d03",
    "year": 2022,
    "month": 3,
    "day": 27,
    "keywords": ["interactive", "featured", "code"],
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
                    <p>Software: Jan Jáchim<br />
                    Socha: Pavel Liška<br />
                    Hardware: Vít Trunec</p>
                    <p>Robot Blablátor je součástí interaktivní výstavy Lovci znaků, která byla prezentována v <a href="https://zak.tv/svetelna-interaktivni-rodinna-expozice-promeni-navstevniky-v-lovce-znaku" target="_blank">Plzni</a> a <a href="https://www.rtvs.sk/televizia/archiv/14625/407663#1209" target="_blank">Bratislavě</a>.</p>
                    <p>Socha po zmáčknutí tlačítka řekne nesmysl.</p>
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