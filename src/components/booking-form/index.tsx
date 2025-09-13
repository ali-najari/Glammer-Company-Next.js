"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Input from "../input";
import { servicesData } from "@/data/services/services";

interface BookingFormProps {
  serviceName?: string;
  price?: string;
  onClose: () => void;
}

interface BookingInputsProps {
  fullName: string;
  phone: string;
  date: string;
  address: string;
}

const BookingForm = ({
  serviceName = "",
  price = "",
}: BookingFormProps) => {
  const [selectedService, setSelectedService] = useState(serviceName);
  const [selectedPrice, setSelectedPrice] = useState(
    price || servicesData.find((s) => s.title === serviceName)?.price || "0"
  );

  const [form, setForm] = useState<BookingInputsProps>({
    fullName: "",
    phone: "",
    date: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const Inputs: {
    name: keyof BookingInputsProps;
    label: string;
    placeholder: string;
    type?: string;
    autocomplete: string;
  }[] = [
    {
      name: "fullName",
      placeholder: "Enter your name",
      type: "text",
      label: "Full Name",
      autocomplete: "full name",
    },
    {
      name: "phone",
      placeholder: "Enter your phone number",
      type: "text",
      label: "Phone number",
      autocomplete: "phone",
    },
    {
      name: "date",
      placeholder: "",
      type: "date",
      label: "Date",
      autocomplete: "date",
    },
    {
      name: "address",
      placeholder: "Enter your address",
      type: "text",
      label: "Address",
      autocomplete: "address",
    },
  ];

  return (
    <form className={styles.mainWrapper}>
      <div className={styles.Form}>
        <label>Type of Service (optional)</label>
        <select
          className={styles.selectInput}
          value={selectedService}
          onChange={(e) => {
            const newService = e.target.value;
            setSelectedService(newService);
            const newPrice =
              servicesData.find((s) => s.title === newService)?.price || "0";
            setSelectedPrice(newPrice);
          }}
        >
          <option value="">Select service</option>
          {servicesData.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {Inputs.map((input, index) => (
        <div key={input.name} className={styles.Form}>
          <label>{input.label}</label>
          <div className={styles.authInput}>
            <Input
              name={input.name}
              type={input.type}
              autoFocus={index === 0}
              placeholder={input.placeholder}
              autoComplete={input.autocomplete}
              onChange={handleChange}
              value={form[input.name]}
              style={{
                width: "100%",
                height: "20px",
                border: "1px solid black",
                margin: "0",
              }}
            />
          </div>
        </div>
      ))}

      {/* نمایش قیمت */}
      <div className={styles.priceRow}>
        <span>Price</span>
        <span>{selectedPrice}</span>
      </div>

      <button type="submit" className={styles.paymentButton}>
        Go to Payment
      </button>
    </form>
  );
};

export default BookingForm;
