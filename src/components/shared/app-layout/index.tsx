"use client";

import { ReactNode } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="layoutWrapper">
      <header>
        <Header />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
