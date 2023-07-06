import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hyusecommerce",
  description: "A simple next ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="m-auto h-full min-w-[300px] max-w-7xl p-4 md:h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
