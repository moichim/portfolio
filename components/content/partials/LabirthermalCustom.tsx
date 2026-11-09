"use client";

import dynamic from "next/dynamic";

export type CustomInterfaceProps = {
    files: { thermal: string; label: string; format: string }[];
    css: string;
};

const files: CustomInterfaceProps["files"] = [
    { thermal: "/labir/flir_02.jpg", label: "Inspection 01", format: "FLIR JPEG" },
    { thermal: "/labir/snimek.lrc", label: "Inspection 02", format: "LRC image" },
    { thermal: "/labir/snimek_2.lrc", label: "Inspection 03", format: "LRC image" },
    { thermal: "/labir/snimek_3.lrc", label: "Inspection 04", format: "LRC image" },
];

export const customInterfaceCss = `.labir-solarized {
    color: var(--thermal-foreground);
    background: var(--thermal-background);
    padding: 16px;
    border-radius: var(--thermal-radius);
}
.labir-solarized manager-provider,
.labir-solarized registry-provider,
.labir-solarized group-provider,
.labir-solarized file-provider,
.labir-solarized file-canvas {
    display: block;
    min-width: 0;
}
.labir-solarized h3,
.labir-solarized h4,
.labir-solarized p { margin: 0 0 12px; }
.labir-solarized registry-range-slider {
    display: block;
    margin-inline: 16px;
}
.labir-solarized .controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}
.labir-solarized .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
    gap: 16px;
    margin-top: 16px;
}
.labir-solarized article {
    min-width: 0;
    padding: 12px;
    background: var(--thermal-slate-light);
    border-radius: var(--thermal-radius);
}
.labir-solarized footer {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
}`;

export const customInterfaceHtml = `<div class="labir-solarized" skin="solarized">
    <manager-provider palette="iron">
        <header>
            <h3>Inspection desk</h3>
            <p>Four recordings. One shared palette and temperature range.</p>
        </header>
        <div class="controls">
            <manager-palette-dropdown></manager-palette-dropdown>
            <manager-unit-switch></manager-unit-switch>
        </div>
        <registry-provider>
            <div class="controls">
                <registry-range-display></registry-range-display>
                <registry-range-full-button></registry-range-full-button>
            </div>
            <registry-histogram></registry-histogram>
            <registry-range-slider></registry-range-slider>
            <group-provider>
                <div class="image-grid">
${files.map(file => `                    <article>
                        <h4>${file.label}</h4>
                        <p>${file.format}</p>
                        <file-provider thermal="${file.thermal}">
                            <file-canvas></file-canvas>
                            <footer>
                                <file-info-button></file-info-button>
                                <file-download-png></file-download-png>
                            </footer>
                        </file-provider>
                    </article>`).join("\n")}
                </div>
            </group-provider>
        </registry-provider>
    </manager-provider>
</div>`;

const CustomInterface = dynamic<CustomInterfaceProps>(
    () => import("./LabirthermalCustomClient"),
    {
        ssr: false,
        loading: () => <p role="status">Loading inspection desk...</p>,
    }
);

export default function LabirthermalCustom() {
    return <CustomInterface files={files} css={customInterfaceCss} />;
}
