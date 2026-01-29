import Navbar from "@/src/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQI App",
  description: "An app for SQI students",
};

export default function GlobalProductPageLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
