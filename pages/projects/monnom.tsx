import Content from "@/components/content/Content"
import Text from "@/components/content/partials/Text"
import ProjectLayout from "@/components/layout/projects/ProjectLayout"
import { useScheme } from "@/context/scheme/SchemeContextProvider"
import { Metadata } from "@/data/ProjectsManager"
import { forwardRef, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

import 'react-device-frameset/styles/marvel-devices.min.css'

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

import Partial from "@/components/content/partials/Partial"


export const metadata: Metadata = {
	"title": "Monnom studio",
	"description": "Webová hra",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/monnom/thumb.png",
	"color": "#141626",
	"year": 2024,
	"month": 10,
	"day": 11,
	"keywords": ["code", "featured"],
	"public": true
}

const large = "56.25%";
const small = ((16 / 9) * 100) + "%";

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {


	useScheme([{ bg: "#eee" }, { bg: "black" }]);

	const iframeRef = useRef<HTMLIFrameElement>(null);

	const [windowDimensions, setWindowDimensions] = useState({
		width: 1900,
		height: 700,
	});

	useEffect(() => {

		setWindowDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		});

		const handleResize = () => {
			console.log("resizing");
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);

	}, []);

	const height = useMemo(() => windowDimensions.width > 700 ? large : small, [windowDimensions.width]);

	return (
		<ProjectLayout ref={ref} meta={metadata}>
			<Content>

				<Text md={6} lg={3}>
					<p>Jednoduchá hra a webová prezentace španělsko-českého architektonického studia MONNOM.</p>
					<p>Hra s kostkami umožňuje návštěvníkům sdílet své představy o architektuře a prostoru.</p>
					<p>Klient webem ukazuje svůj přístup k architektuře.</p>
					<p>Technologie:</p>
					<ul>
						<li>Phaser.js</li>
						<li>React</li>
						<li>Wordpress</li>
					</ul>

				</Text>

				<Partial lg={9}>
					<div style={{
						width: "100%",
						paddingTop: height,
						overflow: "hidden",
						position: "relative"
					}}>
						<iframe
							ref={iframeRef}
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								width: "100%",
								height: "100%"
							}} src="https://monnomstudio.com"></iframe>
					</div>

				</Partial>

			</Content>

		</ProjectLayout>
	)
}

export default forwardRef(IndexPage)