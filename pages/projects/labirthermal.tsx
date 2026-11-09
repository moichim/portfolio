import Content from "@/components/content/Content";
import Partial from "@/components/content/partials/Partial";
import Labirthermal, { type LabirthermalFileElement, type LabirthermalProps } from "@/components/content/partials/Labirthermal";
import ProjectLayout from "@/components/layout/projects/ProjectLayout";
import { Metadata } from "@/data/ProjectsManager";
import React, { forwardRef, useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>



import Link from "next/link";

import style from "@/styles/modules/schema.module.scss";
import styles from "@/styles/modules/labir.module.scss";

const documentation = "https://labirthermal.github.io/web";
const fileDocumentation = `${documentation}/webcomponents/applications/thermal-file-app.html`;

export const metadata: Metadata = {
    "title": "@labirthermal/web",
    "description": "Opensource knihovna",
    "authors": [{
        "name": "Jan Jáchim"
    }],
    "image": "/meteo/thumb.png",
    "color": "#2a0647",
    "year": 2024,
    "month": 12,
    "day": 1,
    "keywords": ["code" ],
    "public": true
}

type PieceTypes = React.PropsWithChildren & {
    hint?: React.ReactNode
}

const analysisKeys = ["analysis1", "analysis2", "analysis3", "analysis4", "analysis5", "analysis6", "analysis7"] as const;
type ShowcaseConfiguration = Pick<LabirthermalFileElement, "palette" | typeof analysisKeys[number]>;

const advancedExample = {
    thermal: "/labir/sekvence.lrc",
    label: "Sekvence s analýzami",
    palette: "rainbow",
    advancedPalettes: true,
    unit: "F",
    from: 68,
    to: 82.5,
    playbackSpeed: 2,
    analysis1: "Oblast A;rectangle;color:Blue;top:14;left:8;width:65;height:31;avg;max",
    analysis2: "Oblast B;ellipsis;color:Green;top:34;left:102;width:34;height:47;avg;max",
} satisfies NonNullable<LabirthermalProps["file"]>;

const groupExample = {
    label: "Skupina souborů",
    palette: "iron",
    filesString: "thermal~/labir/snimek.lrc;thermal~/labir/snimek_2.lrc;thermal~/labir/snimek_3.lrc;thermal~/labir/snimek_4.lrc",
} satisfies NonNullable<LabirthermalProps["group"]>;

const dropinExample = {
    label: "Vyzkoušejte vlastní termogram",
    palette: "iron",
    advancedPalettes: true,
} satisfies NonNullable<LabirthermalProps["dropin"]>;

const attributeNames: Record<string, string> = {
    advancedPalettes: "advanced-palettes",
    filesString: "group-files",
    playbackSpeed: "speed",
};

function elementHtml(tag: string, attributes: Record<string, string | number | boolean | undefined>) {
    const lines = Object.entries(attributes).flatMap(([property, value]) => {
        if (value === undefined || value === false) return [];
        const attribute = attributeNames[property] ?? property;
        if (value === true) return [`    ${attribute}`];
        const escaped = String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return [`    ${attribute}="${escaped}"`];
    });
    return `<${tag}\n${lines.join("\n")}\n></${tag}>`;
}

function HtmlExample({ code, language = "html" }: { code: string; language?: "html" | "tsx" }) {
    return <div className={styles.source}>
        <SyntaxHighlighter
            language={language}
            wrapLines
            wrapLongLines
            showLineNumbers
            codeTagProps={{ style: { whiteSpace: "pre-wrap", overflowWrap: "anywhere" } }}
            lineProps={{ style: { display: "block" } }}
        >
            {code}
        </SyntaxHighlighter>
    </div>;
}

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

    const [configuration, setConfiguration] = useState<ShowcaseConfiguration>({
        palette: "lava",
        analysis1: "Analýza A;rectangle;color:Blue;top:100;left:80;width:420;height:250",
        analysis2: "Analýza B;ellipsis;color:Green;top:280;left:600;width:280;height:360",
    });
    const [showcase, setShowcase] = useState<LabirthermalFileElement | null>(null);
    const basicExample = {
        thermal: "/labir/flir_02.jpg",
        label: "FLIR radiometrický JPEG",
        advancedPalettes: true,
        from: 24,
        to: 30,
        ...configuration,
    };

    useEffect(() => {
        if (!showcase) return;

        const observer = new MutationObserver(() => {
            setConfiguration({
                palette: showcase.palette,
                analysis1: showcase.analysis1,
                analysis2: showcase.analysis2,
                analysis3: showcase.analysis3,
                analysis4: showcase.analysis4,
                analysis5: showcase.analysis5,
                analysis6: showcase.analysis6,
                analysis7: showcase.analysis7,
            });
        });
        observer.observe(showcase, {
            attributes: true,
            attributeFilter: ["palette", ...analysisKeys],
        });
        return () => observer.disconnect();
    }, [showcase]);

    return (<>
        <ProjectLayout ref={ref} meta={metadata}>
            <Content>

                <Partial xs={12}>
                    <div className={style.container}>
                        <Piece
                            hint={<Link href={`${documentation}/core/supported-files/`}>LRC / radiometrický JPEG</Link>}
                        >snímek z termokamery</Piece>
                        <i>+</i>
                        <Piece
                            hint={<>JS knihovna pro browser</>}
                        >@labirthermal/web</Piece>
                        <i>=</i>
                        <Piece
                            hint={<>webcomponents / React / Vue / …</>}
                        >analytická aplikace v prohlížeči</Piece>
                    </div>
                </Partial>

                <Partial md={12} lg={7}>
                    <div className={styles.preview}>
                        <Labirthermal file={{
                            ...basicExample,
                            ref: setShowcase,
                            showFullscreen: false,
                        }} />
                    </div>
                </Partial>

                <Partial md={12} lg={5}>
                    <HtmlExample code={`<!-- Jednou načtěte lokálně uložený IIFE build knihovny. -->
<script src="/lib/labirthermal.iife.js"></script>

${elementHtml("thermal-file-app", basicExample)}`} />
                    <p>Změňte paletu nebo analýzy v ukázce — atributy v kódu se průběžně aktualizují.</p>
                </Partial>

                <Partial md={4} className={styles.overview}>
                    <h2>Podporované soubory</h2>
                    <ul>
                        <li><Link href={`${documentation}/core/supported-files/lrc.html`}>LabIR Recording (.lrc)</Link><br />Jednotlivé snímky i sekvence z kamer TIMI Edu a měřicích systémů IRT ZČU.</li>
                        <li><Link href={`${documentation}/core/supported-files/flir.html`}>Radiometrický JPEG (.jpg, .jpeg)</Link><br />Snímky FLIR a kompatibilních kamer, například DJI Zenmuse XT / XT2.</li>
                    </ul>
                    <p>Automatické rozpoznání formátu podle obsahu souboru.</p>
                    <p><Link href={`${documentation}/core/supported-files/`}>Přehled formátů a parserů</Link></p>
                </Partial>

                <Partial md={4} className={styles.overview}>
                    <h2>Struktura balíčků</h2>
                    <p><code className="code">@labirthermal/web</code> je otevřené monorepo se společným základem:</p>
                    <ul>
                        <li><Link href={`${documentation}/core/`}>@labirthermal/core</Link><br />Čtení souborů, teplotní data, analýzy a správa měření v TypeScriptu.</li>
                        <li><Link href={`${documentation}/webcomponents/`}>@labirthermal/webcomponents</Link><br />Hotové aplikace a UI prvky založené na Lit pro HTML, React i Vue.</li>
                        <li><Link href={`${documentation}/react/`}>@labirthermal/react</Link><br />Typované komponenty pro React aplikace.</li>
                    </ul>
                    <p><Link href={documentation}>Dokumentace knihovny</Link>
                        {" · "}<Link href="https://github.com/labirthermal/web">GitHub</Link></p>
                </Partial>

                <Partial md={4} className={styles.overview}>
                    <h2>Hlavní funkce</h2>
                    <ul>
                        <li>Lokální zpracování v prohlížeči a Web Workers.</li>
                        <li>Přehrávání sekvencí a procházení jednotlivých snímků.</li>
                        <li><Link href={`${documentation}/webcomponents/guide/thermal-palette.html`}>Barevné palety</Link><br />Histogram a nastavitelný teplotní rozsah.</li>
                        <li>Bodové, obdélníkové a eliptické analýzy s tabulkou a časovým grafem.</li>
                        <li><Link href={`${documentation}/webcomponents/guide/thermal-range-and-units.html`}>Jednotky °C, °F a K</Link>.</li>
                        <li>Porovnávání více souborů, export obrázků, dat a videa.</li>
                    </ul>
                </Partial>

                <Partial xs={12}>
                    <section className={styles.example} aria-labelledby="labir-advanced">
                        <div className={styles.description}>
                            <h2 id="labir-advanced">Pokročilé možnosti</h2>
                            <p>Sekvence s časovou osou, dvěma analýzami a grafem průměrných i maximálních teplot.</p>
                            <p>Paleta <code className="code">lava</code>, rozšířený výběr palet, jednotky °F a přehrávání 2×. Jednotky lze přepnout na °C nebo K.</p>
                            <p><Link href={fileDocumentation}>Atributy a možnosti thermal-file-app</Link></p>
                        </div>
                        <div className={styles.demo}>
                            <HtmlExample code={elementHtml("thermal-file-app", advancedExample)} />
                            <div className={styles.preview}>
                                <Labirthermal file={advancedExample} />
                            </div>
                        </div>
                    </section>
                </Partial>

                <Partial xs={12}>
                    <section className={styles.example} aria-labelledby="labir-group">
                        <div className={styles.description}>
                            <h2 id="labir-group">Skupinový modul</h2>
                            <p>Porovnání snímků se společnou paletou a teplotním rozsahem.</p>
                            <p>Nastavitelná mřížka, tabulkový přehled a detail každého měření.</p>
                            <p><Link href={`${documentation}/webcomponents/applications/thermal-group-app.html`}>Dokumentace thermal-group-app</Link></p>
                        </div>
                        <div className={styles.demo}>
                            <HtmlExample code={elementHtml("thermal-group-app", groupExample)} />
                            <div className={styles.preview}>
                                <Labirthermal group={groupExample} />
                            </div>
                        </div>
                    </section>
                </Partial>

                <Partial xs={12}>
                    <section className={styles.example} aria-labelledby="labir-dropin">
                        <div className={styles.description}>
                            <h2 id="labir-dropin">Vlastní soubory: drop-in</h2>
                            <p>Přetáhněte vlastní termogramy nebo je vyberte z disku. Analýza i porovnávání běží lokálně v prohlížeči.</p>
                            <p><Link href={`${documentation}/webcomponents/applications/thermal-dropin-app.html`}>Dokumentace thermal-dropin-app</Link></p>
                        </div>
                        <div className={styles.demo}>
                            <HtmlExample code={elementHtml("thermal-dropin-app", dropinExample)} />
                            <div className={styles.preview}>
                                <Labirthermal dropin={dropinExample} />
                            </div>
                        </div>
                    </section>
                </Partial>

                <Partial xs={12}>
                    <h2>Integrace do aplikace</h2>
                </Partial>

                <Partial md={6}>
                    <h3>HTML / IIFE</h3>
                    <p>Lokálně uložený IIFE build zaregistruje komponenty pro použití kdekoliv v HTML.</p>
                    <HtmlExample code={`<script src="/lib/labirthermal.iife.js"></script>

<thermal-file-app
    thermal="/labir/flir_02.jpg"
    palette="iron"
></thermal-file-app>`} />
                    <p><Link href={`${documentation}/webcomponents/usage.html`}>Načtení IIFE buildu</Link></p>
                </Partial>

                <Partial md={6}>
                    <h3>React</h3>
                    <p>Provider připraví runtime a zpřístupní typované komponenty.</p>
                    <HtmlExample language="tsx" code={`import {
    LabirthermalProvider,
    ThermalFileApp,
} from "@labirthermal/react";

export default function ThermalViewer() {
    return (
        <LabirthermalProvider fallback={<p>Načítání…</p>}>
            <ThermalFileApp
                thermal="/labir/flir_02.jpg"
                palette="iron"
            />
        </LabirthermalProvider>
    );
}`} />
                    <p><Link href={`${documentation}/react/`}>React API</Link>
                        {" · "}<Link href={`${documentation}/react/nextjs.html`}>Klientské načítání v Next.js</Link></p>
                </Partial>

            </Content>

        </ProjectLayout>

    </>
    )
}

export default forwardRef(IndexPage)