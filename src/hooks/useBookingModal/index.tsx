import { useState } from "react";

interface IOpenModal {
  service?: string;
  itemId?: number;
  initialPrice?: number;
}

export function useBookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(0);
  const [focusedItemId, setFocusedItemId] = useState<number | null>(null);

  const openModal = ({ service, itemId, initialPrice }: IOpenModal) => {
    setSelectedService(service ?? null);
    setFocusedItemId(itemId ?? null);
    setPrice(initialPrice ?? 0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedService(null);
    setFocusedItemId(null);
    setPrice(0);
  };

  return {
    isOpen,
    selectedService,
    price,
    focusedItemId,
    openModal,
    closeModal,
    setSelectedService,
    setPrice,
  };
}
