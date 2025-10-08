import { useState } from "react";
import styles from "./SkillItem.module.scss";
import clsx from "clsx";
import { useLayoutContext } from "@/context/layout/LayoutContext";
import { Link } from "@madeinhaus/nextjs-page-transition";

type ReferenceType = {
    name: string,
    link: string
}

type FeaturePropType = {
    minor?: true,
    name: string,
    years?: number | string,
    desc?: React.ReactNode,
    referencies?: ReferenceType[]
}

const Feature: React.FC<FeaturePropType> = props => {

    const [expanded, setExpanded] = useState<boolean>(false);

    const layout = useLayoutContext();

    const isExpanded = expanded || layout.isZoomed;

    const classes = clsx([
        styles.company,
        isExpanded ? styles.expanded : undefined
    ]);

    const name = props.minor
        ? <span><i>(okrajově)</i> {props.name}</span>
        : props.name;

    const title = props.desc || props.years || props.referencies
        ? <button
            className={styles.button}
            onClick={() => setExpanded(e => !e)}
        >
            <span>{name}</span>
            {!isExpanded
                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            }

        </button>
        : <div>{name}</div>

    const detail = props.desc || props.years || props.referencies
        ? <div className={styles.detail}>
            <div className={styles.clip}>
                {props.name && <h4>{props.name}</h4>}
                {props.years && <p>{props.years}</p>}
                {props.desc && <p>{props.desc}</p>}
                {props.referencies && <div>
                    Reference: {props.referencies.map(r => <Link href={r.link} target={r.link.includes("http") ? "_blank" : "_self" } key={r.link}>{r.name}</Link>)}
                </div>}
            </div>
        </div>
        : undefined;

    return <div className={classes} style={{ paddingBottom: "0rem" }}>

        {title}
        {detail}

    </div>

}

type SkillItemProps = {
    technology: string,
    features?: FeaturePropType[]
}

const SkillItem: React.FC<SkillItemProps> = props => {

    return <div className={styles.container} role="listitem">

        <h3 className={styles.position}>{props.technology}</h3>

        {props.features && props.features.map(f => <Feature key={f.name} {...f} />)}

    </div>

}

export default SkillItem;