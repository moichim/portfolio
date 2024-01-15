import Content from "@/components/content/Content";
import Partial from "@/components/content/partials/Partial";
import Picture from "@/components/content/partials/Picture";
import ProjectLayout from "@/components/layout/projects/ProjectLayout";
import { useScheme } from "@/context/scheme/SchemeContextProvider";
import { Metadata } from "@/data/ProjectsManager";
import { forwardRef } from "react";
import External from "@/components/content/partials/External"

import Text from "@/components/content/partials/Text"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import img1 from "@/public/meteo/screen.png"
import img2 from "@/public/meteo/home.png"
import img3 from "@/public/meteo/graph.png"
import img4 from "@/public/meteo/thumb.png"

export const metadata: Metadata = {
    "title": "Mikroklima",
    "description": "Analytická aplikace",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/meteo/thumb.png",
    "color": "#2a0647",
    "year": 2023,
    "month": 12,
    "day": 1,
    "keywords": ["code", "featured"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{ bg: "#312b36", text: "white", highlight: "yellow" }, { bg: "#312b36", highlight: "yellow" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Partial md={4} lg={3}>

                    <Text>
                        <p>Vyvíjím webovou aplikaci pro analýzu meterologických dat.</p>
                        <p>Aplikace je využívána v rámci vzdělávacího projektu zaměřeného na environmentální výchovu.</p>
                        <p>Použité technologie: Next.js, Google Docs API, Google Spreadsheet API</p>
                    </Text>

                    <External
                        title="Otevřít aplikaci" url="https://meteo-pho-foxi.vercel.app/core"
                    ></External>

                </Partial>

                <Picture md={3} lg={3} src={img2} />

                <Picture md={12} lg={6} src={img1} />

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)