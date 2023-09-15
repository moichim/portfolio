import Head from "next/head";
import Header from "../navigation/Header";
import Navigation from "../navigation/Navigation";

/** 
 * Markup common to the entire site.
 * - accesses only global context providers
 * - is absolutely the same for the entire page
 * - defines header, footer and the main content
*/
const GlobalLayout: React.FC<React.PropsWithChildren> = props => {
    return <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Navigation />
        {props.children}
    </div>;
}

export default GlobalLayout;