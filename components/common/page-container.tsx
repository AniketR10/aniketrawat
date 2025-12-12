import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div className="pt-20 sm:pt-24">
        <PageHeader title={title} />
        <div className="mx-6">{children}</div>
      </div>
    </ClientPageWrapper>
  );
}
