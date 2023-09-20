import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import img1 from "@/public/maruska/1.jpg"
import img2 from "@/public/maruska/2.jpg"
import img3 from "@/public/maruska/3.jpg"
import img6 from "@/public/maruska/6.jpg"
import img7 from "@/public/maruska/7.jpg"

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import socha from "@/public/blik/blablator/photo.jpg";
import joha from "@/public/blik/blablator/blablator.png";
import External from "@/components/content/partials/External"
import Partial from "@/components/content/partials/Partial"


export const metadata: Metadata = {
    "title": "Blablátor",
    "description": "Interaktivní exponát",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/blik/blablator/thumb.jpg",
    "color": "#363d03",
    "year": 2022,
    "month": 3,
    "day": 27,
    "keywords": ["interactive", "featured", "code"],
    "public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


    useScheme([{ bg: "#fcfcfc" }, { bg: "#1c1c1c" }]);

    return (
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Picture md={6} lg={4} src={socha}></Picture>

                <Partial md={6} lg={4}>

                <Text md={6} lg={3}>
                    <p>Software: Jan Jáchim<br />
                    Socha: Pavel Liška<br />
                    Hardware: Vít Trunec</p>
                    <p>Robot Blablátor je součástí interaktivní výstavy Lovci znaků, která byla prezentována v <a href="https://zak.tv/svetelna-interaktivni-rodinna-expozice-promeni-navstevniky-v-lovce-znaku" target="_blank">Plzni</a> a <a href="https://www.rtvs.sk/televizia/archiv/14625/407663#1209" target="_blank">Bratislavě</a>.</p>
                    <p>Socha po zmáčknutí tlačítka řekne nesmysl.</p>
                </Text>

                    <External 
                        title="Online model Blablátoru" url="http://blablator.serchan.cz"
                        description="Vyzkoušejte si, co to dělá"
                    >
                        Grafické rozhraní i konkrétní nastavení generátorů jsou odlišné od finální verze. Model ukazuje, co Blablátor umí - včetně tvorby a nastavení textových generátorů.
                    </External>


                    <Text md={6} lg={3}>
                    <p>Technologie:</p>
                    <ul>
                        <li>Angular 2</li>
                        <li>Electron.js</li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" target="_blank">Web Speech API</a></li>
                    </ul>
                    <p>Generování textů je založeno na Markov chainu.</p>
                </Text>

                </Partial>
                
                <Picture md={6} lg={4} src={joha}>Omlouvám se, já nemám po ruce lepší fotku. Vypadalo to líp...</Picture>

                <Text md={6} lg={4}>
                    <p>Stiskem kláves anebo jejich kombinací robot promluví. Umí toto:</p>
                    <ul>
                        <li>Rady</li>
                        <li>Urážky</li>
                        <li>Představení se</li>
                        <li>Drby</li>
                        <li>Omluvy</li>
                        <li>Nové živočišné druhy</li>
                        <li>Příběhy z dračího doupěte</li>
                        <li>Jaké je jeho oblíbené písmo</li>
                        <li>Hlásí, že je rozbitý či unavený</li>
                        <li>Stěžuje si na dráždění</li>
                    </ul>
                </Text>

                <Text md={6} lg={4}>
                    <p>Ukázky</p>
                    <ul>
                        <li>(zvíře) Buřňáč vlký</li>
                        <li>(zvíře) Špasýk zpěvný</li>
                        <li>(zvíře) Sobřehec dlonitý</li>
                        <li>(urážka) Ty jeden tonfole!</li>
                        <li>(urážka) Ty nepráničo!</li>
                        <li>(omluva) Pardon, nechtěl jsem Vás vinovickondělit!</li>
                        <li>(rada) Musíš víc jejámit!</li>
                        <li>(drb) Říká se, že některý jsme v jaký jsoučasů zasádě.</li>
                        <li>(au) Cítím se nesnějšně.</li>
                        <li>(au) Au au au! Bolí mne všechal!</li>
                        <li>(Dračí doupě) Ve vašich stopách se blíží ork Mellinndar a hledá svou pomstu. Musíte hodit kostkou alespoň o 5,4245021878189625 více než on.</li>
                        <li>(dračí doupě) S mocným rykem se na vás vyřítil skřet Orndacil jedoucí na drakovi s 4,751640239621271 hlavami.</li>
                        <li>...atd.</li>
                    </ul>
                </Text>

                <Partial md={7}>
                    <External 
                        title="Online model Blablátoru" url="http://blablator.serchan.cz"
                        description="Vyzkoušejte si, co to dělá"
                    >
                    </External>
                </Partial>

            </Content>

        </ProjectLayout>
    )
}

export default forwardRef(IndexPage)