import { ProjectMetadata } from "@/data/ProjectsManager";

import styles from "./ProjectTeaser.module.scss";
import Image from "next/image";
import { Link } from "@madeinhaus/nextjs-page-transition";

const ProjectTeaser: React.FC<ProjectMetadata> = props => {

    return <article className={styles.container} style={{backgroundColor: props.color ?? "currentcolor"}}>

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