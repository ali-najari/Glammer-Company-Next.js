import { ISignInProps } from "../sign-in/type";
import { ISignUpProps } from "../sign-up/type";

export const SignUpValidateRules: Record<
  keyof ISignUpProps,
  ((value: string) => string | null)[]
> = {
  username: [(val) => (!val ? "username is required" : null)],
  email: [
    (val) => (!val ? "email is required" : null),
    (val) => (!val.includes("@") ? "eamil is incorrect" : null),
  ],
  password: [
    (val) => (!val ? "password is required" : null),
    (val) => (val.length < 8 ? "password is too weak" : null),
    (val) =>
      !/\d/.test(val) ? "password must includes at least 1 number " : null,
  ],
};

export const SignInValidateRules: Record<
  keyof ISignInProps,
  ((value: string) => string | null)[]
> = {
  email: [
    (val) => (!val ? "email is required" : null),
    (val) => (!val.includes("@") ? "eamil is incorrect" : null),
  ],
  password: [
    (val) => (!val ? "password is required" : null),
    (val) => (val.length < 8 ? "password is too weak" : null),
    (val) =>
      !/\d/.test(val) ? "password must includes at least 1 number " : null,
  ],
};
