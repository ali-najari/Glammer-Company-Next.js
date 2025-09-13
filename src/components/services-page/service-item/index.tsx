import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import RegularCleaning from "../../../../public/services/service-item/RegularCleaning.png";
import DeepCleaning from "../../../../public/services/service-item/DeepCleaning.png";
import MoveInOutCleaning from "../../../../public/services/service-item/MoveInOut.png";
import RemovalStorageCleaning from "../../../../public/services/service-item/Removal&Storage.png";
import EcoCleaning from "../../../../public/services/service-item/EcoCleaning.png";
import RenovationCleaning from "../../../../public/services/service-item/RenovationCleaning.png";

interface IServiceItem {
  image: React.ReactNode;
  title: string;
  price: string;
  link: string;
}

const ServiceItem = () => {
  const Services: IServiceItem[] = [
    {
      image: <Image alt="Regular-Cleaning" src={RegularCleaning} />,
      title: "Regular Cleaning",
      price: "$120.00",
      link: "/services/regular-cleaning",
    },
    {
      image: <Image alt="Deep-Cleaning" src={DeepCleaning} />,
      title: "Deep Cleaning",
      price: "$150",
      link: "/services/deep-cleaning",
    },
    {
      image: <Image alt="Move-in / Move-out" src={MoveInOutCleaning} />,
      title: "Move-in / Move-out",
      price: "$200.00",
      link: "/services/move-in-out",
    },
    {
      image: <Image alt="Removal & Storage" src={RemovalStorageCleaning} />,
      title: "Removal & Storage",
      price: "$230.00",
      link: "/services/removal-storage",
    },
    {
      image: <Image alt="Eco-Cleaning" src={EcoCleaning} />,
      title: "Eco Cleaning",
      price: "$90.00",
      link: "/services/eco-cleaning",
    },
    {
      image: <Image alt="Renovation-Cleaning" src={RenovationCleaning} />,
      title: "Renovation Cleaning",
      price: "$160.00",
      link: "/services/renovation-cleaning",
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.items}>
        {Services.map((item, index) => (
          <Link key={index} href={item.link} className={styles.item}>
            <div>{item.image}</div>
            <div className={styles.texts}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.price}>{item.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceItem;
