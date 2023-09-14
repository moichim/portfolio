import { ProjectMetadata } from "@/data/ProjectsManager";
import Link from "next/link";

import styles from "./ProjectTeaser.module.scss";
import Image from "next/image";

const ProjectTeaser: React.FC<ProjectMetadata> = props => {

    return <article className={styles.container}>

        <Link 
            href={props.path}
            className={styles.link}
        >

            <div className={styles.image}>
                <Image 
                    src={props.image} 
                    alt={props.title}
                    fill
                />
                <div className={styles.bg} style={{backgroundColor: props.color ?? "currentcolor"}}></div>
            </div>
            
            <div className={styles.text}>
                <h2 className={styles.title}>{props.title}</h2>
            </div>
            
        </Link>
    </article>

}

export default ProjectTeaser;