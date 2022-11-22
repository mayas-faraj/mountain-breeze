import styles from "../../style/LandingImage.module.scss";
import Logo from "../UI/Logo";
import MainMenu from "../MainMenu";
import BookNow from "../BookNow"
import LanguageSwitcher from "../LanguageSwitcher";

const PerminantImage = (props)=>{
    return <div className={styles.main} style={{backgroundImage: `url(${props.src})`}} >
                <MainMenu renderedClass={styles.mainmenu} color="white" />
                <LanguageSwitcher absolute={true}/>
                <BookNow renderedClass={styles.booknow} text="Booking"/>
                <Logo width={290} height={131.9}/>
            </div>;
}


export default PerminantImage;
