import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { serialize } from "next-mdx-remote/serialize"

export type EntryFrontmatterType = {
    slug: string,
    path: string,
    title: string,
    author: string,
    topics: string,
    image: string
}

export type WithEntries = {
    entries: EntryFrontmatterType[]
}

class EntriesManager {

    static repositoryPath: string = "entries";

    protected static getFileList(): string[] {
        return fs.readdirSync( EntriesManager.repositoryPath )
            .filter( file => file.endsWith( ".mdx" ) );
    }

    protected static getSlugList(): string[] {
        return EntriesManager
            .getFileList()
            .map( EntriesManager.removeFileExtension )
    }

    protected static removeFileExtension( fileName: string ) {
        return fileName.replace( ".mdx", "" );
    }

    /** Get slug list for the purpose of `getStaticPaths` */
    public static getPathSlugs() {
        return {
            paths: EntriesManager
                .getSlugList()
                .map(slug => ({
                    params: {
                        slug: slug
                    }
                })),
            fallback: false
        }
    }

    /** Get information about all the entries from their frontmatter */
    public static getFrontmatterList() {
        return EntriesManager
            .getFileList()
            .map( fileName => {
                const filePath = path.join(
                    EntriesManager.repositoryPath,
                    fileName
                );
                const fileContents = fs.readFileSync( filePath );
                const slug = EntriesManager.removeFileExtension( fileName );
                return {
                    slug: slug,
                    path: `/entries/${slug}`,
                    ... matter(fileContents).data
                } as EntryFrontmatterType
            } );
    }

    /** Load a single entry including its frontmatter */
    public static async getSingleEntry( 
        slug: string,
        parseFrontMatter: boolean = true
    ) {

        const source = fs.readFileSync( 
            path.join(
                EntriesManager.repositoryPath,
                ( slug + ".mdx" )
            ) 
        );

        return await serialize( source, { parseFrontmatter: parseFrontMatter } )

    }

}

export default EntriesManager