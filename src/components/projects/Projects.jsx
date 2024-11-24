import styles from "./Projects.module.css"
import projects from "./Projects.json"
import { uniqueId } from "lodash";
import arrow from "../../assets/arrow.svg"

export function Projects() {
    return (<>
        <section className={styles.projects} id="projects">
            <div className={styles.projects_container}>
                <div className={styles.heading_container}>
                    <h2 className={styles.heading}>PROJECTS</h2>
                    <h2 className={styles.subheading}>BUILT BY US</h2>
                </div>
                <div className={styles.projects_grid}>
                    {projects.map((project => {
                        return project ? <div className={styles.project} key={uniqueId()}>
                            <div className={styles.project_img} style={{ backgroundImage: `url('${project.img_url}')` }}></div>
                            <h4 className={styles.project_name}>{project.name}</h4>
                            <ul className={styles.services}>
                                {project.services.split(",").map((service) => {
                                    return service ? <li className={styles.service} key={uniqueId()}>
                                        {service}
                                    </li> : null;
                                })}
                            </ul>
                            <a href={project.website_url} className={styles.link}><img className={styles.arrow} src={arrow} /></a>
                        </div> : null;
                    }))}
                </div>
            </div>
        </section>
    </>);
}