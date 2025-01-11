import Content from "@/components/content/Content";
import External from "@/components/content/partials/External";
import Partial from "@/components/content/partials/Partial";
import ProjectLayout from "@/components/layout/projects/ProjectLayout";
import { Metadata } from "@/data/ProjectsManager";
import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Text from "@/components/content/partials/Text";

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>



import Head from "next/head";
import Link from "next/link";

import style from "../../../styles/modules/schema.module.scss";

export const metadata: Metadata = {
    "title": "@labir",
    "description": "Opensource knihovna",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/meteo/thumb.png",
    "color": "#2a0647",
    "year": 2024,
    "month": 12,
    "day": 1,
    "keywords": ["code", "featured"],
    "public": true
}

const SCIRPT_ID = "@labir/embed/js";
const STYPE_ID = "@labir/embed/css";

type PieceTypes = React.PropsWithChildren & {
    hint?: React.ReactNode
}

type Palette = "jet" | "iron" | "grayscale";

const Piece: React.FC<PieceTypes> = (props) => {
    return <div
        className={style.component}
    >
        <div>{props.children}</div>
        {props.hint && <div
            className={style.hint}
        >{props.hint}</div>}
    </div>
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {

    const [palette, setPalette] = useState<Palette>("iron");
    const [analysis1, setAnalysis1] = useState<string | undefined>("Analýza A;rectangle;color:Blue;top:14;left:8;width:65;height:31");
    const [analysis2, setAnalysis2] = useState<string | undefined>("Analýza B;ellipsis;color:Green;top:34;left:102;width:34;height:47");
    const [analysis3, setAnalysis3] = useState<string | undefined>();
    const [analysis4, setAnalysis4] = useState<string | undefined>();
    const [analysis5, setAnalysis5] = useState<string | undefined>();
    const [analysis6, setAnalysis6] = useState<string | undefined>();
    const [analysis7, setAnalysis7] = useState<string | undefined>();

    const showcaseRef = useRef<HTMLElement>(null);


    useEffect(() => {

        console.log(showcaseRef.current);

        if (showcaseRef.current) {


            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.type === "attributes") {
                        console.log("attributes changed", mutation);

                        if (mutation.attributeName === "palette") {
                            setPalette((mutation.target as any).palette);
                        }

                        if (mutation.attributeName === "analysis1") {
                            setAnalysis1((mutation.target as any).analysis1);
                        }

                        if (mutation.attributeName === "analysis2") {
                            setAnalysis2((mutation.target as any).analysis2);
                        }

                        if (mutation.attributeName === "analysis3") {
                            setAnalysis3((mutation.target as any).analysis3);
                        }

                        if (mutation.attributeName === "analysis4") {
                            setAnalysis4(( mutation.target as any).analysis4);
                        }

                        if (mutation.attributeName === "analysis5") {
                            setAnalysis5((mutation.target as any).analysis5);
                        }

                        if (mutation.attributeName === "analysis6") {
                            setAnalysis6((mutation.target as any).analysis6);
                        }

                        if (mutation.attributeName === "analysis7") {
                            setAnalysis7((mutation.target as any).analysis7);
                        }


                    }
                });
            });

            observer.observe(showcaseRef.current, {
                attributes: true
            });


        }

    }, [showcaseRef]);

    const hasScript = useCallback(() => {
        const script = document.getElementById(SCIRPT_ID);
        return script !== null;
    }, []);

    const loadScript = useCallback(() => {

        if (!hasScript()) {
            const script = document.createElement("script");
            script.innerHTML = "import labirembed from 'https://cdn.jsdelivr.net/npm/@labir/embed@1.2.64/+esm'"
            script.type = "module";
            script.id = SCIRPT_ID;
            document.head.appendChild(script);
        }

    }, [hasScript]);

    useEffect(() => {
        loadScript();
    }, [loadScript]);


    // useScheme([{ bg: "#312b36", text: "white", highlight: "yellow" }, { bg: "#312b36", highlight: "yellow" }]);

    return (<>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@labir/embed@1.2.64/dist/embed.min.css"></link>
        </Head>
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Partial xs={12}>
                    <div className={style.container}>
                        <Piece
                            hint={<>Snímek z termokamery <Link href="https://edu.labir.cz/termokamera/vlastnosti/" target="_blank">TIMI Edu</Link></>}
                        >LRC soubor</Piece>
                        <i>+</i>
                        <Piece
                            hint={<>JS knihovna pro browser</>}
                        >@labir</Piece>
                        <i>=</i>
                        <Piece
                            hint={<>webcomponents / React / Vue</>}
                        >analytická aplikace v prohlížeči</Piece>
                    </div>
                </Partial>

                <Partial md={12} lg={7}>
                    <thermal-file-analyser
                        url="/labir/snimek.lrc"
                        label="Analýza jednoho souboru"
                        license="CC BY-SA 4.0"
                        author="Jan Jáchim"
                        palette={palette}
                        ref={showcaseRef}
                        analysis1={analysis1}
                        analysis2={analysis2}
                        showhistogram="false"
                    ></thermal-file-analyser>
                </Partial>

                <Partial md={12} lg={5}>
                    <SyntaxHighlighter
                        language="html"
                        wrapLines={true}
                        wrapLongLines={true}
                        showLineNumbers={true}
                    >
                        {`<!-- Nejjednodušší verze webcomponenty -->
<thermal-file-app 
    url="/labir/snimek.lrc" 
    label="Analýza jednoho souboru"
    palette="${palette}"${analysis1 ? `
    analysis1="${analysis1}"` : ""}${analysis2 ? `
    analysis2="${analysis2}"` : ""}${analysis3 ? `
    analysis3="${analysis3}"` : ""}${analysis4 ? `
    analysis4="${analysis4}"` : ""}${analysis5 ? `
    analysis5="${analysis5}"` : ""}${analysis6 ? `
    analysis6="${analysis6}"` : ""}${analysis7 ? `
    analysis7="${analysis7}"` : ""}
></thermal-file-app>

<!-- Kdekoliv načtěte knihovnu -->
<script src="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js"></script>
`}
                    </SyntaxHighlighter>
                </Partial>

                <div style={{ height: "2rem", width: "100%" }}></div>


                <Partial md={8} lg={4}>

                    <h2>Hlavní funkce</h2>

                    <ul>
                        <li>čtení binárních souborů LRC přes webworkers</li>
                        <li>vykreslení souborů do <code className="code">{`<canvas>`}</code></li>
                        <li>nastavení barevné palety, teplotního rozsahu a dalších parametrů</li>
                        <li>analýzy</li>
                        <li>pokročilý export (PNG / CSV)</li>
                    </ul>

                    <External
                        title="Github" url="https://github.com/moichim/labir/"
                    ></External>

                </Partial>

                <Partial md={8} lg={4}>
                    <h2>Přehrávání sekvencí</h2>
                    <p>LRC soubory mohou obsahovat 1 snímek, anebo celou nahrávku. Knihovna <code className="code">@labir</code> umí přehrát sekvence a převést je do webm videa.</p>
                    <thermal-file-app
                        label="Sekvence"
                        url="/labir/sekvence.lrc"
                    ></thermal-file-app>
                </Partial>

                <Partial md={8} lg={4}>
                    <h2>Skupinové zobrazení</h2>
                    <p>Možnost pracovat s více soubory zaráz je určena pro vyhodnocení časosběrných měření.</p>
                    <thermal-group-app
                        label="Skupina souborů"
                        columns="2"
                        files="thermal~/labir/snimek.lrc;thermal~/labir/snimek_2.lrc;thermal~/labir/snimek_3.lrc;thermal~/labir/snimek_4.lrc"
                    ></thermal-group-app>
                    
                </Partial>

                <Partial md={4} lg={3}>

                    <Text>
                        <h2>Kód</h2>
                        <p>Balíčky jsou vyvíjeny jako monorepo se vzájemnými závislostmi:</p>
                        <ul style={{ display: "flex", width: "100%", flexDirection: "column", gap: "1rem" }}>
                            <li><Link href="https://github.com/moichim/labir/tree/master/packages/core" target="_blank">@labir/core</Link><br />základ funkcionality v čistém TS</li>
                            <li><Link href="https://github.com/moichim/labir/tree/master/packages/embed" target="_blank">@labir/embed</Link><br />implementace @labir/core do webcomponent (<Link href="https://lit.dev/">Lit.js</Link>)</li>
                            <li><Link href="https://github.com/moichim/labir/tree/master/packages/react-bridge" target="_blank">@labir/react-bridge</Link><br />React hooky ovládající @labir/core a usnadňující tvorbu UI komponent</li>
                            <li><Link href="https://github.com/moichim/labir/tree/master/packages/thermal-display" target="_blank">@labir/wordpress</Link><br />Wordpress plugin využívající webcomponenty</li>
                        </ul>
                    </Text>

                </Partial>

                <Partial md={7}>
                    <thermal-file-app url="/meteo/tucnaci_02.lrc"></thermal-file-app>
                </Partial>

                
        

            </Content>

        </ProjectLayout>

    </>
    )
}

export default forwardRef(IndexPage)