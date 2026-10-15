import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import img1 from "@/public/brain/20261008_163733.jpg"
import img2 from "@/public/brain/20261008_163905.jpg"
import img3 from "@/public/brain/20261008_164153.jpg"
import img4 from "@/public/brain/20261008_164156.jpg"
import img5 from "@/public/brain/20261008_164201.jpg"
import img6 from "@/public/brain/20261008_164449.jpg"
import img7 from "@/public/brain/20261008_164451.jpg"
import img8 from "@/public/brain/20261008_164458.jpg"
import img9 from "@/public/brain/20261008_164502.jpg"
import img10 from "@/public/brain/20261008_164504.jpg"
import img11 from "@/public/brain/20261008_164508.jpg"
import img12 from "@/public/brain/20261008_164514.jpg"
import img13 from "@/public/brain/20261008_164516.jpg"
import img14 from "@/public/brain/20261008_164523.jpg"
import img15 from "@/public/brain/20261008_164749.jpg"
import img16 from "@/public/brain/20261008_164753.jpg"
import img17 from "@/public/brain/20261008_164756.jpg"
import img18 from "@/public/brain/20261008_164800.jpg"
import img19 from "@/public/brain/20261008_164801.jpg"
import img20 from "@/public/brain/20261008_164806.jpg"
import img21 from "@/public/brain/20261008_164807.jpg"
import img22 from "@/public/brain/20261008_164813.jpg"
import img23 from "@/public/brain/20261008_164816.jpg"
import img24 from "@/public/brain/20261008_165245.jpg"
import img25 from "@/public/brain/20261008_165250.jpg"
import img26 from "@/public/brain/20261008_165257.jpg"
import img27 from "@/public/brain/20261008_170422.jpg"
import img28 from "@/public/brain/20261008_170433.jpg"
import img29 from "@/public/brain/20261008_170438.jpg"
import img30 from "@/public/brain/thumb.jpg"
import img31 from "@/public/brain/thumb2.jpg"
import img32 from "@/public/brain/thumb2.png"

import Youtube from "@/components/content/partials/Youtube"
import Link from "next/link"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
    "title": "Brain",
    "description": "Interactive installation",
    "authors": [{
        "name": "Jan Jáchim",
        "url": "https://janjachim.cz"
    }, {
        "name": "Matěj Řízek",
        "url": "https://matej.rizek.serchan.cz"
    }],
    "image": "/brain/thumb2.jpg",
    "color": "#0d4441",
    "year": 2026,
    "month": 9,
    "day": 29,
    "keywords": ["interactive", "supercollider", "code" ],
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

                <Picture src={img32} md={8} />

                <Text md={4} lg={3}>
                    
                    <p>Large scale installation is part of interactive exhibition <strong>Do těla / Inside the Body</strong> at DEPO2015, Pilsen, CZ.</p>
                    <p>The <strong>Brain</strong> installation shows a portion of neural structures using 17 km of optical fibres in a 5 x 4 m object.</p>
                    <p>Collaboration with <Link href="https://www.instagram.com/matejrizek/?hl=de" rel="nofollow" target="_blank">Matěj Řízek</Link> who helped with the physical object inlstallation, design and planning.</p>
                </Text>

                 <Picture src={img27} md={4} />
                 <Picture src={img28} md={3} />

                 <Picture src={img9} md={3} />

                
                
               


                <Text md={12}>
                    <h2 style={{textAlign: "center", marginTop: "2em"}}>Technology</h2>
                </Text>

                <Text md={4} lg={3}>
                    <h2>Lights</h2>
                    <p>Custom Artnet/DMX controller:</p>
                    <ul>
                        <li>Electron.js</li>
                        <li>websockets</li>
                    </ul>
                </Text>



                

                <Text md={4} lg={3}>

                    <h2>Interactivity</h2>
                    <p>Installation is controlled by the vitisor's face expressions. The kiosk contains a NIR camera. the recognition was written using:</p>
                    <ul>
                        <li>Python</li>
                        <li>OpenCV</li>
                        <li>websockets</li>
                    </ul>
                    
                </Text>

                <Text md={4} lg={3}>

                    <h2>Sound</h2>
                    <p>Realtime procedural sound synthetised using:</p>
                    <ul>
                        <li>SuperCollider</li>
                    </ul>
                    
                </Text>

                <Picture src={img1} md={6} />

                <Picture src={img7} md={6} lg={4} />

                
                <Picture src={img16} md={3} />
                <Picture src={img15} md={3} />
                <Picture src={img17} md={3} />
                <Picture src={img22} md={3} />

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)