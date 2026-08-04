import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <h2>ScrapTogether</h2>

            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/find-players">
                        Find Players
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/party-browser">
                        Party Browser
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/community">
                        Community
                    </NavLink>
                </li>
            </ul>

            <button>Login</button>
        </nav>
    );
}