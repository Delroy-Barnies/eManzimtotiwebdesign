import styles from "./Packages_grid.module.css"
import packages from "./Packages.json"
import { uniqueId } from "lodash";
import { Link } from "react-router-dom";

export function Packages_grid() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This makes the scroll smooth
        });
    }
    return (<>
        <section className={styles.packages} id="packages">
            <div className={styles.packages_container}>
                <div className={styles.heading_container}>
                    <h2 className={styles.heading}>AFFORDABLE</h2>
                    <h2 className={styles.subheading}>SOLUTIONS</h2>
                </div>
                <div className={styles.packages_grid}>
                    {packages.map((package_ => {
                        return package_ ? <Link to={package_.url} onclick={scrollToTop()} className={styles.package} key={uniqueId()}>
                            <div className={styles.package_img} style={{ backgroundImage: `url('${package_.img_url}')` }}></div>
                            <div className={styles.package_info}>
                                <h4 className={styles.package_name}>{package_.name}</h4>
                                <ul className={styles.services}>
                                    {package_.services.split(",").map((service) => {
                                        return service ? <li className={styles.service} key={uniqueId()}>
                                            {service}
                                        </li> : null;
                                    })}
                                </ul>
                                <p>See More</p>
                            </div>
                        </Link> : null;
                    }))}
                </div>
            </div>
        </section>
    </>);
}