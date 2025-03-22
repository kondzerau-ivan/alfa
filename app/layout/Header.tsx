import Link from "next/link";

const Header = () => {
  return (<header className="bg-neutral shadow-sm">
    <div className="container mx-auto px-5">
      <nav className="navbar">
        <Link href="/" className="logo btn btn-ghost text-xl">ALFA</Link>
      </nav>
    </div>
  </header>)
}

export default Header;
