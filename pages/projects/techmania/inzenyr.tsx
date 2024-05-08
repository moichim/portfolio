import Content from "@/components/content/Content";
import Partial from "@/components/content/partials/Partial";
import Picture from "@/components/content/partials/Picture";
import ProjectLayout from "@/components/layout/projects/ProjectLayout";
import { useScheme } from "@/context/scheme/SchemeContextProvider";
import ProjectsManager, { Metadata, ProjectMetadata } from "@/data/ProjectsManager";
import { forwardRef } from "react";

import fotostena from "@/public/inzenyr/fotostena.jpg";
import fulldome from "@/public/inzenyr/fulldome.png";
import motive from "@/public/inzenyr/motive.jpg";
import stena from "@/public/inzenyr/stena.jpg";
import scena from "@/public/inzenyr/scena.png";
import ProjectGrid from "@/components/listing/ProjectGrid";
import styles from "../../../components/navigation/Footer.module.scss";

type IndexPageProps = {
	projects: ProjectMetadata[],
};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;


export const metadata: Metadata = {
	"title": "Grafika expozice Inženýr",
	"description": "Printové a online kampaně pro vzdělávací program pro děti",
	"authors": [{
		"name": "Jan Jáchim"
	}],
	"image": "/inzenyr/fotostena.jpg",
	"color": "#0f1d1f",
	"year": 2019,
	"month": 7,
	"day": 1,
	"keywords": [ "design", "featured", "techmania"],
	"public": true
}

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {
  useScheme([{ bg: "#e3f7fc" }, { bg: "#0b1b1f" }]);

  return (
	<>
    <ProjectLayout ref={ref} meta={metadata}>
      <Content>
        <Partial lg={6}>
          <Picture src={scena} />
          <Picture src={fulldome} />
          <Picture lg={6} src={motive} />
        </Partial>
        <Partial lg={6}>
          <Picture src={fotostena} />
          <Picture src={stena} />
        </Partial>
      </Content>
	  <div className={styles.container}>
		<div style={{paddingTop: "5rem"}}>Další projekty pro Techmania Science Center</div>
	  	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
		<div style={{height: "1rem"}}></div>
	  	<ProjectGrid projects={props.projects}/>
	  </div>
    </ProjectLayout>
	
	</>
  );
}

export async function getStaticProps() {

    return {
        props: {
            projects: ProjectsManager.getProjects( {keyword: "techmania" } )
        }
    }

}

export default forwardRef(IndexPage);
