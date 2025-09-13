import Image from "next/image";
import styles from "./styles.module.scss";
import Picture from "../../../../public/about/glammer-cleaning/picture.png";

const GlammerCleaning = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.content}>
        <div>
          <Image alt="woman" src={Picture} className={styles.picture} />
        </div>
        <div className={styles.texts}>
          <div className={styles.title}>Gleamer cleaning</div>
          <div className={styles.subtitle}>Interested in joining us?</div>
          <div className={styles.desc}>
            We’re always on the hunt for people who share our mission of giving
            our customers a great day. If you’re looking to build your career,
            achieve your goals, and realize your full potential - come and join
            us.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlammerCleaning;
