import Content from "@/components/content/Content"
import Picture from "@/components/content/partials/Picture"
import Text from "@/components/content/partials/Text"
import Youtube from "@/components/content/partials/Youtube"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef } from "react"

import 'react-device-frameset/styles/marvel-devices.min.css'

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import img1 from "@/public/cvt/ep_1.png"
import img2 from "@/public/cvt/ep_2.png"
import img3 from "@/public/cvt/ep_3.png"
import img4 from "@/public/cvt/ep_4.png"
import img5 from "@/public/cvt/ep_5.png"
import img6 from "@/public/cvt/ep_6.png"
import img7 from "@/public/cvt/ep_7.png"
import { DeviceFrameset } from "react-device-frameset"
import { Interactive } from "@/components/utils/interactive/Interactive"
import Partial from "@/components/content/partials/Partial"


export const metadata: Metadata = {
	"title": "Neutopte se v dluzích",
	"description": "Návrh & prototyp kampaně pro Člověka v tísni",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/cvt/thumb.jpg",
	"color": "#141626",
	"year": 2020,
	"month": 4,
	"day": 11,
	"keywords": [ "design", "code" ],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#eee" }, {bg: "black"}]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>				

                <Youtube md={6} lg={9}  id="PLF4CI3BLHc" />

                <Text md={6} lg={3}>
                    <p>S příchodem pandemie covid-19 v březnu 2020 jsem pro Člověka v tísni navrhl kampaň propagující dluhové poradenství. Kampaň měla cílit na občany řešící náhlý výpadek příjmů.</p>
                    <p>Vymyslel jsem design a animace. Nakódoval jsem <a href="http://expecto-patronum.serchan.cz" target="_blank">interaktivní prototyp</a> landing page.</p>

                </Text>

				<div style={{width:"100%", textAlign: "center", paddingTop: "3rem"}}>

					<div style={{position: "relative"}}>
					
						<DeviceFrameset device="MacBook Pro" color="gold">
							<iframe width="100%" height="100%" src="http://expecto-patronum.serchan.cz/"></iframe>
						</DeviceFrameset>
						<Interactive>Interakvitní</Interactive>

					</div>
				</div>

				<div style={{width:"100%", textAlign: "center", paddingTop: "3rem"}}>

					<div style={{position: "relative"}}>
					
						<DeviceFrameset device="iPhone X" color="gold">
							<iframe width="100%" height="100%" src="http://expecto-patronum.serchan.cz/"></iframe>
						</DeviceFrameset>
						<Interactive>Interakvitní</Interactive>

					</div>
				</div>

				<Picture md={6} src={img1} />
                <Picture md={6} src={img2} />
                <Picture md={6} src={img3} />
                <Picture md={6} src={img4} />
                <Picture md={6} src={img5} />
                <Picture md={6} src={img6} />
                <Picture md={6} src={img7} />

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)