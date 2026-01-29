import Image from "next/image";
import Link from "next/link";

const NavbarComp = () => {
  return (
    <>
      <div className="flex justify-around items-center border-b border-green-600">
        <div className="w-20 h-20 flex justify-center items-center rounded-full">
          <Image
            className=""
            src="/logo2.png"
            alt="logo"
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="text-green-600 flex gap-7 text-lg justify-evenly items-center">
          <Link href="/about-us">
            <h1>About</h1>
          </Link>
          <a href="/services">
            <h1>Services</h1>
          </a>

          <h1>Contact</h1>
          <h1>Blog</h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="border border-green-600 px-4 py-3 rounded text-lg font-bold text-green-600">
            Sign Up
          </button>
          <button className="border border-orange-400 px-4 py-3 rounded text-lg font-bold text-orange-400">
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarComp;
