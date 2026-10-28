import { type Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Distance Darts",
  description: "Distance Darts baseline",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
