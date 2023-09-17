import clsx from "clsx"
import styles from "./Partial.module.scss";

type Breakpoint = "sm" | "md" | "lg" | "xl";

export type PartialProps = React.PropsWithChildren & {
    [index in Breakpoint]?: number
} & {
    xs?: number,
    type?: "image"|"video"|"text"|"audio"|"bare"
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
        <div className={styles.wrapper}>
            {props.children}
        </div>
    </div>
}

export default Partial;