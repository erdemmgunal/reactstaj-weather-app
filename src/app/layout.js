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
      </head>
      <html lang="en" suppressContentEditableWarning>
        <body className={inter.className}>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
