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
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { formatTitle } from "@/components/utils/formatters"
import Head from "next/head"

function IndexPage() {

    useScheme([{ bg: "#FFF6F0" }, { bg: "#1A0C02" }]);

    return <PageLayout>

        <Head>
            <title>{formatTitle("404")}</title>
        </Head>

        <Content>

            <Partial lg={4}>

                <Text>

                    <div style={{ textAlign: "center" }}>
                        <h1>404</h1>

                        <p>Stránka nenalezena</p>
                    </div>

                </Text>

            </Partial>

        </Content>

    </PageLayout>;

}

export default IndexPage