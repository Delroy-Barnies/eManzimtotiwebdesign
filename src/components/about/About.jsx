import ceoImage from "../../assets/delroy_company_element.png";
import girlsImage from "../../assets/girls_about_element.png";
import styles from "./About.module.css";

export function About() {
    return (<>
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <div className={styles.introduction}>
                    <div className={styles.introduction_heading}>
                        <h2 className={styles.heading}>ABOUT US</h2>
                        <h3 className={styles.subheading}>About our company</h3>
                    </div>
                    <div className={styles.introduction_text_and_img}>
                        <p className={styles.introduction_text}>
                            Welcome to eManzimtoti Web Design! If you’re on the hunt for a skilled and experienced React.js
                            developer who fits your budget, look no further. We specialize in crafting stunning and efficient
                            front ends for web applications, tailored to meet your unique needs.
                            <br /><br />
                            We have been established to become one of the leaders in the web design and development industry
                            and offering our users the power to succeed in all their endeavors.
                        </p>
                        <img className={styles.ceo_element} src={ceoImage}></img>
                    </div>
                </div>
                <div className={styles.offer}>
                    <h3 className={styles.subheading}>What we offer</h3>
                    <div className={styles.offers_text_and_img}>
                        <div className={styles.offers}>
                            <p className={styles.offer_desc}>
                                <span className={styles.offer_heading}>Custom React.js Development: </span>
                                We design and build websites based on your specifications and constraints, ensuring a perfect fit for your vision.
                            </p>
                            <p className={styles.offer_desc}>
                                <span className={styles.offer_heading}>Professional and Functional Websites: </span>
                                From concept to completion, we deliver professional-looking websites that are fully functional and user-friendly.
                            </p>
                            <p className={styles.offer_desc}>
                                <span className={styles.offer_heading}>Quick Turnaround: </span>
                                We pride ourselves on delivering high-quality sites in a short amount of time, so you can get your project up and running quickly.
                            </p>
                            <p className={styles.offer_desc}>
                                <span className={styles.offer_heading}>Personalized Service: </span>
                                We take the time to understand your business and personal ideas, working closely with you to create something truly amazing.
                            </p>
                        </div>
                        <img className={styles.girls_element} src={girlsImage}></img>
                    </div>
                </div>
                <div className={styles.services_container}>
                    <h2 className={styles.services_heading}>Our Services</h2>
                    <ul className={styles.services}>
                        <li className={styles.service}>Web Design</li>
                        <li className={styles.service}>Development</li>
                        <li className={styles.service}>Bug Fixes</li>
                    </ul>
                </div>
            </div>
        </section>
    </>);
}