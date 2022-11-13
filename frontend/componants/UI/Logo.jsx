import Image from "next/image"


const Logo = (props)=>{
    return <Image alt="Mountain Breeze Logo" width={props.width} height={props.height} src="/images/logo.png" />
}

export default Logo;