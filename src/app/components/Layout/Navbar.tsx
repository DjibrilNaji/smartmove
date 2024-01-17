import Image from "next/image";
import Link from "next/link";
import routes from "../../routes";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full color-primary z-50">
      <Link href={routes.home} className="">
        <Image
          src={routes.img("logo_smartmove.png")}
          width={200}
          height={148}
          alt="Smart Move logo"
          className="top-0 left-0 z-50"
        />
      </Link>
    </div>
  );
}
