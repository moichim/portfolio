import Content from "@/components/content/Content"
import BioItem from "@/components/content/page/BioItem"
import IndexText from "@/components/content/page/IndexText"
import Partial from "@/components/content/partials/Partial"
import Text from "@/components/content/partials/Text"
import PageLayout from "@/components/layout/page/PageLayout"
import ListLayout from "@/components/layout/projects/ListLayout"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"
import { Link } from "@madeinhaus/nextjs-page-transition"
import { formatTitle } from "@/components/utils/formatters"
import Head from "next/head"
import SkillItem from "@/components/content/page/SkillItem"
import ProjectGrid from "@/components/listing/ProjectGrid"
import { useLayoutContext } from "@/context/layout/LayoutContext"

function IndexPage(props: InferGetStaticPropsType< typeof getStaticProps> ) {

    const layout = useLayoutContext();

    return <PageLayout>

        <Head>
            <title>{formatTitle("Kód")}</title>
        </Head>

        <Content>

            <Partial lg={4}>

                <Text>

                    <h2>Programuji</h2>

                    <p>Mám zkušenosti s webovým vývojem a s kreativním kódováním v různých prostředích.</p>

                    <ul>
                        <li>
                            <a href="#skills" onClick={() => layout.setIsZoomed(z => !z)}>{layout.isZoomed ? "Skrýt podrobnosti" : "Zobrazit podrobnosti"}</a>
                        </li>
                        <li>
                            <Link href="#reference" scroll={true}>Přejít na referenční projekty</Link>
                        </li>
                    </ul>

                </Text>

            </Partial>

            <Partial md={6} lg={4}>

                <Text>

                    <h2 id="skills">Web</h2>

                    <div className="" role="list">

                        <SkillItem
                            technology="Frontend"
                            features={[
                                {
                                    name: "Next.js, Gatsby.js",
                                    years: "cca 3 roky",
                                    desc: "Několik menších webů jsem realizoval s pomocí moderních generátorů."
                                },
                                {
                                    name: "React.js",
                                    years: "cca 4 roky",
                                    desc: "Realizoval jsem několik komplexních aplikací jako jsou složitější formuláře, datagridy anebo dashboardy pro vizualizaci dat."
                                },
                                {
                                    name: "Electron.js",
                                    years: "cca 2 roky",
                                    desc: "Realizoval jsem několik interaktivních kiosků běžících na Rapsberry PI.",
                                    referencies: [
                                        { name: "Blablátor", link: "/projects/blik/blablator" }
                                    ]
                                },
                                {
                                    name: "Typescript"
                                },
                                
                                {
                                    name: "CSS",
                                    years: "cca 7 let",
                                    desc: "Tailwind.css, CSS modules, BEM"
                                },
                                {
                                    name: "p5.js",
                                },
                                {
                                    name: "Angular",
                                    minor: true,
                                    desc: "Realioval jsem v něm 1 menší interaktivní projekt.",
                                    referencies: [
                                        { name: "Blablátor", link: "/projects/blik/blablator" }
                                    ]
                                },
                                {
                                    name: "three.js / React Three Fiber",
                                    minor: true
                                },


                            ]}

                        />

                        <SkillItem
                            technology="Backend"
                            features={[
                                {
                                    name: "Nette",
                                    years: "od roku 2020",
                                    desc: "Reallizoval jsem v Nette 1 vetší projekt.",
                                    referencies: [
                                        { name: "edu.labir.cz", link: "https://edu.labir.cz" }
                                    ]
                                },
                                {
                                    name: "Wordpress",
                                    years: "od roku 2015",
                                    desc: "Na Wordpressu jsem začínal. Resp. ještě předtím jsem začal s Drupalem...",
                                    referencies: [
                                        { name: "pronajmy-epre.cz", link: "https://pronajmy-epre.cz" }
                                    ]
                                },
                                {
                                    name: "MySQL / MariaDB"
                                },
                                {
                                    minor: true,
                                    name: "Django / Wagtail CMS",
                                    years: "2017 - 2019",
                                    desc: "Provozuji meněí VPS s několika weby na platformě Wagtail CMS.",
                                    referencies: [
                                        { name: "matej.rizek.serchan.cz", link: "http://matej.rizek.serchan.cz/" }
                                    ]
                                },
                                {
                                    minor: true,
                                    name: "Express.js",
                                    desc: "V rámci Electron.js jsem jednoduchým způsobem implementoval webový server."
                                }


                            ]}

                        />

                    </div>

                </Text>

            </Partial>

            <Partial md={6} lg={4}>

                <Text>

                    <h2>Multimédia</h2>

                    <div className="" role="list">

                        <SkillItem
                            technology="Interaktivita"
                            features={[
                                {
                                    name: "Processing.org",
                                    years: "cca 7 let",
                                    desc: <span>Ovládám framework <a href="https://processing.org" target="_blank">Processing.org</a> pro interaktivní aplikace v jazyce JAVA. Prošel jsem si knihu <a target="_blank" href="https://natureofcode.com/">Nature of Code</a> od Daniela Shiffmana.</span>,
                                    referencies: [
                                        { name: "Instalace s kinectem", link: "/projects/blik/souzvon" },
                                        { name: "Instalace se čtením RTSP streamu z termokamery", link: "/projects/blik/maruska" }
                                    ]
                                },
                                {
                                    name: "Unity 3D",
                                    minor: true
                                },
                                {
                                    name: "openFrameworks",
                                    minor: true
                                }


                            ]}

                        />

                        <SkillItem
                            technology="Zvuk"
                            features={[
                                {
                                    name: "SuperCollider",
                                    years: "od roku 2019",
                                    desc: "Ve zvukovém serveru SuperCollider píšu aplikace pro algorytmický zvuk.",
                                    referencies: [
                                        { name: "edu.labir.cz", link: "https://edu.labir.cz" }
                                    ]
                                },
                                {
                                    name: "Wordpress",
                                    years: "od roku 2015",
                                    desc: "Na Wordpressu jsem začínal. Resp. ještě předtím jsem začal s Drupalem...",
                                    referencies: [
                                        { name: "pronajmy-epre.cz", link: "https://pronajmy-epre.cz" }
                                    ]
                                },
                                {
                                    minor: true,
                                    name: "Django / Wagtail CMS",
                                    years: "2017 - 2019",
                                    desc: "Provozuji meněí VPS s několika weby na platformě Wagtail CMS.",
                                    referencies: [
                                        { name: "matej.rizek.serchan.cz", link: "http://matej.rizek.serchan.cz/" }
                                    ]
                                },
                                {
                                    minor: true,
                                    name: "Express.js",
                                    desc: "V rámci Electron.js jsem jednoduchým způsobem implementoval webový server."
                                }


                            ]}

                        />

                    </div>

                </Text>

            </Partial>

        </Content>

        <IndexText id="reference">
            <h2>Projekty, které jsem kódoval:</h2>
        </IndexText>

        <ProjectGrid projects={props.projects}/>

    </PageLayout>;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( {keyword: "code" } )
        }
    }

}

export default IndexPage