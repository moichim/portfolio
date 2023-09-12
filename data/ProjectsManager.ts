import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { serialize } from "next-mdx-remote/serialize"
import dynamic from 'next/dynamic'
import ts from "typescript";
import App from "next/app";
// const tsMigrate = require('ts-migrate');

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

class ProjectsManager {

    static repositoryPath: string = "./pages/projects";

    protected static getStoragePath = () => path.join( "pages", "projects" );

    protected static scanFolderForProjects = ( directory: string ) => {

        const files = fs.readdirSync( directory, {
            recursive: false
        } ) as string[];

        const pages: string[] = [];

        files.forEach( file => {

            const filePath = path.join( directory, file );
            const stat = fs.statSync( filePath );

            // Scan nested directory
            if ( stat.isDirectory() ) {

                ProjectsManager.scanFolderForProjects( filePath )
                    .forEach( p => pages.push( p ) );

            } 
            // Validate and append the .tsx files
            else {

                if ( file.startsWith( "index" ) ) return;
                if ( file.includes( "[" ) ) return;
                if ( ! file.endsWith( "tsx" ) ) return;

                pages.push( filePath );

            }

        } );

        return pages;

    }

    protected static getFileList(): string[] {

        return ProjectsManager
            .scanFolderForProjects( 
                ProjectsManager.getStoragePath()
            );

    }

    protected static getPagesExports(): any[] {

        const fileNames = ProjectsManager.getFileList();

        const buf: any[] = [];

        console.log( __dirname, ProjectsManager.getStoragePath() );

        const metadataRegex = /export const metadata\s*(:\s*\w+\s*)?\s*=\s*({[^}]*})/;

        const meta: any[] = [];

        for ( let file of fileNames ) {

            const pth = path.resolve( file );
    

            // const i = dynamic( () => System.import( pth ) );

            // console.log( "default", i.defaultProps );

             const content = fs.readFileSync( pth, "utf8" );

            // console.log( content );
            const source = ts.createSourceFile( "t", content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX );

            // const e = tsMigrate.analyze

            source.forEachChild( node => {


                const is = node.kind === ts.SyntaxKind.VariableDeclaration
                // console.log( node );
                // console.log( node.getFirstToken() );
                // console.log( node.kind === ts.SyntaxKind.VariableStatement, node.getText() );

                // console.log( node.kind === ts.SyntaxKind.ExportAssignment );
                console.log( node.kind === ts.SyntaxKind.VariableDeclarationList );

                if ( node.kind === ts.SyntaxKind.VariableStatement ) {
                    // console.log( node.getText() );

                    const text = node.getText();

                    if ( text.includes( "export" ) && text.includes( "metadata" ) ) {

                        const sanitized = text
                            // .replaceAll( "\n", "" )
                            .replaceAll( "\s", "" )
                            .replaceAll( "\t", "" )
                            .replaceAll( "\r", "" );

                        const regex = /\{([^}]+)\}/g;

                        const m = regex.exec( sanitized )?.at(0);

                        if ( m ) {
                            console.log( m );
                            // console.log( JSON.parse( m ) );
                            // meta.push( JSON.parse( m ) );
                        }

                    
                        

                        // console.log( sanitized, "mač", m?.at(0) );

                        
                        
                        // meta.push( JSON.parse( text.replace( "export const metadata: Metadata = ", "" ) ) );
                    }




                    // ts.parse
                }

                // console.log( node.getFullText() );
            } )

            // console.log( source );

            // const dyn = dynamic( () => import( pth ) );

            // console.log( "danamickost", dyn )

            // const i = require( pth ).then( console.log ).catch( console.log );

            break;

            /*

            const fileContent = fs.readFileSync(pth, 'utf8');

            // console.log( fileContent );

            const match = metadataRegex.exec(fileContent);

            const m = match?.at(2);

            if ( m ) {
                const sanitized = m
                    .replaceAll( "\t", "" )
                    .replaceAll( "\n", "" )
                    .replaceAll( "\r", "" );
                // console.log( JSON.parse( sanitized ) );
               //  meta.push( sanitized );
            }

            // const i = import( pth ).then( console.log ).catch( console.log );

            // console.log( match?.at( 2 )?.replaceAll( "\t", "" ) );
            

            // break;

            // match?.at(2);

            if ( match && Array.isArray( match ) ) {

                const content = match.at(2);

                if ( content ) {
                    const purged = content.replace( "\t", "" );

                    const textWithTabs = "This\tis\ta\ttext\twith\ttabs.";
const textWithoutTabs = purged.replace(/\t/g, "")

                    console.log( "vyčištěno", textWithoutTabs );

                    meta.push( JSON.parse( purged ) );
                }

                console.log( "něco", match.at(2) );

                meta.push( match.at(2) );

                if ( match.length > 1 ) {

                    // console.log( JSON.parse( match[2] ) );

                    if ( match[2] ) {

                        meta.push( match.at(2) );
                        // console.log( JSON.parse( match[2] ) );
                        // meta.push( JSON.parse( match[2] ) );
                    }
                }

                // console.log( match[2] );
            }

            // if ( match && match[2] )
                // console.log( JSON.parse( match[2] ) );

            /*
            if (match && match[1]) {
                const metadataObject = JSON.parse(match[1]);
                console.log(`Soubor ${pth} obsahuje exportovanou metadata:`, metadataObject);
            }
            */

            // console.log( pth );

            // const content = await import( file.replace( ".tsx", ".js" ) );
            // buf.push(content);

            // console.log( content );

        }

        console.log( "výsledek", meta );

        return meta;

        return [];
        
    }

    protected static getSlugList(): string[] {
        return ProjectsManager
            .getFileList()
            .map( ProjectsManager.removeFileExtension )
    }

    protected static removeFileExtension( fileName: string ) {
        return fileName.replace( ".mdx", "" );
    }

    /** Get slug list for the purpose of `getStaticPaths` */
    public static getPathSlugs() {
        return {
            paths: ProjectsManager
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
    public static getProjectsMetadata() {

        const files = ProjectsManager.getPagesExports();

        console.log( files );

        return ProjectsManager
            .getFileList()
    }



}

export default ProjectsManager