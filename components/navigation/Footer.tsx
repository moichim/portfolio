import { Link, PageTransitionPhase, usePageTransitionState } from "@madeinhaus/nextjs-page-transition";
import styles from "./Footer.module.scss";
import clsx from "clsx";

const Footer: React.FC = () => {

    const context = usePageTransitionState();

    const classes = clsx([
        styles.container,
        context.phase === PageTransitionPhase.IDLE
            ? styles.idle
            : styles.off
    ]);

    return <footer className={classes}>

        <div><Link href="/">Jan Jáchim</Link></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>

        <nav className={styles.nav}>
            <ul>
                <li><Link href="/code">Code</Link></li>
                <li><Link href="/interactive">Intermedia</Link></li>
                <li><Link href="/design">Design</Link></li>
                <li><Link href="/projects">All works</Link></li>
            </ul>
        </nav>
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/bio">Bio</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
        <section className={styles.footer}>
            <p>© 2015 - 2023 Jan Jáchim</p>
            <p>Nakódováno v Next.js</p>
            <p><a href="https://github.com/moichim/portfolio" target="_blank">github</a></p>
        </section>
    </footer>

}

export default Footer;