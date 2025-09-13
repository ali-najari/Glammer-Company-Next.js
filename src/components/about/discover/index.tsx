import Image from "next/image";
import styles from "./styles.module.scss";
import BackGroundImage from "../../../../public/about/discover/Frame 1618873155.png";

interface ICards {
    num:string;
    name: string;
}

const Discover = () => {

    const Cards : ICards[] = [
        {
            num : "17K+",
            name: "Customers Served"
        },
                {
            num : "700+",
            name: "Staff Strength"
        },
                {
            num : "5.0",
            name: "Sessions Completed"
        },
    ] 

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.picture}>
        <Image
          src={BackGroundImage}
          alt="BackGrounImage"
          className={styles.backGroundImage}
        />
      </div>
      <div className={styles.impact}>
        <div className={styles.texts}>
            <div className={styles.title}>Discover</div>
            <div className={styles.subtitle}>Our impact</div>
            <div className={styles.desc}>Unlock the power of our versatile pricing plans designed to meet your every need.</div>
        </div>
        <div className={styles.cards}>
            {Cards.map((card,index)=>(
                <div key={index} className={styles.card}>
                    <div className={styles.cardNum}>{card.num}</div>
                    <div className={styles.cardName}>{card.name}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
