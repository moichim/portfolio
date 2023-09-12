// import { GetStaticPropsContext } from 'next';
import PageTransition from '@/components/ui/PageTransition';
import { Heading } from '@/components/mdx/Heading';
import Para from '@/components/mdx/Para';
import EntriesManager from '@/data/EntriesManager';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import { forwardRef } from 'react';
import PageLayout from '@/components/layout/PageLayout';


export async function getStaticPaths() {

    return await EntriesManager.getPathSlugs();

}

export async function getStaticProps(ctx: GetStaticPropsContext) {

    const slug = ctx.params!.slug as string;

    return await {
        props: {
            source: await EntriesManager.getSingleEntry( slug ),
            entries: EntriesManager.getFrontmatterList()
        }
    }

}



const ArticlePage = ({ source, entries }: InferGetStaticPropsType< typeof getStaticProps>, ref: React.ForwardedRef<HTMLDivElement> ) =>  {

    return (
        <PageLayout ref={ref}>
            <MDXRemote 
                compiledSource={source.compiledSource} 
                scope={source.scope} 
                frontmatter={source.frontmatter ?? {}}
                components={{
                    h1: Heading.H1,
                    h2: Heading.H2,
                    p: Para,
                }}
            />
        </PageLayout>
    );
}

export default forwardRef( ArticlePage );