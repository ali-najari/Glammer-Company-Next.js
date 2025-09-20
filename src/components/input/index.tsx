"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import eyeBtn from "../../../public/input/eye.png";
import hiddenBtn from "../../../public/input/hidden.png";
import type { IInputProps } from "./type";

const Input = ({
  icon,
  label,
  error,
  type = "text",
  className,
  style,
  ...rest
}: IInputProps) => {
  const [secure, setSecure] = useState<boolean>(type === "password");

  const handleEyeBtn = () => {
    setSecure((prev) => !prev);
  };

  const inputType = type === "password" ? (secure ? "password" : "text") : type;

  return (
    <div className={styles.mainWrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.input}>
        {icon && icon}
        <input {...rest} className={className} style={style} type={inputType} />
        {type === "password" && (
          <button
            tabIndex={-1}
            type="button"
            className={styles.eyeBtn}
            onClick={handleEyeBtn}
          >
            {secure ? (
              <Image alt="eyeBtn" src={eyeBtn} className={styles.image} />
            ) : (
              <Image alt="hiddenBtn" src={hiddenBtn} className={styles.image} />
            )}
          </button>
        )}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
