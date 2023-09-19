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
    "title": "Zářivý úsměv dívky s kyticí",
    "description": "Interaktivní instalace pro BLIK BLIK 2020",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/maruska/1.jpg",
    "color": "#210901",
    "year": 2020,
    "month": 6,
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
                    <p>The instalation tried to revive and give voice to a strange sculpture with unclear history.</p>
                    <p>It was sculpted during the communist era to decorate official ceremonies of that time. But for some reason, the sculpture spent most of its career forgotten and lying on the backyard. Instead of being exposed to sights of socialist youth, the sculpture witnessed nothing else but temperature and humidity.</p>
                    <p>In the installation, visitor could observe the sculpture through the thermocamera and discover what is in her head - fragments of melodies of marches and communist songs.</p>
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