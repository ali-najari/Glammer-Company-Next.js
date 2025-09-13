"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "../../../public/auth/Logo.png";
import GoogleIcon from "../../../public/auth/google-icon.png";
import GitHubIcon from "../../../public/auth/github-icon.png";
import mailPhoto from "../../../public/auth/email.png";
import lockPhoto from "../../../public/auth/padlock.png";
import Input from "../input";
import Link from "next/link";
import { useContext, useState } from "react";
import { ISignInProps } from "./type";
import { loginUser } from "../services/userService";
import { Context } from "@/context/mainContext";


const SignIn = () => {
  const [formData, setFormData] = useState<ISignInProps>({
    email: "",
    password: "",
  });

  const {dispatch} = useContext(Context);

  const [errors, setErrors] = useState<Partial<ISignInProps>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleValidate = () => {
    const newErrors: Partial<ISignInProps> = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = handleValidate();
    if (!isValid) return;

    try {
      const res = await loginUser(formData.email, formData.password);
      if (!res.token) {
        setErrors({ password: "Invalid email or password" });
        return;
      }
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      dispatch("user", res.user)
      
    } catch (error) {
      console.error("login error :", error);
      alert("somerhing wnet wrong");
    }
  };

  const Inputs: {
    name: keyof ISignInProps;
    label: string;
    placeholder: string;
    type?: string;
    autocomplete: string;
    icon: React.ReactNode;
  }[] = [
    {
      name: "email",
      label: "Email Address :",
      placeholder: "Enter your Email",
      type: "email",
      autocomplete: "email",
      icon: <Image src={mailPhoto} alt="mailPhoto" className={styles.image} />,
    },
    {
      name: "password",
      label: "password :",
      placeholder: "Enter your password",
      type: "password",
      autocomplete: "password",
      icon: <Image src={lockPhoto} alt="lockPhoto" className={styles.image} />,
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.authContainer}>
        <div>
          <Image alt="Logo" src={Logo} className={styles.authLogo} />
        </div>
        <div className={styles.authSocial}>
          <button>
            Sign In <Image alt="googleIcon" src={GoogleIcon} />
          </button>
          <button>
            Sign In <Image alt="GitHubIcon" src={GitHubIcon} />
          </button>
        </div>
        <div className={styles.authDivider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerText}>Or</div>
          <div className={styles.dividerLine}></div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          {Inputs.map((input, index) => (
            <div key={input.name} className={styles.authForm}>
              <label>{input.label}</label>
              <div className={styles.authInput}>
                <Input
                  name={input.name}
                  type={input.type}
                  autoFocus={index === 0}
                  placeholder={input.placeholder}
                  autoComplete={input.autocomplete}
                  icon={input.icon}
                  onChange={handleChange}
                  error={errors[input.name]}
                  value={formData[input.name]}
                  style={{
                    width: "100%",
                    height: "45px",
                  }}
                />
              </div>
            </div>
          ))}
          <div className={styles.authButton}>
            <button>Sign In</button>
          </div>
        </form>
        <div className={styles.authLinks}>
          <Link href={"/forget-password"}>Forgot Password?</Link>
          <Link href={"/sign-up"}>Not a member yet? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
