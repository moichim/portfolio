import { PropsWithChildren } from "react";
import styles from "./Interactive.module.scss";

export const Interactive: React.FC<PropsWithChildren> = props => {
    return <div className={styles.container}>
        <div>{props.children ?? "Interaktivní"}</div>
        <div className={styles.arrow}>↓</div>
    </div>
}