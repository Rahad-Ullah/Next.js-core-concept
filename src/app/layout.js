import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import { Poppins, Nunito } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const nunito_sans = Nunito({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={nunito_sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
