import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQI App",
  description: "An app for SQI students",
};

export default function Layout({
  children,
  analytics,
  team,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <div className="flex justify-evenly items-center">
      {children}
      {analytics}
      {team}
    </div>
  );
}
