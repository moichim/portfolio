import Head from "next/head";
import { useRouter } from "next/router";
import { formatTitle, siteUrl } from "./formatters";

type Author = {
    name: string;
    url?: string;
};

type SeoHeadProps = {
    title?: string;
    description?: string;
    image?: string;
    color?: string;
    type?: "website" | "article";
    noindex?: boolean;
    authors?: Author[];
    year?: number;
    month?: number;
    day?: number;
}

const getPublishedDate = (year?: number, month?: number, day?: number) => {
    if (year === undefined || month === undefined || day === undefined) return undefined;

    const date = new Date(Date.UTC(year, month - 1, day));
    if (
        date.getUTCFullYear() !== year ||
        date.getUTCMonth() !== month - 1 ||
        date.getUTCDate() !== day
    ) {
        return undefined;
    }

    return date.toISOString().slice(0, 10);
};

const SeoHead: React.FC<SeoHeadProps> = ({
    title,
    description,
    image,
    color,
    type = "website",
    noindex = false,
    authors,
    year,
    month,
    day,
}) => {
    const router = useRouter();
    const formattedTitle = formatTitle(title);
    const imageUrl = image
        ? `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`
        : undefined;
    const path = router.asPath.split(/[?#]/, 1)[0].replace(/\/+$/, "") || "/";
    const canonicalUrl = `${siteUrl}${path}`;
    const personId = `${siteUrl}/#person`;
    const datePublished = getPublishedDate(year, month, day);
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
                ...(datePublished ? { datePublished } : {}),
                ...(authors?.length
                    ? {
                        author: authors.map((author) => ({
                            "@type": "Person",
                            name: author.name,
                            ...(author.url ? { url: author.url } : {}),
                        })),
                    }
                    : {}),
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
            {type === "article" && datePublished && (
                <meta property="article:published_time" content={datePublished} />
            )}
            {type === "article" && authors?.length ? (
                <meta name="author" content={authors.map((author) => author.name).join(", ")} />
            ) : null}
            {type === "article" && authors?.map((author) => author.url && (
                <meta
                    key={`article-author-${author.url}`}
                    property="article:author"
                    content={author.url}
                />
            ))}

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
