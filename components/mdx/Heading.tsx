import { MdxProp } from "./types";

import styles from "./Heading.module.scss"


export const Heading = {
    H1: ( {children}: MdxProp ) => <h1 className={styles.mdxHeading}>{children}</h1>,
    H2: ( {children}: MdxProp ) => <h2>{children}</h2>
}