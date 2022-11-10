import styles from "../../style/LandingImage.module.scss";
import Logo from "../UI/Logo";

const FadingImage = (props)=>{
    return <div className={styles.main} style={{backgroundImage: `url(${props.src})`}} >
                <Logo width={290} height={131.9}/>
            </div>;
}


export default FadingImage;