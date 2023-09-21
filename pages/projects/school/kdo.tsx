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
    "title": "Kdo",
    "description": "Zvuková instalace",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/kdo/kdo.jpg",
    "color": "#210901",
    "year": 2011,
    "month": 1,
    "day": 17,
    "keywords": ["school","processing"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{ bg: "#fcfcfc" }, { bg: "#1c1c1c" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>


                <Text>
                    <div style={{textAlign: "center"}}>
                        <audio src="/kdo/kdo.mp3" controls/>
                    </div>
                </Text>
                <Text md={6} lg={3} >
                    <p>Školní práce realizovaná v Processingu s využitím text to speech enginu Mbrola.</p>
                    
                </Text>
                <Text md={6} lg={3}>
                    <ul>
                        <li>prolezl jsem xenofobní diskuze na zpravodajských serverech.</li>
                        <li>sesbíral jsem velké množství hodnitících a nenávistných výroků o různých etnikách</li>
                        <li>konkrétní etnika jsem nahradil za "my" a "oni"</li>
                        <li>Markov chain řadí věty za sebe tak, aby vždy 2 dávaly smysl, ale celý text smysl nemá.</li>
                    </ul>
                </Text>

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)