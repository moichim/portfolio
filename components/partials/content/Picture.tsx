import Image from "next/image";
import Partial, { PartialProps } from "./Partial";
import Magnifier from "./Magnifier";

import styles from "./Picture.module.scss"

type PictureProps = PartialProps & {
    src: string
};

const Picture: React.FC<PictureProps> = ({
    src, 
    ...props
}) => {

    return <Partial {...props}>

        <div className={styles.container}>

        <Magnifier>
            <Image 
                src={src}
                alt="Zlo"
                width={1200}
                height={700}
                objectFit="cover"
                className={styles.image}
            />
        </Magnifier>

        {props.children && <div className={styles.caption}>{props.children}</div>}

        </div>

    </Partial>

}

export default Picture;