import { NavLink } from "react-router-dom";
import "../App.css";

const Navigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/home"><img src="Guardian-logo-dark.png" alt="Guardian-logo-dark" className="logo"></img></NavLink>
                </li>
                <li>
                    <NavLink to="/home">Insurance</NavLink>
                </li>
                <li>
                    <NavLink to="/account">Investments</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Resources</NavLink>
                </li>
                <li>
                    <NavLink to="/signin">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/signin">I am...</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
