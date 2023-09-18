import { PropsWithChildren } from "react";

import styles from "./Content.module.scss"

const Content: React.FC<PropsWithChildren> = props => {

    return <div className={styles.container}>
        <div className={styles.wrapper}>
        {props.children}
        </div>
    </div>

}

export default Content;