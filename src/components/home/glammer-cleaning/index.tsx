import Image from "next/image";
import styles from "./styles.module.scss";
import treeIcon from "../../../../public/landingPage/glammer-cleaning/treeIcon.png";
import ottoIcon from "../../../../public/landingPage/glammer-cleaning/ottoIcon.png";
import spoutIcon from "../../../../public/landingPage/glammer-cleaning/spoutIcon.png";
import curtainIcon from "../../../../public/landingPage/glammer-cleaning/curtainIcon.png";
import image1 from "../../../../public/landingPage/glammer-cleaning/image1.png";
import image2 from "../../../../public/landingPage/glammer-cleaning/image2.png";
import Link from "next/link";

interface CleaningOption {
  icon: React.ReactNode;
  text: string;
}

const GlammerCleaning = () => {
  const cleaningOptions: CleaningOption[] = [
    {
      icon: <Image alt="tree icon" src={treeIcon} />,
      text: "Cleaning for allergy relief",
    },
    {
      icon: <Image alt="curtain icon" src={curtainIcon} />,
      text: "Residential deep cleaning",
    },
    {
      icon: <Image alt="otto icon" src={ottoIcon} />,
      text: "Seasonal cleaning",
    },
    {
      icon: <Image alt="spout icon" src={spoutIcon} />,
      text: "Customized cleaning plans",
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.texts}>
        <div className={styles.titleText}>Gleamer cleaning</div>
        <div className={styles.subtitle}>
          Let us make your home
          <br />
          shine & spotless
        </div>
        <div className={styles.description}>
          The desks are polished and dust-free, the carpets are
          <br />
          fresh and spotless.
        </div>
        <div className={styles.cleaning}>
          {cleaningOptions.map((option, index) => (
            <div key={index} className={styles.cleaningOption}>
              {option.icon}
              <span className={styles.cleaningText}>{option.text}</span>
            </div>
          ))}
        </div>
        <Link href={"/services"}>
          <button>Services</button>
        </Link>
      </div>
      <div className={styles.pictures}>
        <Image alt="image 2" src={image2} className={styles.secondImage} />
        <Image alt="image 1" src={image1} className={styles.firstImage} />
      </div>
    </div>
  );
};

export default GlammerCleaning;
