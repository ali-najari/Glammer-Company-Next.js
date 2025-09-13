import Discover from "./discover";
import GlammerCleaning from "./glammer-cleaning";
import Quotes from "./quotes";
import Companies from "./some-company";
import styles from "./styles.module.scss";
import WhoWeAre from "./who-we-are";

const About = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.firstContent}>
        <div className={styles.texts}>
          <div className={styles.leftSide}>
            <div className={styles.title}>Free Estimate</div>
            <div className={styles.subtitle}>
              Making automation <br /> accessible to everyone
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.desc}>
              We’ll create high-quality linkable content and build at least 40
              high-authority <br /> links to each asset, paving the way for you
              to grow your ranking, improve brand.
            </div>
          </div>
        </div>
      </div>
      <WhoWeAre />
      <Companies/>
      <Discover/>
      <Quotes/>
      <GlammerCleaning/>
    </div>
  );
};

export default About;
