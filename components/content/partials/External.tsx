import { PropsWithChildren } from "react";
import Partial, { PartialProps } from "./Partial";
import { Link } from "@madeinhaus/nextjs-page-transition";
import styles from "./External.module.scss";
import Caption from "./Caption";


type ExternalProps = {
    title: string,
    url: string,
    description?: React.ReactNode
} & PartialProps

const External: React.FC<ExternalProps> = props => {
    return <Partial {...props} type="external">
        <Link href={props.url} className={styles.link} target={ props.url.includes( "http" ) ? "_blank" : "_self" }>

            <div className={styles.container}>

            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>

            </div>

            <div className={styles.content}>

                <h4>{props.title}</h4>
                <div>{props.description}</div>

            </div>

            <div className={styles.icon}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>


            </div>

            </div>

        </Link>

        {props.children && <Caption>{props.children}</Caption>}
    </Partial>;
}

export default External;