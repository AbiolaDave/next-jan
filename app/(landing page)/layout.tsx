import Navbar from "@/src/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQI App",
  description: "An app for SQI students",
};

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
