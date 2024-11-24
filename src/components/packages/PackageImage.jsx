import styles from "./Packages.module.css";
import { useState, useEffect } from "react";

const PackageImage = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = props.src;
        img.onload = () => {
            setLoading(false);
        };
    }, []);

    if (loading) {
        return (<>Image is loading...</>)
    }

    return (
        <img src={props.src} className={styles.package_img} />
    );
};

export default PackageImage;
