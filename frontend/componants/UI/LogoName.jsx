import Image from "next/image"
import styles from "../../style/NavBar.module.scss"
import Link from "next/link"

const LogoName = (props)=>{
    return  <Link href='/' className={styles.logo}>
                <Image  
                       alt="Mountain Breeze" 
                       width={props.width} 
                       height={props.height} 
                       src="/images/LogoName.png" />
            </Link>
}

export default LogoName;