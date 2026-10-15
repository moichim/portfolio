import Content from "@/components/content/Content"
import Partial from "@/components/content/partials/Partial"
import Text from "@/components/content/partials/Text"
import PageLayout from "@/components/layout/page/PageLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"

function IndexPage() {

    useScheme([{ bg: "#FFF6F0" }, { bg: "#1A0C02" }]);

    return <PageLayout title="Page not found" noindex>

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