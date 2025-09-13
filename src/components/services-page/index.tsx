import ServiceItem from "./service-item";
import styles from "./styles.module.scss";

const Services = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.firstContent}>
        <div className={styles.texts}>
          <div className={styles.leftSide}>
            <div className={styles.title}>Gleamer services</div>
            <div className={styles.subtitle}>
              Services – Sparkling Clean <br /> Every Time{" "}
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.desc}>
              Discover our full range of residential and commercial cleaning{" "}
              <br />
              services. From deep cleaning to routine maintenance, our trusted{" "}
              <br />
              team ensures your space is spotless and sanitized.
            </div>
          </div>
        </div>
      </div>
      <ServiceItem/>
    </div>
  );
};

export default Services;
