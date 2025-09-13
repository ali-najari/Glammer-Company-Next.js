import Image from "next/image";
import styles from "./styles.module.scss";
import firstImage from "../../../public/landingPage/first-image.png";
import TransparentPrice from "./transparent-price";
import WorkInAction from "./work-in-action";
import WhyChooseUs from "./why-choose-us";
import GlammerCleaning from "./glammer-cleaning";
import OurPriority from "./our-priority";

const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          alt="first-image"
          src={firstImage}
          fill
          className={styles.firstImage}
        />
      </div>

      <OurPriority />
      <GlammerCleaning />
      <WhyChooseUs />
      <TransparentPrice />
      <WorkInAction />
    </div>
  );
};

export default Home;
