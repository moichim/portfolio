import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import { serialize } from "next-mdx-remote/serialize"
import dynamic from 'next/dynamic'
import ts from "typescript";
import App from "next/app";
// const tsMigrate = require('ts-migrate');
// import objectParser from 'js-object-parser';
import { parseJSONObject } from "parse-json-object";
import { Metadata as Meta } from "next";

export type Metadata = Meta & {
    title: string,
	image: string,
	color?: string,
    keywords: string[],
    year: number,
    month: number,
    day: number,
    public: boolean
}

export type ProjectMetadata = Metadata & {
    path: string;
    title: string,
    image: string,
}

/** Handle projects stored in pages/projects as .tsx files */
class ProjectsManager {

    static repositoryPath: string = "./pages/projects";

    protected static getStoragePath = () => path.join("pages", "projects");

    /** Scans the entire "pages/projects" folder and returns names of all .tsx projects (not other pages) */
    protected static scanFolderForProjects = (directory: string) => {

        const files = fs.readdirSync(directory, {
            recursive: false
        }) as string[];

        const pages: string[] = [];

        files.forEach(file => {

            const filePath = path.join(directory, file);
            const stat = fs.statSync(filePath);

            // Scan nested directory
            if (stat.isDirectory()) {

                ProjectsManager.scanFolderForProjects(filePath)
                    .forEach(p => pages.push(p));

            }
            // Validate and append the .tsx files
            else {

                if (file.startsWith("index")) return;
                if (file.includes("[")) return;
                if (!file.endsWith("tsx")) return;

                pages.push(filePath);

            }

        });

        return pages;

    }

    protected static getAllProjectsMetadata(): ProjectMetadata[] {

        const fileNames = ProjectsManager.scanFolderForProjects(
            ProjectsManager.getStoragePath()
        );

        let projects: ProjectMetadata[] = [];

        for (let file of fileNames) {

            // Load the source file
            const pth = path.resolve(file);
            const content = fs.readFileSync(pth, "utf8");

            // Create the TS representation of the file
            const source = ts.createSourceFile("t", content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

            // Iterate all TS nodes to find its metadata export
            source.forEachChild(node => {

                if (node.kind === ts.SyntaxKind.VariableStatement) {

                    const text = node.getText();

                    if (text.includes("export") && text.includes("metadata")) {

                        // Remove all unnecessary from the raw JS code
                        const sanitized = text
                            .replaceAll(/[\r\n\t]/gm, "")
                            .replaceAll("export const metadata: Metadata = ", "")
                            .replaceAll("export const metadata = ", "");

                        try {

                            const parsed = JSON.parse(sanitized) as ProjectMetadata;
                            parsed.path = file
                                .replace("pages", "")
                                .replaceAll(".tsx", "")
                                .replaceAll("\\", "/");
                            projects.push(parsed);

                        } catch (e) {
                            console.error(`Projekt "${file}" does has invalid metadata declaration:`, sanitized, e );
                        }

                    }

                }

            });

        }

        const sortByNumericField = ( a: ProjectMetadata, b: ProjectMetadata, key: keyof ProjectMetadata ): number | false => {
            
            const valA = a[ key ]!;
            const valB = b[ key ]!;

            // If equal, return false
            if ( valA === valB ) return false;

            // Otherwise, return number
            return valA >= valB ? -1 : 1;


        }

        // Order found projects by date and title
        projects = projects.sort( ( a, b ) => {
            
            const numericFields = [ "year", "month", "day" ] as (keyof ProjectMetadata)[]

            for ( const key of numericFields ) {
                const result = sortByNumericField( a, b, key );
                if ( result !== false ) return result;
            }

            return a.title.localeCompare( b.title );

        } );

        return projects;

    }

    /** Get information about all the entries from their frontmatter */
    public static getProjectsMetadata() {

        return ProjectsManager.getAllProjectsMetadata();

    }

    public static getProjects( options: {
        keyword?: string,
        visibility?: boolean
    } = {}): ProjectMetadata[] {

        let projects = ProjectsManager.getAllProjectsMetadata();

        if ( "keyword" in options )
        if ( options.keyword !== undefined )
            projects = projects.filter( project => project.keywords.includes( options.keyword! ) );

        if ( "visibility" in options )
        if ( options.visibility !== undefined )
            projects = projects.filter( project => project.public === options.visibility );

        return projects;

    }



}

export default ProjectsManager