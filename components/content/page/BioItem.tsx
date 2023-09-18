import styles from "./BioItem.module.scss";

type BioItemProps = React.PropsWithChildren & {
    from: number,
    to: number|string,
    position: string,
    companyName?: string,
    companyLink?: string,
}

const BioItem: React.FC<BioItemProps> = props => {

    return <div className={styles.container} role="listitem">

        <small>{ props.from } - { props.to }</small>

        <h3 className={styles.position}>{ props.position }</h3>

        {props.companyName && <div className={styles.company}>{props.companyName}</div> }

        { props.children && <div>
            { props.children }
        </div> }

    </div>

}

export default BioItem;