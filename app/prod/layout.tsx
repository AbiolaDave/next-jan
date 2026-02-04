import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQI App",
  description: "An app for SQI students",
};

export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      {props.modal}
      {props.children}
    </div>
  );
}
