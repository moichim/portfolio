# Osobní portfolio

[moichim.vercel.app](https://moichim.vercel.app)

Napsáno v [Next.js](https://nextjs.org/) s využitím:

- @headlessui/react
- framer-motion

Používá Page Router. CSS je kompletně custom s využitím CSS modules.

Projekty jsou uloženy jako běžné `.tsx` stránky. Pro generování seznamů a pro filtrování stránek slouží `data/ProjectsManager.tsx`.

## Vývoj

```bash
# dev server
npm run dev
# lint
npm run lint
```
Deploy commitem do `main`.

## LabIR showcase

The homepage reserves space for the asynchronous LabIR component using
`pages/index.module.scss`. The width-dependent minimum height was measured with
embed 1.3.0, `/labir/snimek.lrc`, and the advanced layout at viewport widths from
320 to 2560 px. The 800 px breakpoint follows the embed's mobile layout.
The reserve remains after loading to avoid moving the projects below it; taller
interactive content can still expand normally. Recheck the measurements when
changing the embed version, recording, or layout.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
