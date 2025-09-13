"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import Image1 from "../../../../public/landingPage/our-priority/image1.png";
import Image2 from "../../../../public/landingPage/our-priority/image2.png";
import Image3 from "../../../../public/landingPage/our-priority/image3.png";
import Image4 from "../../../../public/landingPage/our-priority/image4.png";
import flashIcon from "../../../../public/landingPage/our-priority/flashIcon.png";
interface IPicture {
  num: string;
  title: string;
  image: React.ReactNode;
  flashIcon: React.ReactNode;
  link: string;
}

const OurPriority = () => {
  const Pictures: IPicture[] = [
    {
      image: <Image alt="image 1" src={Image1} className={styles.image} />,
      num: "01.",
      title: "Regular Cleaning",
      flashIcon: <Image src={flashIcon} alt="flash-icon" />,
      link: "/services/regular-cleaning",
    },
    {
      image: <Image alt="image 2" src={Image2} className={styles.image} />,
      num: "02.",
      title: "Deep Cleaning",
      flashIcon: <Image src={flashIcon} alt="flash-icon" />,
      link: "/services/deep-cleaning",
    },
    {
      image: <Image alt="image 3" src={Image3} className={styles.image} />,
      num: "03.",
      title: "Move-in / Move-out",
      flashIcon: <Image src={flashIcon} alt="flash-icon" />,
      link: "/services/move-in-out",
    },
    {
      image: <Image alt="image 4" src={Image4} className={styles.image} />,
      num: "04.",
      title: "Removal & Storage",
      flashIcon: <Image src={flashIcon} alt="flash-icon" />,
      link: "/services/removal-storage",
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.texts}>
        <div className={styles.leftTexts}>
          <div className={styles.title}>Your home, our priority</div>
          <div className={styles.subtitle}>
            Our Professional
            <br />
            Cleaning Services
          </div>
        </div>
        <div className={styles.rightTexts}>
          <div className={styles.description}>
            Explore our efficient <b>cleaning services</b> designed to
            <br /> maintain a neat and tidy home environment.
          </div>
          <div className={styles.allServicesLink}>
            <Link href={"/services"}>View all services</Link>
          </div>
        </div>
      </div>
      <div className={styles.pictures}>
        {Pictures.map((picture, index) => (
          <div key={index} className={styles.pictureItem}>
            <div>{picture.image}</div>
            <div className={styles.label}>
              <span className={styles.labelNum}>{picture.num}</span>
              <span className={styles.labelTitle}>{picture.title}</span>
              <Link href={picture.link}>
                <button className={styles.flashIcon}>
                  {picture.flashIcon}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPriority;
