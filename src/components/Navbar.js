export default function Navbar() {
    return <nav className="nav">
        <a href='/' className="site-title">Luke Haskell Portfolio </a>
        <ul>
            <li>
                <a href='/portfolio'>
                    Portfolio
                </a>
            </li>
            <li>
                <a href='/about'>
                    About
                </a>
            </li>
        </ul>

    </nav>
}