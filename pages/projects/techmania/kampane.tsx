import Content from "@/components/content/Content"
import Partial from "@/components/content/partials/Partial"
import Text from "@/components/content/partials/Text"

import Picture from "@/components/content/partials/Picture"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import ProjectsManager, { Metadata, ProjectMetadata } from "@/data/ProjectsManager"
import { forwardRef, useMemo, useState } from "react"

import clovekAZvireHC from "@/public/techmania/kampane/clovek-a-zvire-hc.png"
import clovekAZvireBB from "@/public/techmania/kampane/clovek-a-zvire.png"
import clovekAZvireBBMedved from "@/public/techmania/kampane/clovek-a-zvirre-medved.png"
import inzenyrBB from "@/public/techmania/kampane/inzenyr-BB.jpeg"
import inzenyrPlachta from "@/public/techmania/kampane/inzenyr-plachta.jpeg"
import mathatlonBB from "@/public/techmania/kampane/mathatlon-BB-lyzar.jpeg"
import mathatlonBB2 from "@/public/techmania/kampane/mathatlon-BB-skokan.jpeg"
import talentBBNas from "@/public/techmania/kampane/talent-bb-nas.png"
import podHladinouBB from "@/public/techmania/kampane/pod-hladinou-BB.jpeg"
import zchladSeBB from "@/public/techmania/kampane/zchlad-se-BB.jpeg"
import tsBBNV from "@/public/techmania/kampane/techmania_TOP-SECRET_night-vision_BB.jpg"
import tsBB1f from "@/public/techmania/kampane/top-secret-CIA-bb-1.jpeg"
import tsBB2f from "@/public/techmania/kampane/top-secret-CIA-bb-2.jpeg"
import pondelkyBB from "@/public/techmania/kampane/pondelky-bb.jpeg"
import mockup from "@/public/techmania/kampane/5632.png"
import tsclv from "@/public/techmania/kampane/top-secret_CLV.jpg"

import talent from "@/public/techmania/kampane/talent.jpeg"

import ts1f from "@/public/techmania/kampane/techmania_TOP-SECRET_cia_A0_1-faze.jpg";
import ts2f from "@/public/techmania/kampane/techmania_TOP-SECRET_cia_A0_2-faze.jpg";


import ProjectGrid from "@/components/listing/ProjectGrid"
import styles from "../../../components/navigation/Footer.module.scss";

import button from "../../../components/utils/Button.module.scss";
import clsx from "clsx"


type IndexPageProps = {
	projects: ProjectMetadata[],
}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>


export const metadata: Metadata = {
	"title": "Kampaně pro Techmania Science Center",
	"description": "Printové a online kampaně pro vzdělávací program pro děti",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/techmania/kampane/top-secret-thumbnail.jpg",
	"color": "#0f1d1f",
	"year": 2019,
	"month": 7,
	"day": 1,
	"keywords": [ "design", "featured","techmania"],
	"public": true
}

const bbProps = {
	"Malý náhled": {
		md: 6,
		lg: 3
	},
	"Velký náhled": {
		md: 6,
		lg: 4
	},
	"Plná velikost": {
		md: 12,
		lg: 12
	}
	
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#e3f7fc" }, {bg: "#0b1b1f"}]);

	const [size,setSize] = useState<keyof typeof bbProps>("Malý náhled");

	const sizeVar = useMemo(() => {
		return bbProps[ size ]
	}, [size]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Picture md={6} src={mockup}/>
				<Text md={6} lg={3}>
					<p>Mezi lety 2014 - 2019 jsem měl na starosti marketingovou prezentaci plzeňské Techmanie.</p>
					<p>Připravoval jsem outdoorové kampaně, klipy do 3D planetária, PPC bannery a další materiály.</p>
					<p></p>
				</Text>

				
					<Picture lg={3} src={tsclv}/>

					<Partial lg={12}>

						<h2 style={{textAlign: "center", paddingTop: "3rem", fontWeight: "bold"}}>Hlavní motivy kampaní</h2>
						
						<div className={button.container}>
						{Object.keys( bbProps).map(current => <button 
							key={current}
							className={clsx( [
								button.button,
								current === size ? button.button__active : button.button__inactive
							]
						)}
						onClick={() => setSize(current as keyof typeof bbProps)}
						>{current}</button>)}
						</div>

					</Partial>


					<Picture {...sizeVar} src={clovekAZvireBB} />
					<Picture {...sizeVar} src={mathatlonBB} />
					<Picture {...sizeVar} src={zchladSeBB} />
					
					<Picture {...sizeVar} src={tsBBNV} />
					<Picture {...sizeVar} src={talentBBNas} />
					<Picture {...sizeVar} src={tsBB1f}/>
					
					<Picture {...sizeVar} src={clovekAZvireBBMedved} />
					
					<Picture {...sizeVar} src={inzenyrBB} />
					<Picture {...sizeVar} src={tsBB2f} />
					<Picture {...sizeVar} src={pondelkyBB} />

					<Picture {...sizeVar} src={mathatlonBB} />

					<Partial xs={12}>
					<h2 style={{textAlign: "center", paddingTop: "3rem", fontWeight: "bold"}}>Různé formáty</h2>
					</Partial>

					<Picture md={3} lg={2} src={talent}/>
					<Picture md={3} lg={2} src={clovekAZvireHC}/>
					<Picture md={3} lg={2} src={ts1f}/>
					<Picture md={3} lg={2} src={ts2f}/>
					<Picture md={3} lg={2} src={tsclv}/>

				

			</Content>

			<div className={styles.container}>
				<div style={{paddingTop: "5rem"}}>Další projekty pro Techmania Science Center</div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
				</svg>
			<div style={{height: "1rem"}}></div>
			<ProjectGrid projects={props.projects}/>
		</div>

		</ProjectLayout>
	)
}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( {keyword: "techmania" } )
        }
    }

}

export default forwardRef(IndexPage)