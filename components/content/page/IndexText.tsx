import { CSSProperties } from "react";
import styles from "./IndexText.module.scss";

type IndexTextProps = React.PropsWithChildren & {
    title?: string,
    ish1?: true,
    style?: CSSProperties,
    id?: string
}

const IndexText: React.FC<IndexTextProps> = props => {

    return <section id={props.id} className={styles.container} style={props.style}>
        
        { (props.title && props.ish1 === true) && 
            <h1 className={styles.heading}>{props.title}</h1> 
        }

        { (props.title && ! props.ish1) && 
            <h2 className={styles.heading}>{props.title}</h2> 
        }

        {props.children && 
            <div className={styles.text}>{props.children}</div> 
        }

    </section>

}

export default IndexText;