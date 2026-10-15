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

                    <h2>I code</h2>

                    <p>Web frontend in modern TypeScript. Creative coding in various environments, mostly using web technologies such as WebGPU. I do realtime sound in SuperCollider.</p>


                    {/*<ul>
                        <li>
                            <a href="#skills" onClick={() => layout.setIsZoomed(z => !z)}>{layout.isZoomed ? "Skrýt podrobnosti" : "Zobrazit podrobnosti"}</a>
                        </li>
                        <li>
                            <Link href="#reference" scroll={true}>Přejít na referenční projekty</Link>
                        </li>
                    </ul>
                    */}

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
                                    desc: "Tvorba výkonných ovladačů interaktivních instalací a projekcí.",
                                    referencies: [
                                        { name: "Cerrynt", link: "/projects/blik/cerrynt" }
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
                                    years: "since 2023",
                                    desc: "Kiosks for data visualisation, interactive installations and projections."
                                },
                                {
                                    name: "SCSS, Tailwind & spol."
                                },
                                {
                                    name: "p5.js",
                                },
                                {
                                    name: "Phaser.js",
                                    // referencies: [
                                        // { name: "Monnom studio", link: "/projects/monnom" }
                                    // ]
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
                                    years: "since 2022",
                                    desc: "Fast UDP/TCP communication via websockets or Open Sound Controll in Electron.js. Inter-process communication, web workers and performance optimalisation. Web servers using express.js. I have basic experience with prisma, GraphQL & Apollo Server."
                                },
                                
                                {
                                    name: "MySQL / MariaDB / PostgreSQL"
                                },
                                
                                {
                                    minor: true,
                                    name: "Django / Wagtail CMS",
                                    years: "2017 - 2019",
                                    desc: "I run a small VPS with several websites on the Wagtail CMS platform."
                                },

                                {
                                    minor: true,
                                    name: "Nette",
                                    years: "2020 - 2023",
                                    desc: "Vyvinul jsem středně velký portál pro sdílení vzdělávacího obsahu a zapůjčování termokamer.",
                                },

                                {
                                    minor: true,
                                    name: "Kubernetes",
                                    years: "since 2026",
                                    desc: "I have basic experience with Kubernetes for container orchestration.",
                                }

                                /*
                                {
                                    minor: true,
                                    name: "Wordpress",
                                    years: "2015 - 2019",
                                    desc: "Na Wordpressu jsem začínal. Vyvíjel jsem custom šablony a pluginy pro klienty."
                                },
                                */

                            ]}

                        />

                    </div>

                </Text>

            </Partial>

            <Partial md={6} lg={4}>

                <Text>

                    <h2>Multimedia</h2>

                    <div className="" role="list">

                        <SkillItem
                            technology="Interactivity"
                            features={[
                                {
                                    name: "Processing.org",
                                    // years: "od roku 2015",
                                    // desc: <span>Ovládám framework <a href="https://processing.org" target="_blank">Processing.org</a> pro interaktivní aplikace v Javě.</span>,
                                    // referencies: [
                                    //    { name: "Projekty v Processingu", link: "/processing" }
                                    // ]
                                },
                                {
                                    name: "Arduino"
                                },

                                {
                                    name: "Blender 3D",
                                    // years: "od roku 2018",
                                },

                            ]}

                        />

                        <SkillItem
                            technology="Sound"
                            features={[
                                {
                                    name: "SuperCollider",
                                    years: "since 2019",
                                    desc: "I write applications for realtime algorithmic sound in the SuperCollider sound server.",
                                    referencies: [
                                        { name: "Brain", link: "/projects/blik/brain" },
                                        { name: "Cerrynt", link: "/projects/blik/cerrynt" },
                                        { name: "Sound Lab", link: "/projects/blik/symfonie-barev" },
                                        { name: "Souzvon", link: "/projects/blik/souzvon" },
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
            projects: ProjectsManager.getProjects({ keyword: "code", publicFilter: true })
        }
    }

}

export default IndexPage