function Fish() {
    return(
        <div>

            <h1 className="title has-text-centered">Fish</h1>

            <section className="section is-small">

                <div className="content has-text-centered">

                    <p>
                        Fish is an attempt at a modernized Unix command line. The primary focus of Fish is in its' autocompletion/autosuggestions, utilizing both shell history and man pages to predict user input, as well as native VGA color. While not as robust as bash or zsh for scripting, ease of use makes Fish a viable shell for general purpose browsing and light workloads.
                    </p>

                </div>

                <div className="content">

                    <p>Website: <a href="https://fishshell.com/">https://fishshell.com/</a></p>

                    <p>GitHub: <a href="https://github.com/fish-shell/fish-shell">https://github.com/fish-shell/fish-shell</a></p>
                
                </div>

                <div className="content">

                    <p className="title has-text-centered">Installation</p>

                    <p className="title">Pre-built Binaries</p>

                    <p>Installers for all supported platforms can be found on the Fish website.</p>

                    <p className="title">Linux</p>

                    <p className="subtitle">Ubuntu/Debian/OpenSUSE/CentOS</p>

                    <p>Installation is done trough the Fish website.</p>

                    <p className="subtitle">Fedora</p>

                    <ul>
                        <li><code>dnf install fish</code></li>
                    </ul>

                    <p className="subtitle">Arch Linux</p>

                    <ul>
                        <li><code>pacman -S fish</code></li>
                    </ul>

                    <p className="subtitle">Gentoo</p>

                    <ul>
                        <li><code>emerge fish</code></li>
                    </ul>

                    <p className="subtitle">Void Linux</p>

                    <ul>
                        <li><code>xbps-install fish-shell</code></li>
                    </ul>

                    <p className="subtitle">NixOS</p>

                    <ul>
                        <li><code>nix-env -i fish</code></li>
                    </ul>

                    <p className="subtitle">Guix</p>

                    <ul>
                        <li><code>guix package -i fish</code></li>
                    </ul>

                    <p className="subtitle">Packages</p>

                    <ul>
                        <li><code>eopkg install fish</code></li>
                    </ul>

                    <p className="title">BSD</p>

                    <p className="subtitle">FreeBSD</p>

                    <ul>
                        <li><code>pkg install fish</code></li>
                    </ul>

                    <p className="subtitle">NetBSD</p>

                    <ul>
                        <li><code>pkgin install fish</code></li>
                    </ul>

                    <p className="subtitle">OpenBSD</p>

                    <ul>
                        <li><code>pkg_add fish</code></li>
                    </ul>

                    <p className="title">MacOS</p>

                    <p className="subtitle">Homebrew</p>

                    <ul>
                        <li><code>brew install fish</code></li>
                    </ul>

                    <p className="subtitle">Macports</p>

                    <ul>
                        <li><code>sudo port install fish</code></li>
                    </ul>

                </div>

            </section>

        </div>
    )
}

export default Fish
