import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import Content from "@/components/partials/content/Content"
import Partial from "@/components/partials/content/Partial"
import Picture from "@/components/partials/content/Picture"
import Youtube from "@/components/partials/content/Youtube"
import Text from "@/components/partials/content/Text"
import { useScheme } from "@/context/color/ColorContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import Link from "next/link"
import { forwardRef } from "react"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
    "title": "Souzvon",
    "description": "Interaktivní instalace pro BLIK BLIK 2019",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/souzvon/4.jpg",
    "color": "navy",
    "year": 2019,
    "month": 3,
    "day": 26,
    "keywords": ["interactive"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{ bg: "#fcfcfc" }, { bg: "#1c1c1c" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Youtube id="JJC4rQWPUvo" md={6} lg={6} />
                <Picture md={6} lg={3} src="/souzvon/1.jpg" />
                <Partial md={6} lg={3}>
                    <Text>Světelná instalace využívající Kinect, mlhu a algoritmickou hudební kompozici.</Text>
                    <Picture src="/souzvon/4.jpg" />
                </Partial>
                <Text md={6} lg={3}>
                    <p>Je-li světelný objekt nerušen, žije svým vlastním životem. Paprsky se udržují v nekonečném rytmickém pohybu a temně duní.</p>
                    <p>Divák může vyvážený stav narušit a instalaci tak oživit. Paprsky reagují na dotyk - odrážejí se od lidí, nabírají rychlost, mění směr a vyluzují nečekané zvuky.</p>
                    <p>Světelný objekt postupně sice zaniká, ale divák je svědkem a spoluautorem nečekané hudební kompozice.</p>
                </Text>
                <Picture md={6} xl={9} src="/souzvon/5.jpg" />
                <Picture md={6} lg={3} src="/souzvon/2.jpg" />
                <Partial md={6}>
                    <Youtube id="tNBG_siHMxY" />
                    <Youtube id="QEU6CLzeBQQ" />
                </Partial>
                <Text md={6} xl={3}>

                    <p>Technická specifikace:</p>
                    <p>Hardware:</p>
                    <ul>
                        <li>DLP projektor</li>
                        <li>hazer</li>
                        <li>2-4 reproduktory</li>
                        <li>baletizol min 4x6 metrů</li>
                    </ul>

                    <p>Software:</p>
                    <ul>
                        <li>Processing & OpenKinnect (interakce a projekce)</li>
                        <li>SuperCollider (zvuk)</li>
                        <li>OpenStageControl (nastavení)</li>
                    </ul>


                </Text>
                <Picture md={6} lg={5} src="/souzvon/3.jpg" />
                <Picture md={6} lg={4} src="/souzvon/6.png" />

            </Content>

            <Link href="/">Home</Link>
        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)