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
    "image": "/cerrynt/cerrynt_butzke_02.jpg",
    "color": "#180621",
    "year": 2026,
    "month": 3,
    "day": 19,
    "keywords": ["interactive", "webgpu", "supercollider", "code"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{ bg: "#101318", text: "white", primary: "blue" }, { bg: "#1c1c1c" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Picture src={img2} md={6} lg={4} />

                <Text md={4} lg={3}>
                    <p>'Cerrynt' [kerint] means 'flow' or 'path' in Welsh. The installation is based on the principle of collective drawing, whose visual stream is guided by a generative algorithm. It transforms input from visitors' smartphones into a fluid dialogue of shapes, traces, and messages. An open space for shared imagination emerges, where individual gestures merge into an endless, ever-changing stream of images.</p>
                </Text>

                <Youtube id="0eMXOLZw1KM" md={6} lg={4} short >Camera by Jan Vlček</Youtube>

                <Picture src={img6} md={6} lg={5}>Photo by Jan Vlček</Picture>

                <Picture src={img8} md={6} >Photo by Jan Vlček</Picture>


                <Text md={12}>
                    <h2 style={{textAlign: "center", marginTop: "2em"}}>Technology</h2>
                </Text>

                <Text md={4} lg={3}>
                    <h2>Visual</h2>
                    <p>Custom rendering and animation engine written using:</p>
                    <ul>
                        <li>WebGPU - shaders</li>
                        <li>Electron.js - build</li>
                        <li>Lit.js - GUI elements</li>
                    </ul>
                </Text>



                <Text md={4} lg={3}>

                    <h2>Sound</h2>
                    <p>Realtime procedural sound synthetised using:</p>
                    <ul>
                        <li>SuperCollider</li>
                    </ul>
                    
                </Text>

                <Text md={4} lg={3}>

                    <h2>Control</h2>
                    <p>Spectators use web interface to submit their drawings. This infrastructure was built using:</p>
                    <ul>
                        <li>React.js - interface</li>
                        <li>Express.js - backend</li>
                        <li>Socket.io - realtime communication</li>
                    </ul>
                    
                    
                </Text>

                <Picture src={img4} md={12} >Photo by Blik Blik Festival, Pilsen, CZ</Picture>

                <Picture src={img7} md={6} lg={4} >Photo by Jan Vlček</Picture>

                <Picture src={img1} md={6} >Photo by Jan Vlček</Picture>

                <Picture src={img5} md={6} lg={4}>Photo by Blik Blik Festival, Pilsen, CZ</Picture>

                <Picture src={img3} md={6} />

                

                

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)