import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import Youtube from "@/components/content/partials/Youtube"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import img1 from "@/public/kytky/jj_kzjz_1.jpg"
import img2 from "@/public/kytky/jj_kzjz_2.jpg"
import img3 from "@/public/kytky/jj_kzjz_3.jpg"
import img4 from "@/public/kytky/jj_kzjz_4.jpg"
import img5 from "@/public/kytky/jj_kzjz_5.jpg"
import img6 from "@/public/kytky/jj_kzjz_6.jpg"
import img7 from "@/public/kytky/jj_kzjz_7.jpg"
import img8 from "@/public/kytky/jj_kzjz_8.jpg"
import img9 from "@/public/kytky/jj_kzjz_9.jpg"
import img10 from "@/public/kytky/jj_kzjz_10.jpg"
import img11 from "@/public/kytky/jj_kzjz_11.jpg"
import img12 from "@/public/kytky/jj_kzjz_12.jpg"
import img13 from "@/public/kytky/jj_kzjz_13.jpg"
import img14 from "@/public/kytky/jj_kzjz_14.jpg"
import img15 from "@/public/kytky/jj_kzjz_15.jpg"
import img16 from "@/public/kytky/jj_kzjz_16.jpg"
import i1 from "@/public/kytky/jj_kzjz_i1.jpg"
import i2 from "@/public/kytky/jj_kzjz_i2.jpg"
import { Link } from "@madeinhaus/nextjs-page-transition"


type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
    "title": "Kytky za jateční zdí",
    "description": "Kresby",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/kytky/thumb.jpg",
    "color": "#210901",
    "year": 2011,
    "month": 6,
    "day": 27,
    "keywords": ["school"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{ bg: "#fcfcfc" }, { bg: "#1c1c1c" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Picture md={6} lg={3} src={img1}></Picture>
                <Picture md={6} lg={3} src={img2}></Picture>
                <Picture md={6} lg={3} src={img3}></Picture>
                <Picture md={6} lg={3} src={img4}></Picture>

                <Text md={6} lg={3}>
                    <p>V srpnu 2011 jsem opakovaně navšťevoval okolí plzeňských jatek a kreslil jsem květiny.</p>
                    <p>Nedělal jsem to, abych se potrápil. Chtěl jsem podat výpověď o tom, co se na místě děje a nebýt u toho vyděračský.</p>
                    <p>Reflektoval jsem tak zkušenosti z návštěv Osvětimi. Člověk očekává všude samou hrůzu, ale i tam rostou květiny.</p>
                </Text>

                
                
                <Picture md={6} lg={3} src={img5}></Picture>
                <Picture md={6} lg={3} src={img6}></Picture>
                <Picture md={6} lg={3} src={img7}></Picture>
                <Picture md={6} lg={3} src={img8}></Picture>
                <Picture md={6} lg={3} src={img9}></Picture>
                <Picture md={6} lg={3} src={img10}></Picture>
                <Picture md={6} lg={3} src={img11}></Picture>
                <Picture md={6} lg={3} src={img12}></Picture>
                <Picture md={6} lg={3} src={img13}></Picture>
                <Picture md={6} lg={3} src={img14}></Picture>
                <Picture md={6} lg={3} src={img15}></Picture>
                <Picture md={6} lg={3} src={img16}></Picture>

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)