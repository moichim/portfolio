import { PropsWithChildren } from "react";
import styles from "./Caption.module.scss";

const Caption: React.FC<PropsWithChildren> = props => {

    return <figcaption className={styles.container}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
        {props.children}
    </figcaption>

}

export default Caption;