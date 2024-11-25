import { HashLink } from "react-router-hash-link";
import clickGif from "../../assets/click.gif";
import element from "../../assets/home_page_element.svg";
import video_bg from "../../assets/video_bg_1.mp4";
import styles from "./Home.module.css";

export function Home() {
    return (<>
        <section className={styles.home}>
            <video autoPlay muted loop className={styles.video_bg}>
                <source src={video_bg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img className={styles.element_left} src={element}></img>
            <div className={styles.heading_container}>
                <h1 className={styles.heading}>Digital Sorcery Unleashed</h1>
                <h2 className={styles.subheading}>Transforming Ideas into Stunning, Responsive Websites that  Captivate and Convert</h2>
                <HashLink smooth to="/#about" className={styles.link}>LEARN MORE</HashLink>
                <img className={styles.click} src={clickGif}></img>
            </div>
            <img className={styles.element_right} src={element}></img>
        </section>
    </>);
}