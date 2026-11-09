"use client";

import { LabirthermalProvider, ThermalDropinApp, ThermalFileApp, ThermalGroupApp, thermalUnits } from "@labirthermal/react";
import type { LabirthermalProps } from "./Labirthermal";

export default function LabirthermalClient(props: LabirthermalProps) {
    return <LabirthermalProvider
        fallback={<p role="status">Loading thermal viewer...</p>}
        errorFallback={error => <p role="alert">Unable to load thermal viewer: {error.message}</p>}
    >
        {props.file
            ? <ThermalFileApp {...props.file} unit={props.file.unit ? thermalUnits[props.file.unit].key : undefined} />
            : props.group
                ? <ThermalGroupApp {...props.group} unit={props.group.unit ? thermalUnits[props.group.unit].key : undefined} />
                : <ThermalDropinApp {...props.dropin} unit={props.dropin.unit ? thermalUnits[props.dropin.unit].key : undefined} />}
    </LabirthermalProvider>;
}
