import Link from "next/link";
import Links from "./links/links";

function Navbar() {
  return (
    <div className="flex items-center h-10 justify-between w-full absolute px-12 z-1">
      <div className="flex">
        <Link href="/" className="text-2xl font-black mr-8" scroll={false}>
          <span className="text-textcolor">E-</span>buy
        </Link>
        <div>
          <Links />
        </div>
      </div>
      <div className="flex gap-10 px-4">
        <button>Search</button>
        <h1>Cart</h1>
        <h1>Login</h1>
      </div>
    </div>
  );
}

export default Navbar;
