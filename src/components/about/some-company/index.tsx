import Image from "next/image";
import styles from "./styles.module.scss";
import Fierce from "../../../../public/about/companies/fierce.png";
import Marriott from "../../../../public/about/companies/marriott.png";
import TupperWare from "../../../../public/about/companies/tupperware.png";
import RayBan from "../../../../public/about/companies/rayban.png";
import Tunein from "../../../../public/about/companies/tunein.png";

interface ICompanyLogo {
  icon: React.ReactNode;
}

const Companies = () => {
  const Logos: ICompanyLogo[] = [
    {
      icon: <Image alt="Fierce" src={Fierce} className={styles.logoIcon} />,
    },
    {
      icon: <Image alt="Marriott" src={Marriott} className={styles.logoIcon} />,
    },
    {
      icon: <Image alt="TupperWare" src={TupperWare} className={styles.logoIcon} />,
    },
    {
      icon: <Image alt="RayBan" src={RayBan} className={styles.logoIcon} />,
    },
    {
      icon: <Image alt="Tunein" src={Tunein} className={styles.logoIcon} />,
    },
  ];
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.text}>
        More than 12,000 businesses delight their customers with <b>Gleamer</b>
      </div>
      <div className={styles.logos}>
           {Logos.map((logo,index)=>(
        <div key={index} className={styles.logo}>
            {logo.icon}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Companies;
