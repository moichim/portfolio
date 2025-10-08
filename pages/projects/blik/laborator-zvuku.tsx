import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import img1 from "@/public/blik/labordy-sanau/radio_1_B.jpg"
import img2 from "@/public/blik/labordy-sanau/reels.jpg"
import img3 from "@/public/blik/labordy-sanau/meta_reklama.jpg"
import img6 from "@/public/maruska/6.jpg"
import img7 from "@/public/maruska/7.jpg"
import Youtube from "@/components/content/partials/Youtube"
import Link from "next/link"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
    "title": "Laboratoř zvuků",
    "description": "Design interaktivní expozice",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/blik/labordy-sanau/square_web_B.jpg",
    "color": "#180621",
    "year": 2025,
    "month": 6,
    "day": 14,
    "keywords": ["design", "featured"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{ bg: "#fcfcfc" }, { bg: "#1c1c1c" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Picture src={img1} />

                <Text md={4} lg={3}>
                    <p>Kampaň interaktivní expozice v plzeňském kulturním centrum <Link href="https://www.depo2015.cz/" target="_blank">DEPO2015</Link>.</p>
                </Text>

                <Picture src={img2} md={6} lg={3} />

                <Picture src={img3} md={6} lg={4} />

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)