function Lsd() {
    return(
        <div>

            <h1 className="title has-text-centered">LSD</h1>

            <section className="section is-small">

                <div className="content has-text-centered">

                    <p>
                        A Rust based <code>ls</code> extension using NerFonts and colors to improve readability and aesthetics.
                    </p>

                </div>

                <div className="content">

                    <p>GitHub: <a href="https://github.com/Peltoche/lsd">https://github.com/Peltoche/lsd</a></p>

                </div>

                <div className="content">

                    <p className="title has-text-centered">Installation</p>

                    <p className="title">Prerequisites</p>

                    <p>LSD requires a patched Powerline or Font-Awesome nerd font</p>

                    <p className="title">Linux</p>

                    <p className="subtitle">Arch Linux</p>

                    <ul>
                        <li><code>pacman -S lsd</code></li>
                    </ul>

                    <p className="subtitle">Fedora</p>

                    <ul>
                        <li><code>dnf install lsd</code></li>
                    </ul>

                    <p className="subtitle">Ubuntu</p>

                    <ul>
                        <li><code>sudo dpkg -i lsd_0.20.1_amd64.deb # adapt version number and architecture</code></li>
                    </ul>

                    <p className="subtitle">Gentoo</p>

                    <ul>
                        <li><code>sudo emerge sys-apps/lsd</code></li>
                    </ul>

                    <p className="subtitle">NixOS</p>

                    <ul>
                        <li><code>nix-env -iA nixos.lsd</code></li>
                    </ul>

                    <p className="title">BSD</p>

                    <p className="subtitle">FreeBSD</p>

                    <ul>
                        <li><code>pkg install lsd</code></li>
                    </ul>

                    <p className="subtitle">NetBSD</p>

                    <ul>
                        <li><code>pkgin install lsd</code></li>
                    </ul>

                    <p className="title">MacOS</p>

                    <p className="subtitle">Homebrew</p>

                    <ul>
                        <li><code>brew install lsd</code></li>
                    </ul>

                    <p className="subtitle">Macports</p>

                    <ul>
                        <li><code>sudo port install lsd</code></li>
                    </ul>

                    <p className="title">Windows</p>

                    <p className="subtitle">Scoop</p>

                    <ul>
                        <li><code>scoop install lsd</code></li>
                    </ul>

                    <p className="title">Android(Termux)</p>

                    <ul>
                        <li><code>pgk install lsd</code></li>
                    </ul>

                </div>

            </section>

        </div>
    )
}

export default Lsd
