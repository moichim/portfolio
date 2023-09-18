import styles from "./Footer.module.scss";

const Footer: React.FC = () => {

    

    return <footer className={styles.container}>
        <p>© 2015 - 2023 Jan Jáchim</p>
        <p>Nakódováno v Next.js</p>
        <p><a href="https://github.com/moichim/portfolio" target="_blank">github</a></p>
    </footer>

}

export default Footer;