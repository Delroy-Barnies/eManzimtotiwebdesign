import ceoImage from "../../assets/delroy_company_element.png";
import cat_gif from "../../assets/cat.mp4";
import styles from "./Packages.module.css";

export function CustomWebsiteSolutions() {
    return (<>
        <section className={styles.package}>
            <div className={styles.container}>
                <div className={styles.heading_container}>
                    <h2 className={styles.heading}>PACKAGE</h2>
                    <h3 className={styles.subheading} >Custom Website Solutions</h3>
                </div>
                <div className={styles.package_img} style={{ backgroundImage: "url('https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&h=350')" }}></div>
                <p className={styles.info}>
                    <br /><br />
                    If you're looking for a skilled and experienced website developer who fits your budget, then look no further!<br />
                    We can help you create a stunning and efficient front end for your web application.<br /><br />

                    <b>(WE CAN ADJUST THE PRICE)</b> - price is flexible to your budget and if your unsatisfied with the service you get complete cash back!<br /><br />

                    What do We offer:<br />
                    - <b>Custom React.js Development:</b> Design and build your website based on your specifications and constraints.<br />
                    - <b>Professional and functional websites:</b> Designing you a professional feeling website and turning that design into a fully functional site.<br />
                    - <b>Quick Turnaround:</b> Delivering a quality site in a short amount of time.<br />
                    - <b>Personalized Service:</b> We would love to get to know your business/personal ideas and work with amazing clients like you.<br /><br />

                    Our Skills:<br />
                    Reactjs<br />
                    HTML<br />
                    CSS<br />
                    JavaScript<br />
                    Functional programming<br />
                    Hooks<br />
                    UI/UX Development and implementation<br /><br />

                    We will not provide logo designs and custom images outside of stock.<br />
                    We will accept your own logos and images to be implemented into the website.<br /><br />

                    Please contact us to place your order.

                </p>
                <video autoPlay muted loop className={styles.cat_gif}>
                    <source src={cat_gif} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    </>);
}