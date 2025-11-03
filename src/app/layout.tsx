import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gyan Education Consultancy - IELTS, PTE & Visa Services",
  description: "Your trusted partner for IELTS, PTE preparation and international visa services. Expert guidance for your education and immigration journey.",
  keywords: ["IELTS", "PTE", "Visa Services", "Education Consultancy", "Study Abroad", "Immigration"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
