import React from "react";

import AppLayout from "../AppLayout";
import AuthProvider from "../AuthProvider";
import StoreProvider from "../redux";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <AuthProvider>
        <AppLayout>{children}</AppLayout>
      </AuthProvider>
    </StoreProvider>
  );
};

export default RootLayout;
