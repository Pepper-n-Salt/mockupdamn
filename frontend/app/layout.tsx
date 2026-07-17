import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col bg-white text-black">
            <Header />

            <main className="flex-1 w-full px-8 py-24">{children}</main>

            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
