import styles from "./Contact.module.css"
import whatsappIcon from "../../assets/whatsapp.svg"
import emailIcon from "../../assets/email.svg"
import qrcode from '../../assets/eManzimtoti_review_qrcode.svg'
import contact_ from '../../assets/contact_animation.mp4'
import emailjs from "emailjs-com"
import { useRef } from "react"

export default function Contact() {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_rg9e7t5", "template_6met98o", form.current, "SBCScMYejUDT9wGSF").then((result) => {
            console.log(result.text);
        }), (error) => {
            console.log(error.text);
        }
    }

    return (<>
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.headings_container}>
                        <h2 className={styles.heading}>CONTACT US</h2>
                        <h3 className={styles.subheading}>We would love to get to know your business/personal ideas and work with amazing clients like you</h3>
                    </div>
                    <div className={styles.email_container}>
                        <img src={emailIcon} className={styles.email_icon} />
                        <div className={styles.email_heading_container}>
                            <h4 className={styles.email_heading}>EMAIL</h4>
                            <p className={styles.email_}>emanzimtotiwebdesign@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.contact_container}>
                        <img src={whatsappIcon} className={styles.contact_icon} />
                        <div className={styles.contact_heading_container}>
                            <h4 className={styles.contact_heading}>CONTACT</h4>
                            <p className={styles.contact_num}>+27 72 320 4967</p>
                        </div>
                    </div>
                    <div className={styles.review_container}>
                        <h4 className={styles.review_heading}>LEAVE A REVIEW (tap/scan)</h4>
                        <a href="https://g.page/r/CWMGJ2bTIi5KEAE/review"><img src={qrcode} className={styles.review_icon} /></a>
                    </div>
                </div>
                <div className={styles.fields}>
                    <video autoPlay muted loop className={styles.review_gif}>
                        <source src={contact_} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h4 className={styles.email_form_heading}>LEAVE US A NOTE</h4>
                    <form ref={form} onSubmit={sendEmail} className={styles.form}>
                        <div className={styles.name_and_email}>
                            <input className={styles.name} placeholder="Your Name" type="text" name="user_name" required />
                            <input className={styles.email} placeholder="Email" type="email" name="user_email" required />
                        </div>
                        <textarea className={styles.message} placeholder="Your Message" name="message" maxLength="500" required />
                        <button type="submit" className={styles.submit} >Send</button>
                    </form>
                </div>
            </div>
        </section>
    </>);
}