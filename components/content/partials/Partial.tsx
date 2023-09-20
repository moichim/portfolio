import clsx from "clsx"
import styles from "./Partial.module.scss";
import { PropsWithChildren } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl";

export type PartialProps = React.PropsWithChildren & {
    [index in Breakpoint]?: number
} & {
    xs?: number,
    type?: "image"|"video"|"text"|"audio"|"bare"|"external"
}

const Element: React.FC<PropsWithChildren & {
    className?: string,
    type: "image"|"video"|"text"|"audio"|"bare"|"external"
}> = props => {
    if ( props.type === "bare" || props.type === "text" ) {
        return <div className={props.className}>{props.children}</div>
    }

    return <figure className={props.className}>{props.children}</figure>
}

const Partial: React.FC<PartialProps> = ({
    xs = 12,
    type = "bare",
    ...props
}) => {

    const classes: string[] = [
        styles.container,
        styles[type],
        styles[`col-xs-${xs}` ]
    ];

    ( ["sm","md","lg","xl"] as Breakpoint[] ).forEach( (bp) => {
        if ( bp in props ) {
            classes.push( styles[`col-${bp}-${props[bp]}`] );
        }
    } );

    return <div className={clsx( classes )}>
        <Element type={type} className={styles.wrapper}>
            {props.children}
        </Element>
    </div>
}

export default Partial;