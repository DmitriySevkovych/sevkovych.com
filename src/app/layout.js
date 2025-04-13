import { Syne } from "next/font/google";
import "./globals.css";

export const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ivanna & Dmitriy Sevkovych",
  description:
    "'Root homepage' of Ivanna and Dmitriy Sevkovych. From here you can navigate to our personal websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-dvh ${syne.variable} antialiased`}>{children}</body>
    </html>
  );
}
