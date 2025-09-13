"use client";

import { useParams } from "next/navigation";
import styles from "./styles.module.scss";
import Image from "next/image";
import { servicesData } from "@/data/services/services";
import { useState } from "react";
import Modal from "@/components/modal";
import BookingForm from "@/components/booking-form";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  if (!service) {
    return <div className={styles.notFound}>Service not found</div>;
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.hero}>
        <div className={styles.texts}>
          <h1 className={styles.title}>{service.heroTitle}</h1>
          <p className={styles.subtitle}>{service.heroSubtitle}</p>
          <p className={styles.description}>{service.description}</p>
          <div className={styles.price}>{service.price}</div>
          <button onClick={() => setOpenModal(true)}>Book a service</button>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={service.image}
            alt={service.title}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.features}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <ul>
          {service.features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              ✅ {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.faqs}>
        <h2 className={styles.sectionTitle}>FAQs</h2>
        {service.faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              openFaq === index ? styles.active : ""
            }`}
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
          >
            <div className={styles.question}>{faq.question}</div>
            {openFaq === index && (
              <div className={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Book a Cleaning Service"
      >
        <BookingForm
          serviceName={service.title}
          price={service.price}
          onClose={() => setOpenModal(false)}
        />
      </Modal>
    </div>
  );
};

export default ServiceDetail;
