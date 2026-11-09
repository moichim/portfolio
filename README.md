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

### Page transitions and Turbopack

The pnpm patch for `@madeinhaus/nextjs-page-transition@4.2.0` disables its
legacy CSS-preservation hook under Turbopack, which manages stylesheet lifetimes
itself. Otherwise the transition library removes route CSS and returning to a
cached page breaks its layout. Transition animations and webpack's original
CSS handling are unchanged. Keep the patch when installing dependencies with
pnpm; recheck it when upgrading the transition library.

## LabIR showcase

`components/content/partials/Labirthermal.tsx` is the SSR-safe entry point:

```tsx
import Labirthermal from "@/components/content/partials/Labirthermal";

<Labirthermal file={{ thermal: "/labir/snimek.lrc", showFullscreen: false }} />
<Labirthermal group={{ filesString: "thermal~/labir/snimek.lrc;thermal~/labir/snimek_2.lrc" }} />
<Labirthermal dropin={{ palette: "iron", advancedPalettes: true }} />
```

Place it inside `Partial` when grid sizing is needed. The `file`, `group` and `dropin`
props are mutually exclusive and use the typed React API (`thermal`, not `url`;
`filesString`, not `files`; booleans instead of string attributes).
The `unit` prop accepts the serializable values `"C"`, `"F"` and `"K"`; the
client module maps them to the library's enum without importing runtime values
on the server.
The new runtime supplies its own responsive layout; the legacy `layout` and
`columns` options are no longer part of these application components.

The separate `LabirthermalClient.tsx` module is loaded with `next/dynamic` and
`ssr: false`. Only it imports runtime values from `@labirthermal/react`.
Its provider initializes the locally bundled runtime and styles, with loading
and error placeholders. Multiple instances share initialization, including
Strict Mode remounts. Do not add an IIFE script or embed stylesheet alongside it:
the legacy runtime would conflict with custom-element registration.
Thermal files and browser Web Workers run entirely on the client; no LabIR
runtime is evaluated during SSR.

`workerpool` currently retains guarded Node-only imports even in its browser
build. `next.config.js` excludes `worker_threads`, `child_process` and `os` only
for browser targets in both Turbopack and webpack. This does not disable browser
Web Workers or add Node polyfills.

The project page presents plain HTML webcomponents rather than its internal
React integration. Its basic, sequence, group and drop-in snippets are generated
from the same configurations as their live previews, mapping React property names
to HTML attributes (`filesString` → `group-files`, `playbackSpeed` → `speed`).
The basic FLIR JPEG example (`public/labir/flir_02.jpg`) also reflects interactive
palette and analysis changes. The final section shows static IIFE and React
provider integration snippets; these do not load a second runtime.
Advanced demos use a narrow description column and a wide code/viewer column,
stacking on smaller screens. Supported formats and package links follow the
basic example and point to the upstream documentation.

The homepage reserves space for the asynchronous LabIR component using
`pages/index.module.scss`. The width-dependent minimum height was checked with
`@labirthermal/react`, `/labir/snimek.lrc`, and viewport widths from 320 to 2560 px.
The 720 px container breakpoint accommodates the viewer's 700 px stacked-layout
threshold plus its internal padding, independently of viewport width or the
thumbnail's column layout. Compact layouts reserve at least 760 px for wrapped
controls.
The reserve remains after loading to avoid moving the projects below it; taller
interactive content can still expand normally. Recheck the measurements when
changing the library version, recording, or layout.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
