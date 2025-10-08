import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import Youtube from "@/components/content/partials/Youtube"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import img1 from "@/public/other-places/1.jpg"
import img2 from "@/public/other-places/2.jpg"
import img3 from "@/public/other-places/3.jpg"
import img4 from "@/public/other-places/4.jpg"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
    "title": "Other places",
    "description": "Audiovisual installation",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/other-places/4.jpg",
    "color": "#210901",
    "year": 2013,
    "month": 6,
    "day": 27,
    "keywords": ["school"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{ bg: "#fcfcfc" }, { bg: "#1c1c1c" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Youtube md={6} lg={7} id="ChmfrNm9mJk"/>
                <Text md={6} lg={3}>
                    <p>Movie with no image, sound illusion of a fictionnal hideout.</p>
                </Text>

                <Picture md={6} lg={3} src={img1}></Picture>
                <Picture md={6} lg={3} src={img2}></Picture>
                <Picture md={6} lg={3} src={img3}></Picture>
                <Picture md={6} lg={3} src={img4}></Picture>

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)