import { Nunito } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "iWeather",
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <meta name="theme-color" content="#13131A" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <html lang="en">
        <body className={`${inter.className}`}>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
