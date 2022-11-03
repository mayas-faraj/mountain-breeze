import Hamburger from "./Hamburger"
import Image from "next/image"
import logo from "../images/logo.png"

function Button(props){
    return <button> {props.text}</button>
}
const Logo = ()=>{
    return <Image alt="Mountain Breeze Logo" src={logo}/>
}


export default function NavBar(){
    return <div > <Hamburger/> <Logo/> <Button text="book now" /></div>
}