import React from "react";

import AppLayout from "../AppLayout";
import StoreProvider from "../redux";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <AppLayout>{children}</AppLayout>
    </StoreProvider>
  );
};

export default RootLayout;
