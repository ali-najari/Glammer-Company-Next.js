import Image from "next/image";
import styles from "./styles.module.scss"
import image1 from "../../../../public/landingPage/action-in-work/image.png"
import image2 from "../../../../public/landingPage/action-in-work/image2.png"
import image3 from "../../../../public/landingPage/action-in-work/image3.png"
import image4 from "../../../../public/landingPage/action-in-work/image4.png"
import image5 from "../../../../public/landingPage/action-in-work/image5.png"


const WorkaInAction = ()=>{
return(
    <div className={styles.mainWrapper}>
        <div className={styles.texts}>
            <div className={styles.titleText}>Our work in action</div>
            <div className={styles.subtitle}>See the difference we make</div>
        </div>
        <div className={styles.pictures}>
            <Image alt="image 1" src={image1} className={styles.buttomPictures}/>
            <Image alt="image 1" src={image2} className={styles.topPictures}/>
            <Image alt="image 1" src={image3} className={styles.buttomPictures}/>
            <Image alt="image 1" src={image4} className={styles.topPictures}/>
            <Image alt="image 1" src={image5} className={styles.buttomPictures}/>
        </div>
    </div>
)
}

export default WorkaInAction;