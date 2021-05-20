import {useEffect} from 'react';
import { NavLink } from 'react-router-dom';

function Main() {
    
    return (
        <div>
        
            <section className="hero is-small has-text-centered">
                
                <div className="hero-body">

                    <p className="title">FOSS-List</p>

                    <p className="subtitle">A curated list of free and open source software.</p>

                </div>

            </section>

            <section className="section">

                <div className="content">

                    <ul>
                        <li><NavLink to='/NeoVim'>Neovim</NavLink></li>
                        <li><NavLink to='/Bat'>Bat</NavLink></li>
                        <li><NavLink to='/Lsd'>LSD</NavLink></li>
                        <li><NavLink to='/Ripgrep'>ripgrep</NavLink></li>
                        <li><NavLink to='/Kitty'>Kitty Terminal Emulator</NavLink></li>
                        <li><NavLink to='/Fish'>Fish Shell</NavLink></li>
                        <li><NavLink to='/VimPlug'>Vim Plug</NavLink></li>
                        <li><NavLink to='/CocNvim'>coc.nvim</NavLink></li>
                    </ul>

                </div>

            </section>

        </div>
    )
}

export default Main
