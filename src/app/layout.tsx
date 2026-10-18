import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/Navbar/Navbar";
import Footer from "./_component/Footer/Footer";
import FirstNav from "./_component/FirstNav/FirstNav";
import { Toaster } from "@/components/ui/toast";
import { SessionProvider } from "next-auth/react";
import MyProvider from "./_component/MyProvider/MyProvider";
import Providers from "./_component/TanstackProvider/TanstackProvider";

const ExoFont = Exo({
  variable: "--font-Exo",
  weight: ['100', '400', '500', '700']
});


export const metadata: Metadata = {
  title: "Fresh Cart",
  description: "Fresh cart by create next app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ExoFont.className} antialiased`}
    >
      <body className="">

          <Providers>
            <MyProvider>
              <FirstNav />
              <Navbar />
              <div className="container mx-auto xl:max-w-7xl">
                {children}
                <Toaster />
              </div>
              <Footer />
            </MyProvider>
          </Providers>


      </body>
    </html>
  );
}
