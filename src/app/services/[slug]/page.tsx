"use client";

import ServiceDetail from "@/components/services-page/service-detail";
import AppLayout from "@/components/shared/app-layout";
import withAuth from "@/helper/withAuth";

const ServiceDetailPage = () => {
  return (
    <AppLayout>
      <ServiceDetail />
    </AppLayout>
  );
};

export default withAuth(ServiceDetailPage);
