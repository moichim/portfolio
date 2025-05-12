import { Link } from "@madeinhaus/nextjs-page-transition"
import Content from "../Content"
import styles from "./Thumbnail.module.scss"
import clsx from "clsx"
import Partial from "./Partial"
import Text from "./Text"

type ThumbProps = {
    href: string,
    blank?: boolean,
    title: string,
    content: React.ReactNode,
    text: React.ReactNode,
    badge?: React.ReactNode,
    ltr: boolean,
    color?: string,
    bg?: string
}

export const Thumbnail: React.FC<ThumbProps> = (props) => {

    const classes = clsx([
        styles.container,
    ]);

    const content = <div className={styles.content}>{props.content}</div>;
    const text = <Link href={props.href} className={styles.text} style={{  color: props.color }}>
        <div className={styles.badge_container}>
            {props.badge && <button className={styles.badge}>{props.badge}
            </button>}
            <h2 className={styles.title}>{props.title}</h2>
        </div>
        <div className={styles.text_inner}>
            {props.text}
            <p>↓</p>
            <p className={styles.link}>Více informací</p>
        </div>
    </Link>;



    return <div className={classes} style={{backgroundColor: props.bg,}}>
        {props.ltr === true
            ? <>
                {content}{text}
            </>
            : <>
                {text}{content}
            </>}

    </div>
}