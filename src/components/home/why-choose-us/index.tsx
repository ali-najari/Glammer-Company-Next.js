import styles from "./styles.module.scss";

interface IReasons {
  num: string;
  description: string;
}

const WhyChooseUs = () => {
  const Reasons: IReasons[] = [
    {
      num: "01",
      description:
        "Our team is highly trained and experienced, ensuring thorough and professional cleaning every time.",
    },
    {
      num: "02",
      description:
        "We offer tailored cleaning plans to meet your specific needs.",
    },
    {
      num: "03",
      description:
        "We use eco-friendly cleaning products that are safe for your family and pets.",
    },
    {
      num: "04",
      description: "We provide flexible scheduling to fit your busy lifestyle.",
    },
    {
      num: "05",
      description:
        "Our satisfaction guarantee ensures you’ll be happy with our service, or we’ll make it right.",
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.texts}>
        <div className={styles.titleText}>Why choose us?</div>
        <div className={styles.subtitle}>Exceptional service every time</div>
      </div>
      <div className={styles.reasons}>
        {Reasons.map((reason, index) => (
          <div key={index} className={styles.reasonItem}>
            <div className={styles.num}>{reason.num}</div>
            <div className={styles.desc}>{reason.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
