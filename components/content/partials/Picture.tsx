import Image from "next/image";
import Partial, { PartialProps } from "./Partial";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "./Picture.module.scss";

type PictureProps = PartialProps & {
    src: StaticImport
};

const Picture: React.FC<PictureProps> = ({
    src, 
    ...props
}) => {

    return <Partial {...props} type="image">

        <div className={styles.container}>

        {/* <Magnifier> */}
            <Image 
                src={src}
                alt=""
                objectFit="cover"
                layout="responsive"
                className={styles.image}
            />
        {/*</Magnifier>*/}

        {props.children && <div className={styles.caption}>{props.children}</div>}

        </div>

    </Partial>

}

export default Picture;