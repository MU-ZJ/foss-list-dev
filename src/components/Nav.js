import { NavLink } from 'react-router-dom';

function Nav() {
    return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">

        <div className="navbar-start">

            <NavLink to='/' className="navbar-item">Home</NavLink>
            <NavLink to='/NeoVim' className="navbar-item">Neovim</NavLink>
            <NavLink to='/Bat' className="navbar-item">Bat</NavLink>
            <NavLink to='/Lsd' className="navbar-item">LSD</NavLink>
            <NavLink to='/Ripgrep' className="navbar-item">ripgrep</NavLink>
            <NavLink to='/Kitty' className="navbar-item">Kitty Terminal Emulator</NavLink>
            <NavLink to='/Fish' className="navbar-item">Fish Shell</NavLink>
            <NavLink to='/VimPlug' className="navbar-item">Vim Plug</NavLink>
            <NavLink to='/CocNvim' className="navbar-item">coc.nvim</NavLink>

        </div>

    </nav>
    )
}

export default Nav
