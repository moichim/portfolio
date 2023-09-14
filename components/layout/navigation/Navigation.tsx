'use client';

import { MouseEventHandler, useState, MouseEvent, useLayoutEffect, useMemo, useCallback } from "react";
import styles from "./Navigation.module.scss";
import clsx from "clsx";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { usePageContext } from "@/context/project/ProjectContext";

type NavigationLinkProps = {
    title: string,
    description?: string,
    classes?: string[],
    href: string
};


const Navlink: React.FC< NavigationLinkProps > = ( props ) => {

    const page = usePageContext();
    const router = useRouter();

    const handleClick = ( event: MouseEvent<HTMLAnchorElement> ) => {
        event.preventDefault();
        page.setIsExpanded( false );
        router.push( props.href );
    };

    return <a 
        href={ props.href }
        onClick={ handleClick }
        aria-description={props.description}
    >
        {props.title}
    </a>

}

const Header: React.FC = () => {    

    const page = usePageContext();

    const classes = [ styles.navigation ];
    if ( page.isExpanded ) classes.push( styles.navigation___expanded );

    return(
        <header className={clsx( ...classes )}>

            <div className={styles.navigation_background} aria-hidden></div>



            <div className={ styles.navigation_siteTitle }>
                <Navlink title="Jan Jáchim" href="/" />
            </div>

            <nav className={styles.navigation_links} aria-roledescription="Menu s nabídkou odkazů">
                <ul>
                    <li className={styles.link}><Navlink title="První" href="/projects/first" /></li>
                    <li className={styles.link}><Navlink title="Design" href="/design" /></li>
                </ul>
            </nav>

            <aside className={styles.navigation_toggles}>

                <ThemeSwitch/>
                <button 
                    onClick={ () => {
                        page.setIsExpanded( val => ! val );
                    }} 
                    role="switch"
                >{page.isExpanded ? "Rozbalené menu":"Sbalené menu"}</button>
            </aside>

        </header>
    );

}

const Navigation: React.FC = () => {
    return <Header />;
}

export default Navigation;