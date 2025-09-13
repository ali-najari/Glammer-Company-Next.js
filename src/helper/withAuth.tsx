"use client";

import { useEffect, useState } from "react";
import SingInPage from "@/app/sign-in/page";

const withAuth = (Component: React.FC) => {
  const AuthWrapper = (props: any) => {
    const [user, setUser] = useState<any>(null);
    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);
    if (!user) {
      return <SingInPage />;
    }

    return <Component {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;
