import ceoImage from "../../assets/delroy_company_element.png";
import cat_gif from "../../assets/cat.mp4";
import styles from "./Packages.module.css";
import PackageImage from "./PackageImage";

export function WebsiteDesignAndBuild() {
    return (<>
        <section className={styles.package}>
            <div className={styles.container}>
                <div className={styles.heading_container}>
                    <h2 className={styles.heading}>PACKAGE</h2>
                    <h3 className={styles.subheading} >Website Design and Build</h3>
                </div>
                <PackageImage src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&h=350" />
                <p className={styles.info}>
                    <br /><br />

                    Businesses which have an online presence increase their discoverability by more than 186% according to google.<br /><br />

                    Having an online presence:<br />
                    - <b>Save's</b> money<br />
                    - <b>Markets</b> your business 24/7<br />
                    - <b>Earns</b> customer's trust<br />
                    - <b>Be seen</b> as a legitimate business<br /><br />

                    How do you increase your online presence?<br />
                    By investing in a professional website to display your business/interests.<br /><br />

                    What do we offer:<br />
                    - We are offering to design and build your website based on your specifications and constraints.<br />
                    - Designing you a professional feeling website and turning that design into a fully functional site.<br />
                    - Delivering a quality site in a short amount of time.<br />
                    - If you're unsatisfied with the product it won't cost you a dime.<br />
                    - We would love to get to know your business/personal ideas and work with amazing clients like you.<br /><br />

                    We will provide you with:<br />
                    - Website designs that are professional and dynamic.<br />
                    - Performance and maintenance updates.<br />
                    - Generated images.<br />
                    - Built with reactjs.<br />
                    - Delivered in less than 7 days.<br /><br />

                    We will not provide logo designs and custom images outside of stock.<br /><br />

                    We will accept your own logos and images to be implemented into the website.<br />
                    <b>(WE CAN ADJUST THE PRICE).</b><br /><br />

                    If you have any questions, feel free to contact us before ordering and we can discuss.
                </p>
                <video autoPlay muted loop className={styles.cat_gif}>
                    <source src={cat_gif} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    </>);
}