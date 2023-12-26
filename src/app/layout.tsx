import { Navbar } from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Fab } from "@/components/fab";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="xs:min-w-fill-available s:min-w-fill-available m:min-w-fill-available lg:min-w-fill-available xl:min-w-fill-available max-xl:min-w-fill-available">
          {children}
        </div>
        <footer>
          <Fab />
        </footer>
      </body>
    </html>
  );
}
