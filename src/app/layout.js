"use client";
import { Inter } from "next/font/google";

import "./globals.css";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });
import { wrapper } from "../store";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={makeStore}>{children}</Provider>
      </body>
    </html>
  );
};

export default wrapper.withRedux(RootLayout);
