import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import burgerMenu from '../../assets/menu_menu.svg';
import companyLogoIcon from '../../assets/company_logo.svg';
import facebookIcon from '../../assets/facebook.svg';
import facebookSidebarIcon from '../../assets/facebook_sidebar.svg';
import whatsappIcon from '../../assets/whatsapp.svg';
import whatsappSidebarIcon from '../../assets/whatsapp_sidebar.svg';
import styles from "./Header.module.css";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sidebar, setSidebar] = useState("100%");
    const [bgFilter, setBgFilter] = useState("none");

    function setSidebarStatus() {
        if (sidebarOpen) {
            setSidebar("100%");
            setSidebarOpen(false);
            setBgFilter("none");
        } else {
            setSidebar("0%");
            setSidebarOpen(true);
            setBgFilter("flex");
        }
    }
    return (<>
        <header className={styles.header}>
            <div className={styles.logo_and_nav_container}>
                <Link smooth to="../" href="" className={styles.logo_div}>
                    <img className={styles.logo} alt="company logo icon" src={companyLogoIcon}></img>
                </Link>
                <nav className={styles.links_nav}>
                    <ul className={styles.links_list}>
                        <li><Link className={styles.link} to="../" >Home</Link></li>
                        <li ><HashLink smooth to="/#about" className={styles.link} >About</HashLink></li>
                        <li ><HashLink smooth to="/#packages" className={styles.link} >Packages</HashLink></li>
                        <li ><HashLink smooth to="/#projects" className={styles.link} >Projects</HashLink></li>
                        <li><Link to="../contact" className={styles.link} >Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.social}>
                <a className={styles.social_link} href="https://www.facebook.com/profile.php?id=61567671659062"><img className={styles.icon} src={facebookIcon}></img></a>
                <a className={styles.social_link} href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B27761919226%26context%3DARBw3nt_BWewOEenF69_gjcuG-dId3U8B1lgRSMM9CVIMu65vjzGt9H5UbW26akrGpC_cpbTrW6tjtHyC-apD6RRcf_9oyQrTVxs6GSgeq_co_dCeCrsIE8ePotECGY_vvi2Rgi5WlfuqkNf9q-EvWVByw%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwZXh0bgNhZW0CMTAAAR0iA-CXHd_cpmvD5RigaNreCAsq0Ue1iSNWANz5ls-Kkv2ZQfjtoguqswc_aem_mU1_TxzHm6YIS1gcyrPmzQ&h=AT2hOSJyQzoyoxCS-wgjLF0PY9pAsqiVrVjRIr9y9vUENcmcm__4Hl7bvbkVIUy4p_4oCOv-q0LBWqxD72b26rBr6EXxasJqFHAcvVpL6oEEhwTAzaXeV2D0VWDaenPF-tvJbw"><img className={styles.icon} src={whatsappIcon}></img></a>
            </div>

            <div className={styles.sidebar} style={{ transform: `translateX(${sidebar})` }}>
                <div>
                    <button className={styles.burger_menu} onClick={setSidebarStatus}><img className={styles.menu} alt="company logo icon" src={burgerMenu} /></button>
                    <a className={styles.burger_menu} href="https://www.facebook.com/profile.php?id=61567671659062" ><img className={styles.fb_sidebar} alt="company logo icon" src={facebookSidebarIcon} /></a>
                    <a className={styles.burger_menu} href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B27761919226%26context%3DARBw3nt_BWewOEenF69_gjcuG-dId3U8B1lgRSMM9CVIMu65vjzGt9H5UbW26akrGpC_cpbTrW6tjtHyC-apD6RRcf_9oyQrTVxs6GSgeq_co_dCeCrsIE8ePotECGY_vvi2Rgi5WlfuqkNf9q-EvWVByw%26source%3DFB_Page%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwZXh0bgNhZW0CMTAAAR0iA-CXHd_cpmvD5RigaNreCAsq0Ue1iSNWANz5ls-Kkv2ZQfjtoguqswc_aem_mU1_TxzHm6YIS1gcyrPmzQ&h=AT2hOSJyQzoyoxCS-wgjLF0PY9pAsqiVrVjRIr9y9vUENcmcm__4Hl7bvbkVIUy4p_4oCOv-q0LBWqxD72b26rBr6EXxasJqFHAcvVpL6oEEhwTAzaXeV2D0VWDaenPF-tvJbw" ><img className={styles.wa_sidebar} alt="company logo icon" src={whatsappSidebarIcon} /></a>
                </div>
                <nav className={styles.sidebar_links_nav}>
                    <Link onClick={setSidebarStatus} className={styles.sidebar_link} to="../" >Home</Link>
                    <HashLink onClick={setSidebarStatus} smooth to="/#about" className={styles.sidebar_link} >About</HashLink>
                    <HashLink onClick={setSidebarStatus} smooth to="/#packages" className={styles.sidebar_link} >Packages</HashLink>
                    <HashLink onClick={setSidebarStatus} smooth to="/#projects" className={styles.sidebar_link} >Projects</HashLink>
                    <Link onClick={setSidebarStatus} to="../contact" className={styles.sidebar_link} >Contact</Link>
                </nav>
            </div>

            <div className={styles.bg_filter} style={{ display: bgFilter }}></div>
        </header>
    </>);
}