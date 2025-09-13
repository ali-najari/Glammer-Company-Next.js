"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import style from "./styles.module.scss";
import type { IModalProps } from "./type";


const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  contentClassName,
}: IModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  const modalRoot = document.getElementById("modalRoot");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={style.backdrop} onClick={onClose}>
      <div className={style.mainWrapper} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalHeader}>
          <button className={style.closeButton} onClick={onClose}>
            ×
          </button>
          <h2 className={style.modalTitle}>{title}</h2>
        </div>
        <div className={`${style.modalContent} ${contentClassName ?? ""}`} >
          {children}
        </div>{" "}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
