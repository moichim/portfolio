import Head from "next/head";
import { useRouter } from "next/router";
import { formatTitle, siteUrl } from "./formatters";

type SeoHeadProps = {
    title?: string;
    description?: string;
    image?: string;
    color?: string;
    type?: "website" | "article";
    noindex?: boolean;
}

const SeoHead: React.FC<SeoHeadProps> = ({
    title,
    description,
    image,
    color,
    type = "website",
    noindex = false,
}) => {
    const router = useRouter();
    const formattedTitle = formatTitle(title);
    const imageUrl = image
        ? `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`
        : undefined;
    const path = router.asPath.split(/[?#]/, 1)[0].replace(/\/+$/, "") || "/";
    const canonicalUrl = `${siteUrl}${path}`;
    const personId = `${siteUrl}/#person`;
    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": personId,
            name: "Jan Jáchim",
            url: siteUrl,
            jobTitle: "Creative developer and designer",
        },
        ...(type === "article"
            ? [{
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: title,
                description,
                url: canonicalUrl,
                ...(imageUrl ? { image: imageUrl } : {}),
                author: { "@id": personId },
            }]
            : []),
    ];

    return (
        <Head>
            <title>{formattedTitle}</title>
            {description && <meta name="description" content={description} />}
            <link rel="canonical" href={canonicalUrl} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            {color && <meta name="theme-color" content={color} />}

            <meta property="og:title" content={formattedTitle} />
            {description && <meta property="og:description" content={description} />}
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            {imageUrl && <meta property="og:image:width" content="1200" />}
            {imageUrl && <meta property="og:image:height" content="630" />}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="Jan Jáchim" />
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content={imageUrl ? "summary_large_image" : "summary"} />
            <meta name="twitter:title" content={formattedTitle} />
            {description && <meta name="twitter:description" content={description} />}
            {imageUrl && <meta name="twitter:image" content={imageUrl} />}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
                }}
            />
        </Head>
    );
};

export default SeoHead;
