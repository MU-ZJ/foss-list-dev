import { NavLink } from 'react-router-dom';

function Nav() {
    return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">

        <div className="navbar-start">

            <NavLink to='/' className="navbar-item">Home</NavLink>

        </div>

    </nav>
    )
}

export default Nav
