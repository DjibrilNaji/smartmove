"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import routes from "../../routes";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="sticky top-0 w-full color-primary z-50">
      <Image
        src={routes.img("logo_smartmove.png")}
        width={200}
        height={148}
        alt="Smart Move logo"
        className="top-0 left-0 z-50 w-fit-content cursor-pointer h-auto"
        onClick={() => router.push("/")}
        priority
      />
    </div>
  );
}
