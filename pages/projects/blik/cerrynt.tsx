import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import img1 from "@/public/cerrynt/cerrynt_butzke_01.jpg"
import img2 from "@/public/cerrynt/cerrynt_butzke_02.jpg"
import img3 from "@/public/cerrynt/cerrynt_butzke_03.jpg"
import img4 from "@/public/cerrynt/cerrynt_depo_01.jpg"
import img5 from "@/public/cerrynt/cerrynt_depo_02.jpg"
import img6 from "@/public/cerrynt/cerrynt_wolfiss_01.jpg"
import img7 from "@/public/cerrynt/cerrynt_wolfiss_02.jpg"
import img8 from "@/public/cerrynt/cerrynt_wolfiss_03.jpg"
import img9 from "@/public/cerrynt/cerrynt_wolfiss_04.jpg"
import mobile from "@/public/cerrynt/cerrynt-mobile.jpg";
import valmez1 from "@/public/cerrynt/valmez_01.jpeg"
import valmez2 from "@/public/cerrynt/valmez_02_1.jpeg"
import valmez3 from "@/public/cerrynt/valmez_03.jpeg"

import Youtube from "@/components/content/partials/Youtube"
import Link from "next/link"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
    "title": "Cerrynt",
    "description": "Interactive projection",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/cerrynt/thumb.jpg",
    "color": "#0d4441",
    "year": 2026,
    "month": 3,
    "day": 19,
    "keywords": ["interactive", "webgpu", "supercollider", "code"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{
        // bg: "#2c3542", text: "#1d697c", primary: "#18819b"
    }, {
        bg: "#44404d",
        primary: "#1dc1eb"
    }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>

            <Content>

                <Picture src={img6} md={6} lg={5} />

                <Text md={4} lg={3}>
                    <p><b>Cerrynt</b> [kerint] means <i>flow</i> or <i>path</i> in Welsh.</p>
                    <p>The installation is based on the principle of collective drawing, whose visual stream is guided by a generative algorithm.</p>
                    <p>It transforms input from visitors' smartphones into a fluid dialogue of shapes, traces, and messages.</p>
                    <p>An open space for shared imagination emerges, where individual gestures merge into an endless, ever-changing stream of images.</p>
                </Text>

                <Youtube id="0eMXOLZw1KM" md={6} lg={4} short credits="Camera by Jan Vlček"></Youtube>

                <Text md={12}>
                    <h2 style={{ textAlign: "center", marginTop: "2em" }}>How it works</h2>
                </Text>

                <Text md={4} lg={3}>
                    <h2>1. people go to <Link href="https://cerrynt.cz" target="_blank">cerrynt.cz</Link></h2>
                    <Picture src={img8} md={6} lg={4} credits="Photo by Jan Vlček" />
                </Text>



                <Text md={4} lg={3}>

                    <h2>2. they create their own drawing</h2>
                    <p>No installation required! The installation is controlled via the website.</p>
                    <Picture src={mobile} />

                </Text>

                <Text md={4} lg={3}>

                    <h2>3. the drawings appear in the generative drawing</h2>

                    <Picture src={img7} />

                </Text>

                <Picture src={img4} md={12} credits="Photo by Blik Blik Festival, Pilsen, CZ" />

                <Text md={12}>
                    <h2 style={{ textAlign: "center", marginTop: "2em" }}>Presentation history</h2>
                </Text>

                <Text md={4}>
                    <h2><strong>1.</strong> <span style={{ opacity: .3 }}>March 2026</span>
                        <br /><Link href="https://www.blikblik.cz/en/cerrynt" target="_blank">Festival Blik Blik</Link>
                        <br />Pilsen, CZ</h2>
                    <ul>
                        <li>70 000 visitors</li>
                        <li>3 days</li>
                        <li>300+ peolple playing with Cerrynt at once</li>
                    </ul>
                    <Picture src={img3} md={6} />
                </Text>

                <Text md={4}>
                    <h2><strong>2.</strong> <span style={{ opacity: .3 }}>September 2026</span>
                        <br /><Link href="https://www.svetlovalmez.cz/umelci/jan-jachim" target="_blank">Festival Světlo Valmez</Link>
                        <br />Valašsské Meziříčí, CZ</h2>
                    <ul>
                        <li>40 000 visitors</li>
                        <li>1 day</li>
                        <li>80+ peolple playing with Cerrynt at once</li>
                    </ul>
                    <Picture src={valmez1} md={6} />
                    <Picture src={valmez2} md={6} />
                </Text>


                <Picture src={img5} md={8} lg={7} credits="Photo by Blik Blik Festival, Pilsen, CZ" />


                <Text md={4} lg={3}>

                    <h1>Technology</h1>

                    <p>Cerrynt is a custom piece of software, written from scratch in TypeScript.</p>

                    <h3 style={{fontWeight: "bold"}}>Visuals</h3>
                    <p>Rendering, animation and mapping engine written using:</p>
                    <ul>
                        <li>WebGPU shaders & render pipeline</li>
                        <li>Electron.js</li>
                        <li>Lit.js</li>
                    </ul>
                    <h3 style={{fontWeight: "bold"}}>Sound</h3>
                    <p>Realtime procedural sound synthetised using:</p>
                    <ul>
                        <li>SuperCollider</li>
                    </ul>

                    <h3 style={{fontWeight: "bold"}}>Control</h3>
                    <p>Spectators use web interface to submit their drawings. This infrastructure was built using:</p>
                    <ul>
                        <li>Frontend website in React.js</li>
                        <li>Server in Express.js & Postgres</li>
                        <li>Realtime communication using Socket.io</li>
                    </ul>
                </Text>

                <Text md={6}>
                    <strong>Cerrynt</strong> animation concept was initially tested in the installation <Link href="/blik/symfonie-barev">Sound Lab</Link>.
                </Text>


            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)