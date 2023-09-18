import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { Metadata } from "@/data/ProjectsManager"
import Link from "next/link"
import { forwardRef } from "react"

import kompozice from "@/public/prichozi/kompozice.jpg"
import setup from "@/public/prichozi/setup.jpg"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
    "title": "Newcomers",
    "description": "Research & Concept & Algorithmic composition",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/prichozi/thumb.jpg",
    "color": "navy",
    "year": 2020,
    "month": 2,
    "day": 1,
    "keywords": ["interactive"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    // useScheme([{ bg: "#fcfcfc" }, { bg: "#1c1c1c" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Text md={6} lg={4} xl={3}>

                    <p>I wrote a generator of future Czech soundscape, which currently being influenced by the climate change.</p>
                    <p>The composition consists of:</p>
                    <ul>
                        <li>environmental sound including new animal species and new weather</li>
                        <li>musical layer featuring deformed traditional songs about the Czech countryside</li>
                    </ul>

                </Text>

                <Picture md={6} lg={5} src={kompozice} />
                <Picture md={6} lg={6} src={setup} />

                <Text md={6} lg={3}>

                    <p>Music features well known songs depicting the "traditional beauty" of Czech countryside.</p>
                    <p>Partitures of songs were deformed by principles, that are currently present in our nature: disappearing, extremities and unusual shifts.</p>

                    <ul>
                        <li>
                            <Link target="_blank" href="https://www.youtube.com/watch?v=QRF4DruNVwM">Vltava</Link> by Bedřich Smetana 
                            <br/>
                            <span style={{opacity:.3}}>(spring turns into a flood)</span>
                        </li>
                        <li>
                            <Link target="_blank" href="https://www.youtube.com/watch?v=QRF4DruNVwM">Green grass</Link>
                            <br/>
                            <span style={{opacity:.3}}>(melody stops and turnd into a siren)</span>
                        </li>
                        <li>
                            <Link target="_blank" href="https://www.youtube.com/watch?v=QRF4DruNVwM">It is raining</Link>
                            <br/>
                            <span style={{opacity:.3}}>(spring turns into a flood)</span>
                        </li>
                        <li>
                            <Link target="_blank" href="https://www.youtube.com/watch?v=QRF4DruNVwM">Czech anthem</Link>
                            <br/>
                            <span style={{opacity:.3}}>(unusual tonality)</span>
                        </li>
                    </ul>

                </Text>

                <Text md={6} lg={3}>

                    <p>New animal species in the composition are all introduced by the climate change which moves their territory towards the north.</p>

                    <ul>
                        <li>
                            <Link target="_blank" href="https://www.youtube.com/watch?v=QRF4DruNVwM">European Bee Eater</Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://en.wikipedia.org/wiki/Cetti%27s_warbler">Cetti's Warbler</Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://en.wikipedia.org/wiki/Eurasian_scops_owl">Eurasian Scops Owl</Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://en.wikipedia.org/wiki/Cicadidae">Cicada</Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://en.wikipedia.org/wiki/Golden_jackal">Golden Jackal</Link>
                        </li>
                    </ul>

                </Text>

                <Text>
                    <div style={{paddingTop: "4rem", textAlign: "center"}}>
                        <audio src="/prichozi/prichozi.wav" controls/>
                        <br />
                        <br />
                        <p>I am sorry, I havent found any better documentation.</p>
                    </div>
                </Text>

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)