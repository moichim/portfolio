import Image from "next/image";
import Partial, { PartialProps } from "./Partial";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "./Picture.module.scss";
import { useState } from "react";
import clsx from "clsx";
import Caption from "./Caption";

type PictureProps = PartialProps & {
    src: StaticImport;
    alt?: string;
};

const Picture: React.FC<PictureProps> = ({
    src,
    alt = "",
    ...props
}) => {

    const [ loaded, setLoaded ] = useState<boolean>( false );

    const classes = clsx([
        styles.container,
        loaded ? styles.loaded : styles.loading
    ]);

    return <Partial {...props} type="image">

        <div className={classes}>

        {/* <Magnifier> */}
            <Image 
                src={src}
                alt={alt}
                objectFit="cover"
                layout="responsive"
                className={styles.image}
                onLoad={() => setLoaded( true )}
            />
        {/*</Magnifier>*/}

        {props.children && <Caption>{props.children}</Caption>}

        </div>

    </Partial>

}

export default Picture;