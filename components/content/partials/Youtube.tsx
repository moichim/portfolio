import Image from "next/image";
import React from "react";
import Partial, { PartialProps } from "./Partial";
import styles from "./Youtube.module.scss";

type YoutubeProps = PartialProps & {
    id: string,
    label?: string
}

const Youtube: React.FC<YoutubeProps> = ({
    id,
    ...props
}) => {

    const [clicked, setClicked] = React.useState<boolean>(false);

    return <Partial {...props} type="video">

        <div className={styles.container}>

            <div className={styles.content}>
                {!clicked

                    ? <button
                        onClick={() => setClicked(true)}
                        className={styles.placeholder}
                    >
                        <Image
                            src={`https://img.youtube.com/vi/${id}/sddefault.jpg`}
                            layout="fill"
                            objectFit="cover"
                            alt="yt thumbnail"
                            priority
                        />
                        <div className={styles.overlay}>
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </button>
                    : 
                        <iframe
                            frameBorder="1"
                            allowFullScreen
                            src={
                                clicked
                                    ? `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`
                                    : ""
                            }
                            title="youtube video"
                        />

                }

            </div>

        </div>

    </Partial>

}

export default Youtube;