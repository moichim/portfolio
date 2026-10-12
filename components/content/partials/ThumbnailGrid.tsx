import { PropsWithChildren } from "react"
import styles from "./ThumbnailGrid.module.scss"

const ThumbnailGrid: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}

export default ThumbnailGrid
