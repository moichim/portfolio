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

import img1 from "@/public/meteo/ntc.png"
import img2 from "@/public/meteo/home.png"
import img3 from "@/public/meteo/graph.png"
import img4 from "@/public/meteo/thumb.png"

export const metadata: Metadata = {
    "title": "Mikroklima",
    "description": "Analytická aplikace",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/meteo/ntc.png",
    "color": "#2a0647",
    "year": 2023,
    "month": 12,
    "day": 1,
    "keywords": ["code", "featured"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    // useScheme([{ bg: "#312b36", text: "white", highlight: "yellow" }, { bg: "#312b36", highlight: "yellow" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Partial md={4} lg={3}>

                    <Text>
                        <p>Vyvíjím webovou aplikaci pro analýzu snímků z termokamery. Hlavní přínos aplikace:</p>
                        <ul>
                            <li>Hromadná úprava teplotních snímků</li>
                            <li>Porovnání naměřených teplot s širokým kontextem meterologických údajů</li>
                        </ul>
                        <p>Aplikace je využívána v rámci vzdělávacího projektu zaměřeného na environmentální výchovu.</p>
                        <p>Použité technologie: Next.js, Google Docs API, Google Spreadsheet API</p>
                    </Text>

                    <External
                        title="Otevřít aplikaci" url="https://microclimate.vercel.app/project/ntc/thermo"
                    ></External>

                </Partial>

                    <Partial md={8} lg={9}>
                        <div style={{boxShadow: "0rem 0rem .5rem gray", border: "3px solid black"}}>
                            <div style={{background: "black", height: "1rem", padding: ".3rem", display:"flex", gap: ".3rem"}}>
                                <div style={{display: "inline-block", aspectRatio: "1:1", backgroundColor: "red", borderRadius: "50%", height: ".8rem", width: ".8rem"}}> </div>
                                <div style={{display: "inline-block",aspectRatio: "1:1", backgroundColor: "green", borderRadius: "50%", height: ".8rem", width: ".8rem"}}> </div>
                                <div style={{display: "inline-block",aspectRatio: "1:1", backgroundColor: "yellow", borderRadius: "50%", height: ".8rem", width: ".8rem"}}> </div>
                            </div>
                        <iframe width="100%" style={{minHeight: "80vh", display: "block"}} src="https://microclimate.vercel.app/project/ntc/thermo"></iframe>
                        </div>
                    </Partial>

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)