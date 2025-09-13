"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import Input from "../input";
import Logo from "../../../public/auth/Logo.png";
import GoogleIcon from "../../../public/auth/google-icon.png";
import GitHubIcon from "../../../public/auth/github-icon.png";
import mailPhoto from "../../../public/auth/email.png";
import lockPhoto from "../../../public/auth/padlock.png";
import UsernamePhoto from "../../../public/auth/user.png";
import { useState } from "react";
import { ISignUpProps } from "./type";
import { SignUpValidateRules } from "../validators/authValidators";
import { createUser } from "../services/userService";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [formData, setFormData] = useState<ISignUpProps>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<ISignUpProps>>({});

  const router = useRouter();

  const Inputs: {
    name: keyof ISignUpProps;
    label: string;
    placeholder: string;
    type?: string;
    autocomplete: string;
    icon: React.ReactNode;
  }[] = [
    {
      name: "username",
      label: "username : ",
      placeholder: "Enter your username",
      type: "text",
      autocomplete: "username",
      icon: (
        <Image
          src={UsernamePhoto}
          alt="User Icon"
          className={styles.image}
        ></Image>
      ),
    },
    {
      name: "email",
      label: "email address :",
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
  const handleValidate = () => {
    const newErrors: Partial<ISignUpProps> = {};

    (Object.keys(SignUpValidateRules) as (keyof ISignUpProps)[]).forEach(
      (field) => {
        for (const rule of SignUpValidateRules[field]) {
          const error = rule(formData[field]);
          if (error) {
            newErrors[field] = error;
            break;
          }
        }
      }
    );
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = handleValidate();
    if (!isValid) return;

    try {
      const res = await createUser(formData);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      router.push("/sign-in");
    } catch (error : any) {
      if (error.response?.status === 409) {
        alert("This account already exists");
      } else {
        alert("There is a problem in sign up");
      }
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.authContainer}>
        <div>
          <Image alt="Logo" src={Logo} className={styles.authLogo} />
        </div>
        <div className={styles.authSocial}>
          <button>
            Sign Up <Image alt="googleIcon" src={GoogleIcon} />
          </button>
          <button>
            Sign Up <Image alt="GitHubIcon" src={GitHubIcon} />
          </button>
        </div>
        <div className={styles.authDivider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerText}>Or</div>
          <div className={styles.dividerLine}></div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          {Inputs.map((input, index) => (
            <div  key={input.name} className={styles.authForm}>
              <label>{input.label}</label>
              <div className={styles.authInput}>
                <Input
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  autoComplete={input.autocomplete}
                  autoFocus={index === 0}
                  icon={input.icon}
                  value={formData[input.name]}
                  onChange={handleChange}
                  error={errors[input.name]}
                  style={{
                    width: "100%",
                    height: "45px",
                  }}
                />
              </div>
            </div>
          ))}
          <div className={styles.authButton}>
            <button>Sign Up</button>
          </div>
        </form>
        <div className={styles.authLinks}>
          <Link href={"/privacy"}>
            By creating an account, you agree with our Privacy & Policy.
          </Link>
          <Link href={"/sign-in"}>Already have an account? Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
