"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  let router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div className="flex justify-center items-center text-6xl text-yellow-600 font-bold">
      <h1>OH OH, looks like you're lost!</h1>
      <h1>Navigating to homepage in 5s</h1>
    </div>
  );
};

export default NotFound;
