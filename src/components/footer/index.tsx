import Image from "next/image";
import Input from "../input";
import styles from "./styles.module.scss";
import instagramIcon from "../../../public/footer/instagram.png";
import facebookIcon from "../../../public/footer/facebook.png";
import xIcon from "../../../public/footer/X.png";
import logoImage from "../../../public/footer/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.footerTop}>
        <span className={styles.firstSpan}>
          Stay updated with the latest news,
          <br />
          promotions, and exclusive offers.
        </span>
        <div className={styles.subscribeInput}>
          <Input
            placeholder="Enter your email"
            name="email"
            type="email"
            autoComplete="email"
            style={{ height: "47px" }}
          />
          <button>Subscribe</button>
        </div>
        <span className={styles.secondSpan}>
          By subscribing, you agree to receive our <br />
          promotional emails. You can unsubscribe at any time.
        </span>
        <div className={styles.footerIcons}>
          <Image alt="xIcon" src={xIcon} className={styles.footerIcon} />
          <Image
            alt="facebookIcon"
            src={facebookIcon}
            className={styles.footerIcon}
          />
          <Image
            alt="instagramIcon"
            src={instagramIcon}
            className={styles.footerIcon}
          />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footerBetween}>
        <div className={styles.footerBetweenText}>
          <span className={styles.footerBetweenSpan}>
            A cleaner home is just a call away – start your journey today.
          </span>
          <button>
            <Link href={"/contact"}>Contact us</Link>
          </button>
        </div>
        <div className={styles.footerBetweenLinks}>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About us</Link>
          <Link href={"/"}>Get a quote</Link>
          <Link href={"/"}>Reviews</Link>
          <Link href={"/"}>Meet the team</Link>
          <Link href={"/"}>Pricng plans</Link>
        </div>
      </div>
      <div className={styles.logoImage}>
        <Image alt="logo" src={logoImage} />
      </div>
      <div className={styles.divider}></div>
      <div></div>
    </div>
  );
};

export default Footer;
