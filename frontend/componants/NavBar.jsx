import MainMenu from "./MainMenu"
import LogoName from "./UI/LogoName"
import BookNow from "./BookNow"
import styles from "../style/NavBar.module.scss"
import {useEffect , useState} from "react"

const NavBar = (props)=>{
    const [show,setShow] = useState(false);
    const animation = show ? styles.enter : styles.leave;

    const handleScroll = event => {
        if( window.scrollY > 64){
            setShow(true);
        }else{
            setShow(false);
        }
      };
      
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return <div className={styles.navbar+" "+animation} onScroll={handleScroll}>
                <MainMenu renderedClass={styles.mainmenu}/>
                <LogoName width={200} height={40}/>
                <BookNow renderedClass={styles.booknow} text="Booking"/>
            </div>;
}

export default NavBar

