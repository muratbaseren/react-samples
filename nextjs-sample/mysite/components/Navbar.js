import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/"><a className="navbar-brand">NextJS Website</a></Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link">Home Page !!</a></Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/products" as="urunler"><a className="nav-link">Products</a></Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/about" as="iletisim"><a className="nav-link">About</a></Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/users"><a className="nav-link">Users</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}