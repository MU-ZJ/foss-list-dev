function NeoVim() {
    return (
        <div>
                
            <h1 className="title has-text-centered">Neovim</h1>
            
            <section className="section is-small">

                <div className="content has-text-centered">

                    <p>
                        A fork of the Vim text editor with additional features added, and easier plugin integration.
                    </p>

                </div>

                <div className="content">

                    <p>Website: <a href="https://neovim.io/">https://neovim.io/</a></p>

                    <p>GitHub Repo: <a href="https://github.com/neovim/neovim">https://github.com/neovim/neovim</a></p>

                </div>

                <div className="content">

                    <p className="title has-text-centered">Installation</p>

                    <p className="title">Install From Download</p>

                    <p>Packages are listed on the GitHub releases page.</p>

                    <p className="title">Windows</p>
                    
                    <p className="subtitle">Install Using a Package Manager</p>

                    <p>Chocolatey:</p>

                    <p>Stable release:</p>
                    <ul>
                        <li> <code>choco install neovim</code></li>
                    </ul>
                    <p>Development build:</p>
                    <ul>
                        <li><code>choco install neovim --pre</code></li>
                    </ul>

                    <p>Scoop:</p>

                    <p>Stable Release:</p>
                    <ul>
                        <li><code>scoop install neovim</code></li>
                    </ul>
                    <p>Development build:</p>
                    <ul>
                        <li><code>scoop bucket add versions</code></li>
                        <li><code>scoop install neovim-nightly</code></li>
                    </ul>

                    <p className="title">MacOS/OS X</p>

                    <p>Pre-built archive:</p>
                    
                        <ul>
                            <li><code>curl -LO https://github.com/neovim/neovim/releases/download/nightly/nvim-macos.tar.gz</code></li>
                            <li><code>tar xzf nvim-macos.tar.gz</code></li>
                            <li><code>./nvim-osx64/bin/nvim</code></li>
                        </ul>                

                    <p className="subtitle">Install Using a Package Manager</p>

                    <p>Homebrew:</p>

                    <p>Stable release:</p>            
                    <ul>
                        <li><code>brew install neovim</code></li>
                    </ul>

                    <p>Development build:</p>
                    <ul>
                        <li><code>brew install --HEAD luajit</code></li>
                        <li><code>brew install --HEAD neovim</code></li>
                    </ul>

                    <p>Macports:</p>

                    <ul>
                        <li><code>sudo port selfupdate</code></li>
                        <li><code>sudo port install neovim</code></li>
                    </ul>

                    <p className="title">Linux</p>

                    <p className="subtitle">AppImage ("universal" Linux package)</p>
                    <ul>
                        <li><code>curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage</code></li>
                        <li><code>chmod u+x nvim.appimage</code></li>
                        <li><code>./nvim.appimage</code></li>
                    </ul>

                    <p className="subtitle">Arch Linux</p>

                    <ul>
                        <li><code>sudo pacman -S neovim</code></li>
                    </ul>

                    <p>Alternatively, Neovim can be also installed using the PKGBUILD <code>neovim-git</code>, available on the <a href="https://wiki.archlinux.org/title/Arch_User_Repository">AUR</a>.</p>
                    <ul>
                        <li>Python module: <code>sudo pacman -S python-pynvim</code></li>
                    </ul>

                    <p>Python 2 and Ruby modules (currently only supported in <code>neovim-git</code>) are available from the <a href="https://wiki.archlinux.org/title/Arch_User_Repository">AUR</a> as <code><a href="https://aur.archlinux.org/packages/python2-neovim-git">python2-neovim</a></code> and <code><a href="https://aur.archlinux.org/packages/ruby-neovim">ruby-neovim</a></code> respectively.</p>

                    <p className="subtitle">CentOS 8/RHEL 8</p>

                    <p>Neovim is available through <a href="https://fedoraproject.org/wiki/EPEL">EPEL (Extra Packages for Enterprise Linux)</a></p>
                    <ul>
                        <li><code>yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm</code></li>
                        <li><code>yum install -y neovim python36-neovim</code></li>
                        <li><code># you might need python2-neovim as well on older Fedora releases</code></li>
                    </ul>
                    

                    <p className="subtitle">Clear Linux OS</p>

                    <p>NeoVim is available through the <a href="https://github.com/clearlinux/clr-bundles/blob/master/bundles/neovim">neovim bundle</a></p>
                    <ul>
                        <li><code>sudo swupd bundle-add neovim</code></li>
                    </ul>

                    <p>Python (<code>:python</code>) support is available if the <a href="https://github.com/clearlinux/clr-bundles/blob/master/bundles/python-basic">python-basic bundle</a> is installed.</p>
                    <ul>
                        <li><code>sudo swupd bundle-add python-basic</code></li>
                    </ul>

                    <p className="subtitle">Debian</p>
                    <ul>
                        <li><code>sudo apt-get install neovim</code></li>
                    </ul>
                    
                    <p>Python (<code>:python</code>) support is installable via the package manager on Debian unstable.</p>
                    <ul>
                        <li><code>sudo apt-get install python-neovim</code></li>
                        <li><code>sudo apt-get install python3-neovim</code></li>
                    </ul>

                    <p className="subtitle">Exherbo Linux</p>

                    <p>Exhereses for scm and released versions are currently available in repository <code>::medvid</code>. Python client (with GTK+ GUI included) and Qt5 GUI are also available as suggestions:</p>
                    <ul>
                        <li><code>cave resolve app-editors/neovim --take dev-python/neovim-python --take app-editors/neovim-qt</code></li>
                    </ul>

                    <p className="subtitle">Fedora</p>

                    <p>Neovim is in Fedora starting with Fedora 25:</p>
                    <ul>
                        <li><code>sudo dnf install -y neovim python3-neovim</code></li>
                    </ul>

                    <p className="subtitle">Flatpak</p>

                    <p>You can find Neovim on <a href="https://flathub.org/apps/details/io.neovim.nvim">Flathub</a>. Providing you have Flatpak <a href="https://flatpak.org/setup/">set up</a>:</p>
                    <ul>
                        <li><code>flatpak install flathub io.neovim.nvim</code></li>
                        <li><code>flatpak run io.neovim.nvim</code></li>
                    </ul>

                    <p className="subtitle">Gentoo Linux</p>

                    <p>An ebuild is available in Gentoo's official portage repository:</p>
                    <ul>
                        <li><code>emerge -a app-editors/neovim</code></li>
                    </ul>

                    <p className="subtitle">GNU Linux</p>
                    <ul>
                        <li><code>guix install neovim</code></li>
                    </ul>

                    <p className="subtitle">Nix/NixOS</p>
                    <ul>
                        <li><code>nix-env -iA nixpkgs.neovim</code></li>
                    </ul>

                    <p className="subtitle">Mageia 7</p>

                    <ul>
                        <li><code>urpmi neovim</code></li>
                    </ul>

                    <p>To install the Python modules:</p>
                    <ul>
                        <li><code>urpmi python2-pynvim python3-pynvim</code></li>
                    </ul>

                    <p className="subtitle">OpenSUSE</p>

                    <ul>
                        <li><code>sudo zypper in neovim</code></li>
                    </ul>

                    <p>To install the Python modules:</p>
                    <ul>
                        <li><code>sudo zypper in python-neovim python3-neovim</code></li>
                    </ul>

                    <p className="subtitle">PLD Linux</p>

                    <ul>
                        <li><code>poldek -u neovim</code></li>
                        <li><code>poldek -u python-neovim python3-neovim</code></li>
                        <li><code>poldek -u python-neovim-gui python3-neovim-gui</code></li>
                    </ul>

                    <p className="subtitle">Source Mage</p>

                    <ul>
                        <li><code>cast neovim</code></li>
                    </ul>

                    <p className="subtitle">Solus</p>

                    <ul>
                        <li><code>sudo eopkg install neovim</code></li>
                    </ul>

                    <p className="subtitle">Snap</p>

                    <p>Stable build:</p>
                    <ul>
                        <li><code>sudo snap install --beta nvim --classic</code></li>
                    </ul>

                    <p>Development build:</p>
                    <ul>
                        <li><code>sudo snap install --edge nvim --classic</code></li>
                    </ul>

                    <p className="subtitle">Ubuntu</p>
                    
                    <ul>
                        <li><code>sudo apt install neovim</code></li>
                    </ul>    

                    <p>Python (<code>:python</code>) support seems to be automatically installed</p>    
                    <ul>
                        <li><code>sudo apt install python-neovim</code></li>
                        <li><code>sudo apt install python3-neovim</code></li>
                    </ul>

                    <p className="subtitle">Void-Linux</p>

                    <ul>
                        <li><code>sudo xbps-install -S neovim</code></li>
                    </ul>

                    <p className="subtitle">Alpine Linux</p>

                    <ul>
                        <li><code>sudo apk add neovim</code></li>
                    </ul>    

                    <p className="title">BSD</p>

                    <p className="subtitle">FreeBSD</p>

                    <ul>
                        <li><code>pkg install neovim</code></li>
                    </ul>
                    
                    <p>or <a href="https://www.freshports.org/editors/neovim/">from the ports tree</a>:</p>
                    <ul>
                        <li><code>cd /usr/ports/editors/neovim/ && make install clean</code></li>
                    </ul>

                    <p>To install the pynvim Python modules using <code><a href="https://www.freebsd.org/cgi/man.cgi?query=pkg&sektion=8&n=1">pkg(8)</a></code> run:</p>
                    <ul>
                        <li><code>pkg install py27-pynvim py36-pynvim</code></li>
                    </ul>

                    <p className="subtitle">OpenBSD</p>

                    <ul>
                        <li><code>pkg_add neovim</code></li>
                    </ul>

                    <p>or <a href="https://cvsweb.openbsd.org/cgi-bin/cvsweb/ports/editors/neovim/">from the ports tree</a>:</p>
                    <ul>
                        <li><code>cd /usr/ports/editors/neovim/ && make install</code></li>
                    </ul>

                    <p className="title">Android</p>

                    <ul>
                        <li><a href="https://play.google.com/store/apps/details?id=com.termux">https://play.google.com/store/apps/details?id=com.termux</a></li>
                    </ul>

                    <p className="title">Install from source</p>

                    <p className="subtitle">Unix</p>

                    <ul>
                        <li><code>make CMAKE_BUILD_TYPE=Release</code></li>
                        <li><code>sudo make install</code></li>
                    </ul>

                    <p className="subtitle">Windows</p>

                    <ul>
                        <li><code>rm -r build/  # clear the CMake cache</code></li>
                        <li><code>make CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=$HOME/neovim"</code></li>
                        <li><code>make install</code></li>
                        <li><code>export PATH="$HOME/neovim/bin:$PATH"</code></li>
                    </ul>

                    <p className="title">Uninstall</p>

                    <ul>
                        <li><code>sudo rm /usr/local/bin/nvim</code></li>
                        <li><code>sudo rm -r /usr/local/share/nvim/</code></li>
                    </ul>
                </div>
            
            </section>

        </div>
    )
}

export default NeoVim
