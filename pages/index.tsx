import IndexText from "@/components/content/page/IndexText"
import ProjectsManager from "@/data/ProjectsManager"
import { Link } from "@madeinhaus/nextjs-page-transition"
import { InferGetStaticPropsType } from "next"

import FrontLayout from "@/components/layout/projects/FrontLayout"

import { Thumbnail } from "@/components/content/partials/Thumbnail"
import img1 from "@/public/blik/labordy-sanau/radio_1_B.jpg"
import Head from "next/head"
import Image from "next/image"
import { useCallback, useEffect } from "react"
import { SCIRPT_ID } from "./projects/ntc/labir"
import Youtube from "@/components/content/partials/Youtube"

function IndexPage(props: InferGetStaticPropsType<typeof getStaticProps>) {

    const hasScript = useCallback(() => {
        const script = document.getElementById(SCIRPT_ID);
        return script !== null;
    }, []);

    const loadScript = useCallback(() => {

        if (!hasScript()) {
            const script = document.createElement("script");
            script.innerHTML = "import labirembed from 'https://cdn.jsdelivr.net/npm/@labir/embed@1.3.3/+esm'"
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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@labir/embed@1.3.3/dist/embed.min.css"></link>
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
                badge="Léto 2025"
                title="Laboratoř zvuků"
                subtitle="Interaktivní instalace v DEPO2025, Plzeň"
                bg="#292929ff"
                bgHover="#3b3b3bff"
                color="white"
                text={<>
                    <p>léto 2025,<br />DEPO2015,<br />Plzeň</p>
                </>}
                content={
                    <Youtube id="o139xA2kJLo" />
                }
                href="/projects/blik/fflach-01"
            >

            </Thumbnail>

            <Thumbnail
                badge="Od roku 2024"
                title="@labir/embed"
                subtitle="Open-source knihovny (TypeScript)"
                bg={"#4b224d"}
                bgHover={"#741e77ff"}
                color="white"

                text={<div style={{opacity: .5}}>
                    <p>Ekosystém TS knihoven pro práci se snímky z termokamer ve webovém prohlížeči.</p>
                </div>}
                ltr={false}
                content={<div style={{ padding: "1rem" }}>
                    <thermal-file-app
                        url="/labir/velbloud.lrc"
                        label="LabIR Edu Analyser"
                        license="CC BY-SA 4.0"
                        author="Jan Jáchim"
                        palette="iron"
                        layout="advanced"
                        showfullscreen="false"
                    ></thermal-file-app>
                </div>}
                href="/projects/ntc/labir"
            >

            </Thumbnail>

            <h2 style={{ marginBottom: "5rem" }}>Další projekty</h2>

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