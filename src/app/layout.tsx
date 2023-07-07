import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hyusecommerce",
  description: "A simple next ecommerce",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const asyncNavbar: JSX.Element = await Navbar();
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {asyncNavbar}
        <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
      </body>
      <Footer />
    </html>
  );
}
