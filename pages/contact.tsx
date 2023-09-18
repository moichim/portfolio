import Content from "@/components/content/Content"
import Text from "@/components/content/partials/Text"
import PageLayout from "@/components/layout/page/PageLayout"
import ProjectGrid from "@/components/listing/ProjectGrid"
import ProjectsManager from "@/data/ProjectsManager"
import { InferGetStaticPropsType } from "next"
import { forwardRef } from "react"

function IndexPage() {

    return <PageLayout>
        <Content>
            <Text>
                <h1>Jan Jáchim</h1>
                <p>IČ: 03809161<br />Zaregistrovaný na Živnostenském úřadě Plzeň - Město.</p>
                <p><a href="mailto:jachim5@gmail.com">jachim5@gmail.com</a><br /><a href="tel:00420776632546">+420 776 632 546</a></p>
            </Text>
        </Content>
    </PageLayout>;

}

export default IndexPage