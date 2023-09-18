import { ProjectMetadata } from "@/data/ProjectsManager";
import ProjectTeaser from "./ProjectTeaser";
import styles from "./ProjectGrid.module.scss"

type ProjectGridProps = {
    projects: ProjectMetadata[]
}

const ProjectGrid: React.FC< ProjectGridProps > = props => {

    return <div className={styles.container}>

        {props.projects.map( project => <ProjectTeaser {...project}  key={project.path}/> )}

    </div>

}

export default ProjectGrid;