"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import SingleTicket from "./single-ticket";
import styles from "./styles.module.scss";
import { ISingleTicketProps } from "./type";
import Modal from "../../modal";
import BookingForm from "../../booking-form";

import basicClean from "../../../../public/landingPage/tranparency-pricing/basicClean.png";
import deepClean from "../../../../public/landingPage/tranparency-pricing/deepClean.png";
import weeklyRefresh from "../../../../public/landingPage/tranparency-pricing/weeklyRefresh.png";
import deluxeClean from "../../../../public/landingPage/tranparency-pricing/deluxeClean.png";
import { servicesData } from "@/data/services/services";
import { Context } from "@/context/mainContext";
import { useRouter } from "next/navigation";

const TransparentPrice = () => {
  const [selectedService, setSelectedService] =
    useState<ISingleTicketProps | null>(null);

  const router = useRouter();

  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    if (selectedService && !isAuthenticated()) {
      void router.push("/sign-in");
    }
  }, [selectedService, isAuthenticated, router]);

  const tickets: ISingleTicketProps[] = [
    {
      title: "Basic Clean",
      icon: <Image alt="basic clean" src={basicClean} />,
      description: "Perfect for light cleaning and upkeep of your home.",
      price: "$99",
      buttonLabel: "Book a services",
    },
    {
      title: "Deep cleaning",
      icon: <Image alt="deep clean" src={deepClean} />,
      description: "Thorough cleaning for a spotless, sparkling home.",
      price: "$149",
      buttonLabel: "Book a services",
    },
    {
      title: "Weekly refresh",
      icon: <Image alt="weekly refresh" src={weeklyRefresh} />,
      description:
        "Consistent cleaning to maintain a pristine, comfortable home.",
      price: "$129/mo",
      buttonLabel: "Book a services",
    },
    {
      title: "Deluxe clean",
      icon: <Image alt="deluxe clean" src={deluxeClean} />,
      description:
        "Comprehensive cleaning for special occasions and seasonal refreshes.",
      price: "$219",
      buttonLabel: "Book a services",
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.texts}>
        <div className={styles.titleText}>transparent pricing</div>
        <div className={styles.subtitle}>
          Budget-friendly options
          <br />
          for a cleaner home
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        {tickets.map((ticket, index) => (
          <SingleTicket
            key={index}
            {...ticket}
            buttonLabel="Book a services"
            icon={ticket.icon}
            title={ticket.title}
            description={ticket.description}
            price={ticket.price}
            onClick={() => {
              const matchedService = servicesData.find(
                (s) => s.title.toLowerCase() === ticket.title.toLowerCase()
              );
              setSelectedService(matchedService || ticket.title);
            }}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title="Book a Cleaning Service"
      >
        {isAuthenticated() && selectedService && (
          <BookingForm
            serviceName={selectedService.title}
            price={selectedService.price}
            onClose={() => setSelectedService(null)}
          />
        )}
      </Modal>
    </div>
  );
};

export default TransparentPrice;
