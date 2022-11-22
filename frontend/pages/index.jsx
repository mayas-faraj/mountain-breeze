import HEAD  from "next/head"
import LandingImage from "../componants/LandingImage/LandingImage";
export default function HomePage(){
    const args={
        Text: "Moments with Nature",
        PermSrc : "/images/PermImage.jpg",
        TempSrc: "/images/TempImage.jpg",
        Delay : 5,
        Fading : 2
    };
    return <LandingImage {...args} />;
}
