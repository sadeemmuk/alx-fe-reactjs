import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <nav>
            <ul style={{ display:'flex', justifyContent:'space-between', padding:' 20px', backgroundColor: 'gray'}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to='/about'>Blog</Link>
                </li>
                <li>
                    <Link to='/services'>Services</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    )
}

export default NavBar;