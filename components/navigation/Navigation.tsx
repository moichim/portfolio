import { useLayoutContext } from "@/context/layout/LayoutContext";
import clsx from "clsx";
import { useRouter } from "next/router";
import { MouseEvent, PropsWithChildren } from "react";
import MenuTrigger from "./MenuTrigger";
import styles from "./Navigation.module.scss";
import ThemeSwitch from "./ThemeSwitch";

type NavigationLinkProps = PropsWithChildren & {
    title?: string,
    description?: string,
    classes?: string[],
    href: string
};


const Navlink: React.FC< NavigationLinkProps > = ( props ) => {

    const page = useLayoutContext();
    const router = useRouter();

    const handleClick = ( event: MouseEvent<HTMLAnchorElement> ) => {
        event.preventDefault();
        page.setIsExpanded( false );
        router.push( props.href );
    };

    return <a 
        href={ props.href }
        onClick={ handleClick }
    >
        {props.children ?? props.title}
    </a>

}

import exp from "@/styles/modules/export.module.scss";
import { Link } from "@madeinhaus/nextjs-page-transition";

const SiteTitle: React.FC = () => {

    const context = useLayoutContext();

    const router = useRouter();

    const handleClick = (event: MouseEvent) => {

        event.preventDefault();

        if (window.innerWidth < ( parseFloat( exp.menuCollapseBreakpoint ) ) ) {

            if ( context.isExpanded === false ) {
                context.setIsExpanded( true );
            } else {
                router.push( "/" );
                context.setIsExpanded( false );
            }
        } else {
            router.push( "/", undefined, {
                scroll: false
            } );
        }
    };

    return <Link href="/" onClick={handleClick}>
        J<span>an&nbsp;</span>
        J<span>áchim</span>
    </Link>
}

const Header: React.FC = () => {    

    const page = useLayoutContext();

    const classes = [ styles.navigation ];
    if ( page.isExpanded ) classes.push( styles.navigation___expanded );

    return(
        <>
        <header className={clsx( ...classes )}>

            <div className={styles.overlay} aria-hidden></div>
            <div className={styles.bg} aria-hidden></div>



            <div className={ styles.title }>
                <SiteTitle />
            </div>

            <nav className={styles.links} aria-roledescription="Menu s nabídkou odkazů">
                <ul>
                    
                    <li className={styles.link}>
                        <Navlink title="Interaktivita" href="/interactive" />
                    </li>
                    <li className={styles.link}>
                        <Navlink title="Design" href="/design" />
                    </li>
                    <li className={styles.link}>
                        <Navlink title="Kód" href="/code" />
                    </li>
                    <li className={styles.separator}></li>
                    <li className={styles.link}>
                        <Navlink title="Bio" href="/bio" />
                    </li>
                    <li className={styles.link}>
                        <Navlink title="Contact" href="/contact" />
                    </li>
                </ul>
            </nav>

            <aside className={styles.toggles}>

                <div className={styles.theme}>
                    <ThemeSwitch/>
                </div>

                <div className={styles.hamburger}>
                    <MenuTrigger />
                </div>

            </aside>

        </header>
        <div className={styles.block}></div>
        </>
    );

}

const Navigation: React.FC = () => {
    return <Header />;
}

export default Navigation;