function Bat() {
    return(
        <div>

            <h1 className="title has-text-centered">Bat</h1>

                <section className="section is-small">
              
                    <div className="content has-text-centered">

                        <p>
                            A modern <code>cat</code> clone with syntax highlighting and Git integration.
                        </p>

                    </div>

                    <div className="content">

                        <p>GitHub: <a href="https://github.com/sharkdp/bat">https://github.com/sharkdp/bat</a></p>            

                    </div>

                    <div className="content">

                        <p className="title has-text-centered">Installation</p>

                        <p className="title">Linux</p>

                        <p className="subtitle">Ubuntu</p>

                        <ul>
                            <li><code>apt install bat</code></li>
                        </ul>

                        <p className="subtitle"><code>.deb</code> package</p>
                        
                        <ul>
                            <li><code>sudo dpkg -i bat_0.18.1_amd64.deb  # adapt version number and architecture</code></li>
                        </ul>
                        
                        <p className="subtitle">Alpine Linux</p>

                        <ul>
                            <li><code>apk add bat</code></li>
                        </ul>

                        <p className="subtitle" title="btw-I-use-Arch">Arch Linux</p>

                        <ul>
                            <li><code>pacman -S bat</code></li>
                        </ul>

                        <p className="subtitle">Fedora</p>

                        <ul>
                            <li><code>dnf install bat</code></li>
                        </ul>

                        <p className="subtitle" title="install-gentoo">Gentoo</p>
                        
                        <ul>
                            <li><code>emerge sys-apps/bat</code></li>
                        </ul>

                        <p className="subtitle">Void Linux</p>
                        
                        <ul>
                            <li><code>xbps-install -S bat</code></li>
                        </ul>

                        <p className="subtitle">Termux</p>

                        <ul>
                            <li><code>pkg install bat</code></li>
                        </ul>

                        <p className="subtitle">Nix</p>

                        <ul>
                            <li><code>nix-env -i bat</code></li>
                        </ul>

                        <p className="subtitle">openSUSE</p>

                        <ul>
                            <li><code>zypper install bat</code></li>
                        </ul>

                        <p className="title">BSD</p>

                        <p className="subtitle">FreeBSD</p>

                        <ul>
                            <li><code>pkg install bat</code></li>
                        </ul>

                        <p>or build it on your own from the FreeBSD ports:</p>
                        <ul>
                            <li><code>cd /usr/ports/textproc/bat</code></li>
                            <li><code>make install</code></li>
                        </ul>

                        <p className="title">MacOS</p>

                        <p className="subtitle">Homebrew</p>

                        <ul>
                            <li><code>brew install bat</code></li>
                        </ul>

                        <p className="subtitle">Macports</p>

                        <ul>
                            <li><code>port install bat</code></li>
                        </ul>

                        <p className="title">Windows</p>

                        <p>Prerequisites:</p>
                        <ul>
                            <li><a href="https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads">Visual C++ Redistributable</a></li>
                        </ul>

                        <p className="subtitle">Chocolatey</p>

                        <ul>
                            <li><code>choco install bat</code></li>
                        </ul>

                        <p className="subtitle">Scoop</p>

                        <ul>
                            <li><code>scoop install bat</code></li>
                        </ul>

                        <p>Additional instructions from the Github are required to use <code>bat</code> on Windows.</p>                

                    </div>

                </section>    

        </div>
    )
}

export default Bat
