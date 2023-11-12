import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/account">Account</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Sign up</NavLink>
                </li>
                <li>
                    <NavLink to="/signin">Sign in</NavLink>
                </li>

            </ul>
        </nav>
    )
};

export default Navigation;