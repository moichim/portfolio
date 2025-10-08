import { Link } from "@madeinhaus/nextjs-page-transition"
import Content from "../Content"
import styles from "./Thumbnail.module.scss"
import clsx from "clsx"
import Partial from "./Partial"
import Text from "./Text"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

type ThumbProps = {
    href: string,
    blank?: boolean,
    title: string,
    subtitle?: React.ReactNode,
    content: React.ReactNode,
    text: React.ReactNode,
    badge?: React.ReactNode,
    ltr: boolean,
    color?: string,
    bg?: string,
    bgHover?: string
}

export const Thumbnail: React.FC<ThumbProps> = (props) => {

    const [bg, setBg] = useState<string>(props.bg || "transparent");

    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const bgOn = props.bgHover ?? "var(--moichim-primary)";

        const bgOff = props.bg ?? "var(--moichim-primary)";


        container.current?.addEventListener("mouseenter", () => {
            setBg(bgOn);
        });

        container.current?.addEventListener("mouseleave", () => {
            setBg(bgOff);
        });

    }, [container.current, props]);

    const classes = clsx([
        styles.container,
    ]);

    const content = <div className={styles.content}>{props.content}</div>;
    const text = <Link href={props.href} className={styles.text} style={{ color: props.color }}>
        <div className={styles.badge_container}>
            {props.badge && <small className={styles.badge}>{props.badge}
            </small>}
            <h2 className={styles.title}>{props.title}</h2>
            {props.subtitle && <p className={styles.subtitle}>{props.subtitle}</p>}
        </div>
        <div className={styles.text_inner}>
            {props.text}
            <p className={styles.link}>Více informací <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={styles.arrow}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </span></p>
        </div>
    </Link>;



    return <div 
        className={classes} 
        style={{ backgroundColor: bg }} 
        ref={container}
    >
        {props.ltr === true
            ? <>
                {content}{text}
            </>
            : <>
                {text}{content}
            </>}

    </div>
}