"use client";
import "./globals.css";
import { HeroUiProvider } from "./providers";
import StaticNavbar from "@/components/staticNavbar";
import getContact from "@/services/dataService";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactDetail = getContact();

  return (
    <html lang="en" className="dark">
      <body>
        <HeroUiProvider>
          <div className="min-h-screen flex flex-col">
            <StaticNavbar contactDetail={contactDetail} />
            {children}
          </div>
        </HeroUiProvider>
      </body>
    </html>
  );
}
