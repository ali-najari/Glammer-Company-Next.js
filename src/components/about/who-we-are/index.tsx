import Image from "next/image";
import styles from "./styles.module.scss";
import Picture from "../../../../public/about/who-we-are/picture.png";

const WhoWeAre = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.content}>
        <div >
          <Image alt="dad&son" src={Picture} className={styles.picture} />
        </div>
        <div className={styles.texts}>
          <div className={styles.title}>Who We Are</div>
          <div className={styles.subtitle}>
            More time to live, work <br />
            and have game
          </div>
          <div className={styles.desc}>
            Maecenas sapien nisl, eleifend eu bibendum sit amet, pharetra a
            orci. Vivamus euismod vehicula tortor, in sollicitudin dui
            consectetur in. Nam dolor justo, venenatis nec luctus in,
            ullamcorper ac turpis. Donec elementum accumsan placerat. Proin
            facilisis, diam sit amet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
