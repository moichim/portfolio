import type { GetServerSideProps } from "next"

const SITE_URL = "https://janjachim.cz"

const PAGE_PATHS = [
  "/",
  "/bio",
  "/code",
  "/contact",
  "/design",
  "/interactive",
  "/projects",
]

const PROJECT_PATHS = [
  "/projects/blik/2026",
  "/projects/blik/blablator",
  "/projects/blik/brain",
  "/projects/blik/cerrynt",
  "/projects/blik/hum",
  "/projects/blik/laborator-zvuku",
  "/projects/blik/maruska",
  "/projects/blik/souzvon",
  "/projects/blik/symfonie-barev",
  "/projects/humr/classmates",
  "/projects/humr/room-127",
  "/projects/ntc/labir",
  "/projects/school/analyza",
  "/projects/school/kdo",
  "/projects/school/kytky",
  "/projects/school/other-places",
  "/projects/srpk",
  "/projects/techmania/inzenyr",
  "/projects/citanka",
  "/projects/monnom",
]

const SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...PAGE_PATHS, ...PROJECT_PATHS]
    .map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`)
    .join("\n")}
</urlset>`

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml; charset=utf-8")
  res.write(SITEMAP)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}