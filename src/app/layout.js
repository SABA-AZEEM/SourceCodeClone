'use client'
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import DashboardHeader from "@/components/dashboardHeader/DashboardHeader";



import { Provider, useSelector } from "react-redux";
import { store } from "./GlobalRedux/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  
  return (
      <html lang="en">
        <body className={inter.className}>
          <Provider store={store}> 
            <Header />
            {/* {user && <DashboardHeader />} */}
              {  children}
            <Footer />
          </Provider>
        </body>
      </html>
  );
}
