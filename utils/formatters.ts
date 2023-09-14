const siteName = "Jan Jáchim";

export const formatTitle = ( title?: string|undefined ) => {
    if ( title ) return `${title} | ${siteName}`;
    else return siteName;
}