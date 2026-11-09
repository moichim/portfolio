"use client";

import dynamic from "next/dynamic";
import type { ComponentProps, ComponentRef } from "react";
import type { ThermalDropinApp, ThermalFileApp, ThermalGroupApp } from "@labirthermal/react";

export type LabirthermalFileElement = ComponentRef<typeof ThermalFileApp>;

type ApplicationProps<Props> = Omit<Props, "unit"> & {
    unit?: `${LabirthermalFileElement["unit"]}`;
};

export type LabirthermalProps =
    | { file: ApplicationProps<ComponentProps<typeof ThermalFileApp>>; group?: never; dropin?: never }
    | { group: ApplicationProps<ComponentProps<typeof ThermalGroupApp>>; file?: never; dropin?: never }
    | { dropin: ApplicationProps<ComponentProps<typeof ThermalDropinApp>>; file?: never; group?: never };

const Labirthermal = dynamic<LabirthermalProps>(
    () => import("./LabirthermalClient"),
    {
        ssr: false,
        loading: () => <p role="status">Loading thermal viewer...</p>,
    }
);

export default Labirthermal;
