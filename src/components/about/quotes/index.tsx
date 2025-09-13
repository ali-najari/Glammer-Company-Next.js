import styles from "./styles.module.scss";
import Image1 from "../../../../public/about/quotes/image1.png";
import Image2 from "../../../../public/about/quotes/image2.png";
import Image3 from "../../../../public/about/quotes/image3.png";
import Image4 from "../../../../public/about/quotes/image4.png";
import Image from "next/image";

interface IPicture {
  title: string;
  image: React.ReactNode;
  subtitle: string;
}

const Quotes = () => {
  const Pictures: IPicture[] = [
    {
      title: "Weekly lawn cutting",
      subtitle: "Weekly lawn cutting",
      image: <Image src={Image1} alt="Weekly lawn cutting" className={styles.image}/>,
    },
    {
      title: "Polish and Shine Kitchen",
      subtitle: "Weekly lawn cutting",
      image: <Image src={Image2} alt="Polish and Shine Kitchen" className={styles.image}/>,
    },
    {
      title: "Elevate Your Bathroom",
      subtitle: "Weekly lawn cutting",
      image: <Image src={Image3} alt="Elevate Your Bathroom" className={styles.image}/>,
    },
    {
      title: "Deep Clean Carpets and Rugs",
      subtitle: "Weekly lawn cutting",
      image: <Image src={Image4} alt="Deep Clean Carpets and Rugs" className={styles.image}/>,
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.texts}>
        <div className={styles.title}>Quotes</div>
        <div className={styles.subtitle}>Here’s what our customer say</div>
        <div className={styles.desc}>
          The hidden perks of maintaining a pristine home environment
        </div>
      </div>
      <div className={styles.pictures}>
        {Pictures.map((picture,index)=>(
            <div key={index} className={styles.picture}>
                <div>{picture.image}</div>
                <div className={styles.pictureTexts}>
                    <div className={styles.pictureTitle}>{picture.title}</div>
                    <div className={styles.pictureSubtitle}>{picture.subtitle}</div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
