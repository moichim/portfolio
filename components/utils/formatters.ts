const siteName = "Jan Jáchim";
export const siteUrl = "https://janjachim.cz";

export const formatTitle = ( title?: string|undefined ) => {
    if ( title ) return `${title} | ${siteName}`;
    else return siteName;
}

export const getOgImageUrl = (imagePath?: string) => {
    if (!imagePath) return `${siteUrl}/og-default.jpg`;
    return `${siteUrl}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
}