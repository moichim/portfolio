import IndexText from "@/components/content/page/IndexText"
import ProjectsManager from "@/data/ProjectsManager"
import { Link } from "@madeinhaus/nextjs-page-transition"
import { InferGetStaticPropsType } from "next"

import FrontLayout from "@/components/layout/projects/FrontLayout"

import { Thumbnail } from "@/components/content/partials/Thumbnail"
import ThumbnailGrid from "@/components/content/partials/ThumbnailGrid"
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
import brain from "@/public/brain/thumb2.png"
import styles from "./index.module.scss"

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
        <FrontLayout
            projects={props.projects}
            above={
                <IndexText>
                    <p>I do <Link href="/code">code</Link>, <Link href="/design">design</Link> and <Link href="/interactive">interactive projects</Link>.</p>
                </IndexText>
            }
        >

            <ThumbnailGrid>
                <Thumbnail
                    variant="vertical"
                    ltr={false}
                    badge="September 2026"
                    title="Brain"
                    subtitle="Interactive installation of brain neurons."
                    bg="#42291e"
                    bgHover="#b68832"
                    color="white"
                    content={
                        <Picture src={brain} wrap={false} />
                    }
                    href="/projects/blik/brain"
                ></Thumbnail>

                <Thumbnail
                    variant="vertical"
                    ltr={true}
                    badge="March 2026"
                    title="Cerrynt"
                    subtitle="Large-scale interactive projection enabling the audience to contribute to the dialogue of drawings."
                    bg="#21104b"
                    bgHover="rgb(82, 45, 150)"
                    color="white"
                    content={
                        <Picture src={cerrynt} wrap={false} />
                    }
                    href="/projects/blik/cerrynt"
                >

                </Thumbnail>
            </ThumbnailGrid>

            <Thumbnail
                badge="Since 2024"
                title="@labirthermal/web"
                subtitle="Open-source libraries for work with IR camera recordings in the web browsers."
                bg={"#4b224d"}
                bgHover={"#741e77ff"}
                color="white"
                ltr={false}
                content={<div className={styles.thermalShowcase}>
                    <div className={styles.thermalSlot}>
                        <thermal-file-app
                            url="/labir/snimek.lrc"
                            label="Showcase"
                            license="CC BY-SA 4.0"
                            author="Jan Jáchim"
                            // showhistogram="false"
                            showfullscreen="false"
                            layout="advanced"
                            advanced-palettes="true"
                        ></thermal-file-app>
                    </div>
                </div>}
                href="/projects/ntc/labir"
            >

            </Thumbnail>

            <h2 style={{ marginBottom: "5rem" }}>More projects</h2>

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