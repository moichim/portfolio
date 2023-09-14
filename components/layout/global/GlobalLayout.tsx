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
        <Navigation />
        {props.children}
    </div>;
}

export default GlobalLayout;