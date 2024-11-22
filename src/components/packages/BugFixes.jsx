import ceoImage from "../../assets/delroy_company_element.png";
import cat_gif from "../../assets/cat.mp4";
import styles from "./Packages.module.css";

export function BugFixes() {
    return (<>
        <section className={styles.package}>
            <div className={styles.container}>
                <div className={styles.heading_container}>
                    <h2 className={styles.heading}>PACKAGE</h2>
                    <h3 className={styles.subheading} >Bug Fixes and Optimization</h3>
                </div>
                <img src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg" className={styles.package_img} />
                <p className={styles.info}>
                    <br /><br />

                    Need Help Fixing Bugs or Issues on Your Website or Web Application?<br /><br />
                    Our professional web developers have years of experience in performance and maintenance updates. We can fix any issues you might be facing, ensuring your website or application runs smoothly and efficiently.<br /><br />

                    We can help with a wide range of issues on your website or web application, including:<br /><br />

                    <b>Bug Fixes:</b> Resolving any errors or glitches that affect functionality.<br />
                    <b>Performance Optimization:</b> Improving load times and overall site speed.<br />
                    <b>Responsive Design Issues:</b> Ensuring your site looks great and functions well on all devices.<br />
                    <b>Security Vulnerabilities:</b> Identifying and fixing security risks to protect your site and data.<br />
                    <b>Browser Compatibility:</b> Making sure your site works seamlessly across different web browsers.<br />
                    <b>Broken Links and Errors:</b> Fixing 404 errors and ensuring all links are functional.<br />
                    <b>UI/UX Enhancements:</b> Improving user interface and user experience for better engagement.<br />
                    <b>Content Updates:</b> Adding or updating text, images, and other content.<br />
                    <b>Plugin and Extension Issues:</b> Troubleshooting and fixing problems with plugins or extensions.<br />
                    <b>SEO Improvements:</b> Enhancing your site’s search engine optimization for better visibility.<br />
                    If you have any specific issues or concerns, feel free to let us know, and we’ll be happy to assist!<br />
                </p>
                <video autoPlay muted loop className={styles.cat_gif}>
                    <source src={cat_gif} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    </>);
}