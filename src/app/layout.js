import { Nunito } from "next/font/google";
import Footer from "./components/Footer";
import Provider from "./utils/themeProvider";
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
        <body className={`${inter.className} h-full bg-cover bg-no-repeat bg-fixed bg-center bg-light-image dark:bg-dark-image`}>
          <Provider>
            <main>{children}</main>
            <Footer />
          </Provider>
        </body>
      </html>
    </>
  );
}
