import Content from "@/components/content/Content"
import IndexText from "@/components/content/page/IndexText"
import SkillItem from "@/components/content/page/SkillItem"
import Partial from "@/components/content/partials/Partial"
import Text from "@/components/content/partials/Text"
import PageLayout from "@/components/layout/page/PageLayout"
import ProjectGrid from "@/components/listing/ProjectGrid"
import { formatTitle } from "@/components/utils/formatters"
import { useLayoutContext } from "@/context/layout/LayoutContext"
import ProjectsManager from "@/data/ProjectsManager"
import { Link } from "@madeinhaus/nextjs-page-transition"
import { InferGetStaticPropsType } from "next"
import Head from "next/head"

function IndexPage(props: InferGetStaticPropsType<typeof getStaticProps>) {

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
                                    name: "Typescript ❤️"
                                },
                                {
                                    name: "WebGPU",
                                    desc: "Využívám pro tvorbu výkonných ovladačů interaktivních instalací a projekcí.",
                                    referencies: [
                                        { name: "Cerrynt", link: "/projects/blik/cerrynt-pilsen" }
                                    ]
                                },
                                {
                                    name: "webcomponents & Lit.js",
                                    years: "od roku 2024",
                                    desc: "Vyvíjím open-source knihovnu webkomponent pro práci se snímky z termokamer",
                                    referencies: [
                                        { name: "@labir/embed", link: "/projects/ntc/labir" }
                                    ]
                                },
                                {
                                    name: "Electron.js",
                                    years: "cca 2 roky",
                                    desc: "Kiosky pro vizualizaci dat na Rapsberry Pi. Ovladače interaktivních aplikací a projekcí."
                                },
                                {
                                    name: "SCSS, Tailwind & spol."
                                },
                                {
                                    name: "p5.js",
                                },
                                {
                                    name: "Phaser.js",
                                    referencies: [
                                        { name: "Monnom studio", link: "/projects/monnom" }
                                    ]
                                },
                                {
                                    name: "React.js",
                                    years: "od roku 2019",
                                    desc: "Vizualizace dat, formuláře, datagridy či dashboardy."
                                },
                                {
                                    name: "Next.js",
                                    years: "od roku 2023",
                                    desc: "V Next.js vyvíjím webové rozhraní pro analýzu termogramů v kontextu meterologických dat.",
                                },


                            ]}

                        />

                        <SkillItem
                            technology="Backend"
                            features={[
                                {
                                    name: "Nodejs",
                                    years: "od roku 2022",
                                    desc: "express.js, prisma, GraphQL, Apollo Server & ..."
                                },
                                {
                                    name: "MySQL / MariaDB / PostgreSQL"
                                },
                                {
                                    minor: true,
                                    name: "Nette",
                                    years: "2020 - 2023",
                                    desc: "Vyvinul jsem středně velký portál pro sdílení vzdělávacího obsahu a zapůjčování termokamer.",
                                },
                                {
                                    minor: true,
                                    name: "Wordpress",
                                    years: "2015 - 2019",
                                    desc: "Na Wordpressu jsem začínal. Vyvíjel jsem custom šablony a pluginy pro klienty."
                                },

                                {
                                    minor: true,
                                    name: "Django / Wagtail CMS",
                                    years: "2017 - 2019",
                                    desc: "Provozuji meněí VPS s několika weby na platformě Wagtail CMS."
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
                                    name: "Blender 3D",
                                    years: "od roku 2018",
                                },
                                {
                                    name: "Unity 3D",
                                    minor: true,
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

        <ProjectGrid projects={props.projects} />

    </PageLayout>;

}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects({ keyword: "code" })
        }
    }

}

export default IndexPage