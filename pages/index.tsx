import IndexText from "@/components/content/page/IndexText"
import ProjectsManager from "@/data/ProjectsManager"
import { Link } from "@madeinhaus/nextjs-page-transition"
import { InferGetStaticPropsType } from "next"

import FrontLayout from "@/components/layout/projects/FrontLayout"

import { Thumbnail } from "@/components/content/partials/Thumbnail"
import fflach from "@/public/blik/labordy-sanau/radio_1_B.jpg"
import cerrynt from "@/public/cerrynt/cerrynt_depo_01.jpg"
import labir from "@/public/labir/thumb.png"
import Head from "next/head"
import Image from "next/image"
import { useCallback, useEffect } from "react"
import { SCIRPT_ID } from "./projects/ntc/labir"
import Youtube from "@/components/content/partials/Youtube"
import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"

function IndexPage(props: InferGetStaticPropsType<typeof getStaticProps>) {

    const hasScript = useCallback(() => {
        const script = document.getElementById(SCIRPT_ID);
        return script !== null;
    }, []);

    const loadScript = useCallback(() => {

        if (!hasScript()) {
            const script = document.createElement("script");
            script.src = "https://termogram.labir.cz/lib/embed.js?version=1.3.0";
            script.id = SCIRPT_ID;
            document.head.appendChild(script);
        }

    }, [hasScript]);

    useEffect(() => {
        loadScript();
    }, [loadScript]);

    return <>

        <Head>
            <link rel="stylesheet" href="https://termogram.labir.cz/lib/embed.css?version=1.3.0"></link>
        </Head>
        <FrontLayout
            projects={props.projects}
            above={
                <IndexText>
                    <p>Dělám <Link href="/code">kód</Link>, <Link href="/design">design</Link> a <Link href="/interactive">interaktivní projekty</Link>.</p>
                </IndexText>
            }
        >

            <Thumbnail
                ltr={true}
                badge="březen 2026"
                title="Cerrynt"
                subtitle="Velkoformátová interaktivní projekce"
                bg="#262e3b"
                bgHover="#1e2736"
                color="white"
                content={
                        <Picture src={cerrynt} wrap={false} />
                }
                href="/projects/blik/cerrynt-pilsen"
            >

            </Thumbnail>

            <Thumbnail
                badge="Od roku 2024"
                title="@labirthermal/web"
                subtitle="Open-source libraries for work with IR camera recordings in webbrowsers."
                bg={"#4b224d"}
                bgHover={"#741e77ff"}
                color="white"
                ltr={false}
                content={<Picture src={labir} wrap={false} />}
                href="/projects/ntc/labir"
            >

            </Thumbnail>

            <Thumbnail
                ltr={true}
                badge="Léto 2025"
                title="Laboratoř zvuků"
                subtitle="Interaktivní instalace v DEPO2025, Plzeň"
                bg="#292929ff"
                bgHover="#3b3b3bff"
                color="white"
                content={
                        <Youtube id="o139xA2kJLo" wrap={false} />
                }
                href="/projects/blik/fflach-01"
            >

            </Thumbnail>

            <h2 style={{ marginBottom: "5rem" }}>Další projekty</h2>

        </FrontLayout>
    </>;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects({ keyword: "featured", publicFilter: true })
        }
    }

}

export default IndexPage