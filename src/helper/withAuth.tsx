"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const withAuth = (Component: React.FC) => {
  const AuthWrapper = (props: any) => {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        router.push(`/sign-in?redirect=${encodeURIComponent(pathname)}`);
      }
    }, [pathname, router]);

    if (!user) return null;

    return <Component {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;