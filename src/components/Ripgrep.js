function Ripgrep() {
    return(
        <div>

            <h1 className="title has-text-centered">ripgrep (rg)</h1>

            <section className="section is-small">

                <div className="content has-text-centered">

                    <p>
                        A rust based search utility favoring speed. Ripgrep is a line-oriented search tool that recursively searches the current directory for regex patterns, while respecting any .gitignore present. It will also skip hidden files/directories and binaries.
                    </p>
        
                </div>

                <div className="content">

                    <p>GitHub: <a href="https://github.com/BurntSushi/ripgrep">https://github.com/BurntSushi/ripgrep</a></p>
                
                </div>

                <div className="content">

                    <p className="title has-text-centered">Installation</p>

                    <p className="title">MacOS</p>

                    <p className="subtitle">Homebrew</p>

                    <ul>
                        <li><code>brew install ripgrep</code></li>
                    </ul>

                    <p className="subtitle">Macports</p>

                    <ul>
                        <li><code>sudo port install ripgrep</code></li>
                    </ul>

                    <p className="title">Windows</p>

                    <p className="subtitle">Chocolatey</p>

                    <ul>
                        <li><code>choco install ripgrep</code></li>
                    </ul>

                    <p className="subtitle">Scoop</p>

                    <ul>
                        <li><code>scoop install ripgrep</code></li>
                    </ul>

                    <p className="title">Linux</p>

                    <p className="subtitle">Arch Linux</p>

                    <ul>
                        <li><code>pacman -S ripgrep</code></li>
                    </ul>

                    <p className="subtitle">Gentoo</p>

                    <ul>
                        <li><code>emerge sys-apps/ripgrep</code></li>
                    </ul>

                    <p className="subtitle">Fedora</p>

                    <ul>
                        <li><code>dnf install ripgrep</code></li>
                    </ul>

                    <p className="subtitle">OpenSUSE</p>

                    <ul>
                        <li><code>sudo zypper install ripgrep</code></li>
                    </ul>

                    <p className="subtitle">RHEL/CentOS 7/8</p>

                    <ul>
                        <li><code>sudo yum-config-manager --add-repo=https://copr.fedorainfracloud.org/coprs/carlwgeorge/ripgrep/repo/epel-7/carlwgeorge-ripgrep-epel-7.repo</code></li>
                        <li><code>sudo yum install ripgrep</code></li>
                    </ul>

                    <p className="subtitle">Nix</p>

                    <ul>
                        <li><code>nix-env --install ripgrep</code></li>
                    </ul>

                    <p className="subtitle">Debian/Ubuntu</p>

                    <ul>
                        <li><code>curl -LO https://github.com/BurntSushi/ripgrep/releases/download/12.1.1/ripgrep_12.1.1_amd64.deb</code></li>
                        <li><code>sudo dpkg -i ripgrep_12.1.1_amd64.deb</code></li>
                    </ul>

                    <p className="subtitle">Debian Buster/Ubuntu Cosmic</p>

                    <ul>
                        <li><code>apt-get install ripgrep</code></li>
                    </ul>

                    <p className="subtitle">Haiku x86_64</p>

                    <ul>
                        <li><code>pkgman install ripgrep</code></li>
                    </ul>

                    <p className="subtitle">Haiku x86_gcc2</p>

                    <ul>
                        <li><code>pkgman install ripgrep_x86</code></li>
                    </ul>

                    <p className="title">BSD</p>

                    <p className="subtitle">FreeBSD</p>

                    <ul>
                        <li><code>pkg install ripgrep</code></li>
                    </ul>

                    <p className="subtitle">OpenBSD</p>

                    <ul>
                        <li><code>doas pkg_add ripgrep</code></li>
                    </ul>

                    <p className="subtitle">NetBSD</p>

                    <ul>
                        <li><code>pkgin install ripgrep</code></li>
                    </ul>

                    <p className="title">Rust</p>

                    <ul>
                        <li><code>cargo install ripgrep</code></li>
                    </ul>

                </div>

            </section>

        </div>
    )
}

export default Ripgrep
