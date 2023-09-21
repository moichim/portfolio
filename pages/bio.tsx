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

function IndexPage() {

    return <PageLayout>

        <Head>
            <title>{formatTitle("Bio")}</title>
        </Head>

        <Content>

            <Partial lg={4}>

                <Text>

                    <h2>Co dělám</h2>

                    <p>Dělám grafiku a programování okolo webu a interaktivních instalací.</p>

                    <p>Profesně působím povětšinou někde poblíž vzdělávání, popularizaci vědy a interaktivních projektů pro děti. Mám zkušenosti s tvorbou vzdělávacích exponátů a materiálů pro online vzdělávání.</p>

                    <p>Domluvím se s marketéry i s didaktiky.</p>

                    <ul>
                        <li>webový vývoj provozuji dle současných standardů (<Link href="/code">co umím</Link>)</li>
                        <li>Adobe Creative Suite ovládám rutinně</li>
                        <li>Pro tvůrčí záměr vždy najdu adekvátní technologii</li>
                        <li>nejvíce ze všeho mne baví učit se novým věcem</li>
                    </ul>

                </Text>

            </Partial>

            <Partial lg={4}>

                <Text>

                    <h2>Práce</h2>

                    <div className="" role="list">
                        <BioItem
                            from={2015}
                            to={"současnost"}
                            position="Vývojář a designér na volné noze"
                        />
                        <BioItem
                            from={2020}
                            to={"současnost"}
                            position="Vývojář TypeScript a PHP"
                            companyName="Nové technologie - Výzkumné centrum ZČU v Plzni"
                        />
                        <BioItem
                            from={2015}
                            to={2020}
                            position="Wordpress vývojář"
                            companyName="Grafique, s.r.o. (Brno)"
                        />
                        <BioItem
                            from={2014}
                            to={2019}
                            position="Designér"
                            companyName="Techmania Science Center, o.p.s."
                        />
                    </div>

                </Text>

            </Partial>

            <Partial lg={4}>

                <Text>

                    <h2>Vzdělání</h2>

                    <div className="" role="list">
                        <BioItem
                            from={2010}
                            to={"2015 (MgA.)"}
                            position="Intermadiální tvorba"
                            companyName="Fakulta výtvarných uměni VUT v Brně"
                        />
                        <BioItem
                            from={2006}
                            to={"2009 (BcA.)"}
                            position="Grafika a ilustrace"
                            companyName="Ústav umění a designu ZČU v Plzni"
                        />
                        <BioItem
                            from={2005}
                            to={2006}
                            position="Učitelství francouzského jazyka a výtvarné výchovy pro 2. stupeň ZŠ"
                            companyName="Pedagogická fakulta ZČU v Plzni"
                        />
                    </div>

                </Text>

            </Partial>

        </Content>

    </PageLayout>;

}

export default IndexPage