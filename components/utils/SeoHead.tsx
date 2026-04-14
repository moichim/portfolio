import Head from "next/head";
import { useRouter } from "next/router";
import { formatTitle, getOgImageUrl, siteUrl } from "./formatters";

type SeoHeadProps = {
    title?: string;
    description?: string;
    image?: string;
    color?: string;
    type?: "website" | "article";
}

const SeoHead: React.FC<SeoHeadProps> = ({
    title,
    description,
    image,
    color,
    type = "website",
}) => {
    const router = useRouter();
    const formattedTitle = formatTitle(title);
    const ogImageUrl = getOgImageUrl(image);
    const canonicalUrl = `${siteUrl}${router.asPath}`;

    return (
        <Head>
            <title>{formattedTitle}</title>
            {description && <meta name="description" content={description} />}
            {color && <meta name="theme-color" content={color} />}

            <meta property="og:title" content={formattedTitle} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="Jan Jáchim" />
            <meta property="og:locale" content="cs_CZ" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={formattedTitle} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={ogImageUrl} />
        </Head>
    );
};

export default SeoHead;
