"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import logoIcon from "../../../public/header/Logo.png";
import phoneIcon from "../../../public/header/phoneIcon.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Context } from "@/context/mainContext";
import Modal from "@/components/modal";
import BookingForm from "@/components/booking-form";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const { isAuthenticated, logout } = useContext(Context);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/sign-in");
    setIsOpen(false);
  };

  const goToSignIn = () => {
    router.push("/sign-in");
    setIsOpen(false);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.headerLeft}>
        <Image alt="logo" src={logoIcon} className={styles.logoIcon} />
        <div className={styles.headerLinks}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About us</Link>
          <Link href={"/services"}>Services</Link>
        </div>
      </div>

      <div className={styles.headerButtons}>
        <div className={styles.phoneNumber}>
          <Image
            alt="phone-icon"
            src={phoneIcon}
            className={styles.phoneIcon}
          />
          <span>+1 0239 0310</span>
        </div>
        <div className={styles.bookButton}>
          <button
            onClick={() => {
              if (isAuthenticated()) {
                setIsBookingOpen(true);
              } else {
                void router.push("/sign-in");
              }
            }}
          >
            Book a service
          </button>
        </div>
        {isAuthenticated() ? (
          <div className={styles.signButton}>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className={styles.signButton}>
            <button onClick={goToSignIn}>Sign In / Sign Up</button>
          </div>
        )}
      </div>

      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          ✕
        </button>
        <Link href={"/"} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href={"/about"} onClick={() => setIsOpen(false)}>
          About us
        </Link>
        <Link href={"/services"} onClick={() => setIsOpen(false)}>
          Services
        </Link>
        <div className={styles.phoneNumber}></div>
        <div className={styles.bookButton}>
          <button
            onClick={() => {
              setIsOpen(false);
              setIsBookingOpen(true);
            }}
          >
            Book a service
          </button>
        </div>
        {isAuthenticated() ? (
          <div className={styles.signButton}>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className={styles.signButton}>
            <button onClick={goToSignIn}>Sign In / Sign Up</button>
          </div>
        )}
      </div>

      <Modal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Book a Cleaning Service"
      >
        <BookingForm onClose={() => setIsBookingOpen(false)} />
      </Modal>
    </div>
  );
};

export default Header;
