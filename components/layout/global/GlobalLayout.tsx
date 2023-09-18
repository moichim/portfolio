import Head from "next/head";
import Navigation from "../../navigation/Navigation";
import Footer from "@/components/navigation/Footer";

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
        <div style={{minHeight: "70vh"}}>
            {props.children}
        </div>
        <Footer />
    </div>;
}

export default GlobalLayout;