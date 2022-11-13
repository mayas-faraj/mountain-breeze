import styles from "../../style/LandingImage.module.scss";

const TemporaryImage = (props)=>{
    var n = -1;
    const classname = props.fade? styles.temp +" "+styles.fade : styles.temp ;
    return <div className={classname} style={{backgroundImage: `url(${props.src})`}}>
                <h1 className={styles.title}>
                {
                    props.text.split(" ").map((word,i)=>{
                    const letters = word.split("").map((c,j)=>{
                        n+=1;
                        return <span key={n} className="letter" style={{animationDelay: 0.1*n+"s"}}>{c}</span>
                    })
                    return <span key={"word"+i} className={styles.dynamictext}>{letters}</span>
                    })
                }
                </h1>
            </div>;
}

export default TemporaryImage;