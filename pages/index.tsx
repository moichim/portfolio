import IndexText from "@/components/content/page/IndexText"
import ListLayout from "@/components/layout/projects/ListLayout"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"
import { Link } from "@madeinhaus/nextjs-page-transition"

import FrontLayout from "@/components/layout/projects/FrontLayout"

import img1 from "@/public/blik/labordy-sanau/radio_1_B.jpg"
import Picture from "@/components/content/partials/Picture"
import Content from "@/components/content/Content"
import Text from "@/components/content/partials/Text"
import { Thumbnail } from "@/components/content/partials/Thumbnail"
import { useCallback, useEffect } from "react"
import { SCIRPT_ID } from "./projects/ntc/labir"
import Partial from "@/components/content/partials/Partial"
import Head from "next/head"
import Image from "next/image"

function IndexPage(props: InferGetStaticPropsType<typeof getStaticProps>) {

    const hasScript = useCallback(() => {
        const script = document.getElementById(SCIRPT_ID);
        return script !== null;
    }, []);

    const loadScript = useCallback(() => {

        if (!hasScript()) {
            const script = document.createElement("script");
            script.innerHTML = "import labirembed from 'https://cdn.jsdelivr.net/npm/@labir/embed@1.2.67/+esm'"
            script.type = "module";
            script.id = SCIRPT_ID;
            document.head.appendChild(script);
        }

    }, [hasScript]);

    useEffect(() => {
        loadScript();
    }, [loadScript]);

    return <>

        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@labir/embed@1.2.67/dist/embed.min.css"></link>
        </Head>
        <FrontLayout
            projects={props.projects}
            above={
                <IndexText>
                    <p className="mobileOnly">Jmenuji se Jan Jáchim.</p>
                    <p>Dělám <Link href="/code">kód</Link>, <Link href="/design">design</Link> a <Link href="/interactive">interaktivní projekty</Link>.</p>
                </IndexText>
            }
        >

            <Thumbnail
                ltr={true}
                badge="Připravovaná výstava"
                title="Laboratoř zvuků"
                bg="#9bf2ef"
                text={<>
                    <p>Interaktivní expozice pro&nbsp;děti</p>
                    <p>↓</p>
                    <p>léto 2025,<br />DEPO2015,<br />Plzeň</p>
                </>}
                content={<Link href="/projects/blik/laborator-zvuku"><Image src={img1} alt="Něco tu je" style={{ width: "100%", height: "auto", display: "block" }} /></Link>}
                href="/projects/blik/laborator-zvuku"
            >

            </Thumbnail>

            <Thumbnail
                badge="Opensource knihovna"
                title="@labir/embed"
                bg={"#4b224d"}
                color="white"

                text={<p>Pracujte se snímky z termokamer v prohlížeči.</p>}
                ltr={false}
                content={<div style={{ padding: "1rem" }}>
                    <thermal-file-app
                        url="/labir/snimek.lrc"
                        label="LabIR Edu Analyser"
                        license="CC BY-SA 4.0"
                        author="Jan Jáchim"
                        palette="jet"
                        layout="advanced"
                        analysis1="Analýza A;rectangle;color:Blue;top:14;left:8;width:65;height:31"
                        analysis2="Analýza B;ellipsis;color:Green;top:34;left:102;width:34;height:47"
                    ></thermal-file-app>
                </div>}
                href="/projects/ntc/labir"
            >

            </Thumbnail>

            <h2 style={{marginBottom: "5rem"}}>Další projekty</h2>

        </FrontLayout>
    </>;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects({ keyword: "featured", visibility: true })
        }
    }

}

export default IndexPage