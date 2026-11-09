import Content from "@/components/content/Content";
import Partial from "@/components/content/partials/Partial";
import Labirthermal, { type LabirthermalFileElement, type LabirthermalProps } from "@/components/content/partials/Labirthermal";
import LabirthermalCustom, { customInterfaceCss, customInterfaceHtml } from "@/components/content/partials/LabirthermalCustom";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
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
    "description": "Open-source thermal imaging library",
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
    label: "Thermal sequence with analyses",
    palette: "rainbow",
    advancedPalettes: true,
    unit: "F",
    from: 68,
    to: 82.5,
    playbackSpeed: 2,
    analysis1: "Region A;rectangle;color:Blue;top:14;left:8;width:65;height:31;avg;max",
    analysis2: "Region B;ellipsis;color:Green;top:34;left:102;width:34;height:47;avg;max",
} satisfies NonNullable<LabirthermalProps["file"]>;

const groupExample = {
    label: "File group",
    palette: "iron",
    filesString: "thermal~/labir/snimek.lrc;thermal~/labir/snimek_2.lrc;thermal~/labir/snimek_3.lrc;thermal~/labir/snimek_4.lrc",
} satisfies NonNullable<LabirthermalProps["group"]>;

const dropinExample = {
    label: "Try your own thermal image",
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

function HtmlExample({ code, language = "html" }: { code: string; language?: "html" | "css" | "tsx" }) {
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
        analysis1: "Analysis A;rectangle;color:Blue;top:100;left:80;width:420;height:250",
        analysis2: "Analysis B;ellipsis;color:Green;top:280;left:600;width:280;height:360",
    });
    const [showcase, setShowcase] = useState<LabirthermalFileElement | null>(null);
    const basicExample = {
        thermal: "/labir/flir_02.jpg",
        label: "FLIR JPEG",
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
                            hint={<Link href={`${documentation}/core/supported-files/`}>LRC / FLIR JPEG</Link>}
                        >thermal camera recording</Piece>
                        <i>+</i>
                        <Piece
                            hint={<>JavaScript library for the browser</>}
                        >@labirthermal/web</Piece>
                        <i>=</i>
                        <Piece
                            hint={<>webcomponents / React / Vue / …</>}
                        >browser-based analysis app</Piece>
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
                    <HtmlExample code={`<!-- Load the locally hosted IIFE build once. -->
<script src="/lib/labirthermal.iife.js"></script>

${elementHtml("thermal-file-app", basicExample)}`} />
                    <p>Change the palette or analyses in the demo — the code attributes update live.</p>
                </Partial>

                <Partial md={4} className={styles.overview}>
                    <h2>Supported file formats</h2>
                    <ul>
                        <li><Link href={`${documentation}/core/supported-files/lrc.html`}>LabIR Recording (.lrc)</Link><br />Single images and sequences from TIMI Edu cameras and IRT measurement systems at the University of West Bohemia.</li>
                        <li><Link href={`${documentation}/core/supported-files/flir.html`}>FLIR JPEG (.jpg, .jpeg)</Link><br />Images from FLIR and compatible cameras, including DJI Zenmuse XT / XT2.</li>
                    </ul>
                    <p>Automatic format detection based on file contents.</p>
                    <p><Link href={`${documentation}/core/supported-files/`}>Formats and parsers</Link></p>
                </Partial>

                <Partial md={4} className={styles.overview}>
                    <h2>Package structure</h2>
                    <p><code className="code">@labirthermal/web</code> is an open-source monorepo built on a shared foundation:</p>
                    <ul>
                        <li><Link href={`${documentation}/core/`}>@labirthermal/core</Link><br />File reading, temperature data, analysis and measurement management in TypeScript.</li>
                        <li><Link href={`${documentation}/webcomponents/`}>@labirthermal/webcomponents</Link><br />Ready-to-use Lit-based apps and UI elements for HTML, React and Vue.</li>
                        <li><Link href={`${documentation}/react/`}>@labirthermal/react</Link><br />Typed components for React apps.</li>
                    </ul>
                    <p><Link href={documentation}>Library documentation</Link>
                        {" · "}<Link href="https://github.com/labirthermal/web">GitHub</Link></p>
                </Partial>

                <Partial md={4} className={styles.overview}>
                    <h2>Key features</h2>
                    <ul>
                        <li>Local processing in the browser with Web Workers.</li>
                        <li>Sequence playback and frame-by-frame navigation.</li>
                        <li><Link href={`${documentation}/webcomponents/guide/thermal-palette.html`}>Colour palettes</Link><br />Histogram and adjustable temperature range.</li>
                        <li>Point, rectangle and ellipse analyses with tables and time-series charts.</li>
                        <li><Link href={`${documentation}/webcomponents/guide/thermal-range-and-units.html`}>Temperature units: °C, °F and K</Link>.</li>
                        <li>Multi-file comparison and image, data and video export.</li>
                    </ul>
                </Partial>

                <Partial xs={12}>
                    <section className={styles.example} aria-labelledby="labir-advanced">
                        <div className={styles.description}>
                            <h2 id="labir-advanced">Advanced features</h2>
                            <p>A sequence with a timeline, two analysis regions and a chart of average and maximum temperatures.</p>
                            <p>The <code className="code">rainbow</code> palette, advanced palette selection, a 68–82.5 °F range and 2× playback. Switch units to °C or K.</p>
                            <p><Link href={fileDocumentation}>thermal-file-app attributes and options</Link></p>
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
                            <h2 id="labir-group">Group module</h2>
                            <p>Compare images with a shared palette and temperature range.</p>
                            <p>An adjustable grid, a summary table and a detailed view of each measurement.</p>
                            <p><Link href={`${documentation}/webcomponents/applications/thermal-group-app.html`}>thermal-group-app documentation</Link></p>
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
                            <h2 id="labir-dropin">Your own files: drop-in</h2>
                            <p>Drag in your thermal images or select them from disk. Analysis and comparison run locally in your browser.</p>
                            <p><Link href={`${documentation}/webcomponents/applications/thermal-dropin-app.html`}>thermal-dropin-app documentation</Link></p>
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
                    <section className={styles.example} aria-labelledby="labir-custom">
                        <div className={styles.description}>
                            <h2 id="labir-custom">Build custom interfaces</h2>
                            <p>Combine standalone webcomponents with your own HTML to build any interface.</p>
                            <p>Four still images, shared palette and range controls, and a scoped Solarized theme. Providers connect the controls and images through a shared context.</p>
                            <p><Link href={`${documentation}/webcomponents/list.html`}>Explore all webcomponents</Link>
                                {" · "}<Link href={`${documentation}/webcomponents/guide/hierarchy.html`}>Provider hierarchy</Link></p>
                        </div>
                        <div className={styles.demo}>
                            <details className={styles.sourceDisclosure}>
                                <summary>View HTML &amp; CSS</summary>
                                <TabGroup>
                                    <TabList className={styles.sourceTabs} aria-label="Source language">
                                        <Tab>HTML</Tab>
                                        <Tab>CSS</Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <HtmlExample code={customInterfaceHtml} />
                                        </TabPanel>
                                        <TabPanel>
                                            <HtmlExample code={customInterfaceCss} language="css" />
                                        </TabPanel>
                                    </TabPanels>
                                </TabGroup>
                            </details>
                            <div className={styles.preview}>
                                <LabirthermalCustom />
                            </div>
                        </div>
                    </section>
                </Partial>

                <Partial xs={12}>
                    <h2>App integration</h2>
                </Partial>

                <Partial md={6}>
                    <h3>HTML / IIFE</h3>
                    <p>The locally hosted IIFE build registers the components for use anywhere in HTML.</p>
                    <HtmlExample code={`<script src="/lib/labirthermal.iife.js"></script>

<thermal-file-app
    thermal="/labir/flir_02.jpg"
    palette="iron"
></thermal-file-app>`} />
                    <p><Link href={`${documentation}/webcomponents/usage.html`}>Loading the IIFE build</Link></p>
                </Partial>

                <Partial md={6}>
                    <h3>React</h3>
                    <p>The provider initializes the runtime and makes the typed components available.</p>
                    <HtmlExample language="tsx" code={`import {
    LabirthermalProvider,
    ThermalFileApp,
} from "@labirthermal/react";

export default function ThermalViewer() {
    return (
        <LabirthermalProvider fallback={<p>Loading…</p>}>
            <ThermalFileApp
                thermal="/labir/flir_02.jpg"
                palette="iron"
            />
        </LabirthermalProvider>
    );
}`} />
                    <p><Link href={`${documentation}/react/`}>React API</Link>
                        {" · "}<Link href={`${documentation}/react/nextjs.html`}>Client-side loading in Next.js</Link></p>
                </Partial>

            </Content>

        </ProjectLayout>

    </>
    )
}

export default forwardRef(IndexPage)