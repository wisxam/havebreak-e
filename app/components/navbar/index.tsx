import Link from "next/link";
import SigninButton from "../signinButton";
import Image from "next/image";
import { HBlogo } from "@/app/assets";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-zinc-100 shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold">
        <Link href="/">
          <Image src={HBlogo} alt="Logo" width={100} />
        </Link>
      </div>

      <Link href="/product" className="text-gray-700 hover:text-black">
        Products
      </Link>

      <Link href="/add-product" className="text-gray-700 hover:text-black">
        Add a product
      </Link>

      <div className="px-4">
        <SigninButton />
      </div>
    </nav>
  );
}
