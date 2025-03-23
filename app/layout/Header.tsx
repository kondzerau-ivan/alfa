"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();
  const hideElement = pathName === '/product/create';

  return (<header className="bg-neutral shadow-sm">
    <div className="container mx-auto px-5">
      <nav className="navbar">
        <Link href="/" className="logo btn btn-ghost text-xl">ALFA</Link>
        {!hideElement && <Link href="/product/create" className="btn btn-primary uppercase ml-auto">Create new product</Link>}
      </nav>
    </div>
  </header>)
}

export default Header;
