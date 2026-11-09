"use client";

import {
    FileCanvas,
    FileInfoButton,
    FilePngButton,
    FileProvider,
    GroupProvider,
    LabirthermalProvider,
    ManagerPaletteDropdown,
    ManagerProvider,
    ManagerUnitSwitch,
    RegistryHistogram,
    RegistryProvider,
    RegistryRangeDisplay,
    RegistryRangeFullButton,
    RegistryRangeSlider,
} from "@labirthermal/react";
import type { CustomInterfaceProps } from "./LabirthermalCustom";

export default function LabirthermalCustomClient({ files, css }: CustomInterfaceProps) {
    return <LabirthermalProvider
        fallback={<p role="status">Loading inspection desk...</p>}
        errorFallback={error => <p role="alert">Unable to load inspection desk: {error.message}</p>}
    >
        <style>{css}</style>
        <div className="labir-solarized" {...{ skin: "solarized" }}>
            <ManagerProvider palette="iron">
                <header>
                    <h3>Inspection desk</h3>
                    <p>Four recordings. One shared palette and temperature range.</p>
                </header>
                <div className="controls">
                    <ManagerPaletteDropdown />
                    <ManagerUnitSwitch />
                </div>
                <RegistryProvider>
                    <div className="controls">
                        <RegistryRangeDisplay />
                        <RegistryRangeFullButton />
                    </div>
                    <RegistryHistogram />
                    <RegistryRangeSlider />
                    <GroupProvider>
                        <div className="image-grid">
                            {files.map(file => <article key={file.thermal}>
                                <h4>{file.label}</h4>
                                <p>{file.format}</p>
                                <FileProvider thermal={file.thermal}>
                                    <FileCanvas />
                                    <footer>
                                        <FileInfoButton />
                                        <FilePngButton />
                                    </footer>
                                </FileProvider>
                            </article>)}
                        </div>
                    </GroupProvider>
                </RegistryProvider>
            </ManagerProvider>
        </div>
    </LabirthermalProvider>;
}
