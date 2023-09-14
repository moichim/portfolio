import clsx from "clsx"
import styles from "./Partial.module.scss";

type Breakpoint = "sm" | "md" | "lg" | "xl";

export type PartialProps = React.PropsWithChildren & {
    [index in Breakpoint]?: number
} & {
    xs?: number
}

const Partial: React.FC<PartialProps> = ({
    xs = 12,
    ...props
}) => {

    const classes: string[] = [
        styles.container,
        styles[`col-xs-${xs}`]
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