import { NavLink } from "react-router-dom";
import './../index.css'
export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => {
                        return isActive ? "active-link" : "";
                    }}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({ isActive }) => {
                        return isActive ? "active-link" : "";
                    }}>Login</NavLink>
                </li>
                <li>
                    <NavLink to="/sign-up" className={({ isActive }) => {
                        return isActive ? "active-link" : "";
                    }}>Sign Up</NavLink>
                </li>
            </ul>
        </nav>
    );
}  