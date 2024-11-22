import styles from "./Footer.module.css"
import element from "../../assets/element_block.svg"
import copyrightIcon from "../../assets/copyright.svg"
import emailIcon from "../../assets/email.svg"
import companyLogoIcon from '../../assets/company_logo.svg';
import { Link } from "react-router-dom";

export default function Footer() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This makes the scroll smooth
        });
    }
    return (<>
        <section className={styles.footer}>
            <img className={styles.element_left} src={element}></img>
            <div className={styles.content}>
                <div className={styles.logo_div}>
                    <Link to="../" onClick={scrollToTop()}><img className={styles.logo} alt="company logo icon" src={companyLogoIcon}></img></Link>
                    <p className={styles.text}>Transforming Ideas into Stunning, Responsive Websites that Captivate and Convert</p>
                </div>
                <div className={styles.links}>
                    <h3 className={styles.links_heading}>Get In Touch</h3>
                    <a href="mailto:emanzimtotiwebdesign@gmail.com" className={styles.link}>Email Us</a>
                    <a href="https://www.facebook.com/profile.php?id=61567671659062" className={styles.link}>Follow Us</a>
                    <Link to="../contact" onClick={scrollToTop()} className={styles.link}>Contact Us</Link>
                </div>
                <div className={styles.copyright_container}>
                    <img className={styles.copyright} src={copyrightIcon}></img>
                    <p className={styles.copyright_text}>eManzimtotiwebdesign 2024</p>
                </div>
            </div>
            <img className={styles.element_right_bottom} src={element}></img>
        </section>
    </>);
}