import Content from "@/components/content/Content"
import Partial from "@/components/content/partials/Partial"
import Text from "@/components/content/partials/Text"
import PageLayout from "@/components/layout/page/PageLayout"
import { formatTitle } from "@/components/utils/formatters"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
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