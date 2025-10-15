import { PropsWithChildren } from "react";

import styles from "./Content.module.scss"
import clsx from "clsx";

const Content: React.FC<PropsWithChildren<{
    wrap?: boolean
}>> = ({ wrap = true, children }) => {

    const classes = clsx([
        styles.wrapper,
        wrap ? styles.wrap : styles.nowrap
    ]);

    return <div className={styles.container}>
        <div className={classes}>
            {children}
        </div>
    </div>

}

export default Content;