import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to='/' className="site-title">
                Luke Haskell Portfolio
            </Link>
            <ul>
                <li>
                    <CustomLink to='/portfolio'>
                        Portfolio
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to='/about'>
                        About
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to='/contact'>
                        Contact
                    </CustomLink>
                </li>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <ul className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </ul>

    )


}