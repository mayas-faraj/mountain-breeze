import { useReducer, useEffect } from "react";
import { AnimationReducer , States}  from "./AnimationStates";
import TemporaryImage from "./TemporaryImage";
import PerminantImage from "./PerminantImage";
import FadingImage from "./FadingImage";


const LandingImage = (props)=>{
    const initialState = {load: true , fade: false , remove: false};
    const [state, dispatch] = useReducer(AnimationReducer, initialState);
    useEffect(()=>{
        let loadingtimer = setTimeout(() =>{ dispatch({type: States.Fading}) }, props.Delay * 1000);
        let fadingtimer = setTimeout(()=>{ dispatch({type: States.Removing})} , (props.Fading+props.Delay) * 1000 )
        return () => {
            clearTimeout(loadingtimer);
            clearTimeout(fadingtimer);
        };
    },[]);
    if(state.load){
        return <><TemporaryImage text={props.Text}  fade={false} src={props.TempSrc}/></>;
    }
    if( state.fade ){
        return <><TemporaryImage text={props.Text} src={props.TempSrc} fade={true}/><FadingImage src={props.PermSrc} /> </>;
    }
    if( state.remove){
        return <><PerminantImage src={props.PermSrc} /></>;
    }

}


export default LandingImage;