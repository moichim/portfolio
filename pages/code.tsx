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
                                    name: "Next.js",
                                    years: "od roku 2023",
                                    desc: "V Next.js vyvíjím aplikaci pro vzdělávání a výzkum - webové rozhraní pro analýzu termogramů v kontextu meterologických dat.",
                                    referencies: [
                                        { name: "Mikroklima", link: "/projects/ntc/meteo" }
                                    ]
                                },
                                
                                {
                                    name: "React.js",
                                    years: "od roku 2019",
                                    desc: "Vizualizace dat, formuláře, datagridy či dashboardy."
                                },
                                {
                                    name: "Electron.js",
                                    years: "cca 2 roky",
                                    desc: "Interaktivní kiosky běžící na Rapsberry PI.",
                                    referencies: [
                                        { name: "Blablátor", link: "/projects/blik/blablator" }
                                    ]
                                },
                                {
                                    name: "Typescript"
                                },
                                
                                {
                                    name: "CSS",
                                    years: "od roku 2014",
                                    desc: "Tailwind.css, CSS modules, BEM"
                                },
                                {
                                    name: "p5.js",
                                },
                                {
                                    name: "Lottie Files",
                                    // desc: "V rámci Electron.js jsem jednoduchým způsobem implementoval webový server."
                                },
                                {
                                    name: "Gatsby.js",
                                    years: "2019 - 2020",
                                    desc: "Pro klienty jsem realizoval prezentační webové aplikace.",
                                    minor: true
                                },
                                {
                                    name: "Angular",
                                    minor: true,
                                    // desc: "Realioval jsem v něm 1 menší interaktivní projekt.",
                                    referencies: [
                                        { name: "Blablátor", link: "/projects/blik/blablator" }
                                    ]
                                },
                                {
                                    name: "Vue 3",
                                    minor: true,
                                    // desc: "Realioval jsem v něm 1 menší interaktivní projekt.",
                                }
                                
                            ]}

                        />

                        <SkillItem
                            technology="Backend"
                            features={[
                                {
                                    name: "GraphQL",
                                    desc: "Implementoval jsem ApolloServer v Next.js. Používám @apollo/client."
                                },
                                {
                                    minor: true,
                                    name: "Nodejs",
                                    desc: "V Electron.js využívám Express.js, v Next.js využívám @apollo/server."
                                },
                                {
                                    name: "Nette",
                                    years: "od roku 2020",
                                    desc: "Vyvinul jsem středně velký portál pro sdílení vzdělávacího obsahu a zapůjčování termokamer.",
                                    referencies: [
                                        { name: "edu.labir.cz", link: "https://edu.labir.cz" }
                                    ]
                                },
                                {
                                    name: "Wordpress",
                                    years: "od roku 2015",
                                    desc: "Na Wordpressu jsem začínal. Vyvíjel jsem custom šablony a pluginy pro klienty."
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
                                    years: "od roku 2015",
                                    desc: <span>Ovládám framework <a href="https://processing.org" target="_blank">Processing.org</a> pro interaktivní aplikace v Javě.</span>,
                                    referencies: [
                                        { name: "Projekty v Processingu", link: "/processing" }
                                    ]
                                },
                                {
                                    name: "Unity 3D",
                                    minor: true,
                                    desc: "Absolvoval jsem základní kurz skriptování."
                                },
                                {
                                    name: "Blender 3D",
                                    years: "od roku 2018",
                                    // minor: true,
                                    referencies: [
                                        { name: "Projekty v Blenderu", link: "/blender" }
                                    ]
                                },

                            ]}

                        />

                        <SkillItem
                            technology="Zvuk"
                            features={[
                                {
                                    name: "SuperCollider",
                                    years: "od roku 2019",
                                    desc: "Ve zvukovém serveru SuperCollider píšu aplikace pro algoritmický zvuk.",
                                    referencies: [
                                        { name: "Projekty, které jsem realizoval s využitím SuperCollideru", link: "/supercollider" }
                                    ]
                                },
                                


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