"use client";

import Services from "@/components/services-page";
import AppLayout from "@/components/shared/app-layout";
import withAuth from "@/helper/withAuth";

const ServicesPage = () => {
  return (
    <AppLayout>
      <Services />
    </AppLayout>
  );
};

export default withAuth(ServicesPage);
