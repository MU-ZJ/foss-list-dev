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

                    <ul>
                        <li>Stable release: <code>choco install neovim</code></li>
                        <li>Development build: <code>choco install neovim --pre</code></li>
                    </ul>

                    <p>Scoop:</p>

                    <ul>
                        <li>Stable Release: <code>scoop install neovim</code></li>
                        <li>Development build: <code><br />scoop bucket add versions<br />scoop install neovim-nightly</code></li>
                    </ul>

                    <p className="title">MacOS/OS X</p>

                    <p className="subtitle">Install Using a Package Manager</p>

                    <p>Pre-built archive:</p>
                    
                        <code>curl -LO https://github.com/neovim/neovim/releases/download/nightly/nvim-macos.tar.gz<br />tar xzf nvim-macos.tar.gz<br />./nvim-osx64/bin/nvim</code>

                    <p>Homebrew:</p>

                    <ul>
                        <li>Stable release: <code>brew install neovim</code></li>
                        <li>Development build: <code><br />brew install --HEAD luajit<br />brew install --HEAD neovim</code></li>
                        <li>Update development build: <code>brew reinstall neovim</code></li>
                    </ul>

                    <p>Macports:</p>

                    <ul>
                        <li><code>sudo port selfupdate</code></li>
                        <li><code>sudo port install neovim</code></li>
                    </ul>

                    <p className="title">Linux</p>

                    <p className="subtitle">AppImage ("universal" Linux package)</p>

                    <code>curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage<br />chmod u+x nvim.appimage<br />./nvim.appimage</code>

                    <p className="subtitle">Arch Linux</p>

                    <ul>
                        <li><code>sudo pacman -S neovim</code></li>
                    </ul>
                    Alternatively, Neovim can be also installed using the PKGBUILD <code>neovim-git</code>, available on the <a href="https://wiki.archlinux.org/title/Arch_User_Repository">AUR</a>.
                    <ul>
                        <li>Python module: <code>sudo pacman -S python-pynvim</code></li>
                    </ul>
                    Python 2 and Ruby modules (currently only supported in <code>neovim-git</code>) are available from the <a href="https://wiki.archlinux.org/title/Arch_User_Repository">AUR</a> as <code><a href="https://aur.archlinux.org/packages/python2-neovim-git">python2-neovim</a></code> and <code><a href="https://aur.archlinux.org/packages/ruby-neovim">ruby-neovim</a></code> respectively.

                    <p className="subtitle">CentOS 8/RHEL 8</p>

                    <p>Neovim is available through <a href="https://fedoraproject.org/wiki/EPEL">EPEL (Extra Packages for Enterprise Linux)</a></p>
                    <code>yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm<br />yum install -y neovim python36-neovim<br /># you might need python2-neovim as well on older Fedora releases</code>

                    <p className="subtitle">Clear Linux OS</p>

                    <p>NeoVim is available through the <a href="https://github.com/clearlinux/clr-bundles/blob/master/bundles/neovim">neovim bundle</a></p>
                    <code>sudo swupd bundle-add neovim</code>

                    <p>Python (<code>:python</code>) support is available if the <a href="https://github.com/clearlinux/clr-bundles/blob/master/bundles/python-basic">python-basic bundle</a> is installed.</p>
                    <code>sudo swupd bundle-add python-basic</code>

                    <p className="subtitle">CRUX</p>
                   
                    <p>A CRUX port is available under <code><a href="https://github.com/6c37/crux-ports">6c37/neovim</a></code>, along with ports for other dependencies of Neovim.</p>
                    <p>For instructions on how to install the Python modules, see <code><a href="https://neovim.io/doc/user/provider.html#provider-python">:help provider-python</a></code>.</p>

                    <p className="subtitle">Debian</p>

                    <code>sudo apt-get install neovim</code>

                    <p>Python (<code>:python</code>) support is installable via the package manager on Debian unstable.</p>
                    <code>sudo apt-get install python-neovim<br />sudo apt-get install python3-neovim</code>

                    <p className="subtitle">Exherbo Linux</p>

                    <p>Exhereses for scm and released versions are currently available in repository <code>::medvid</code>. Python client (with GTK+ GUI included) and Qt5 GUI are also available as suggestions:</p>
                    <code>cave resolve app-editors/neovim --take dev-python/neovim-python --take app-editors/neovim-qt</code>

                    <p className="subtitle">Fedora</p>

                    <p>Neovim is in Fedora starting with Fedora 25:</p>
                    <code>sudo dnf install -y neovim python3-neovim</code>

                    <p className="subtitle">Flatpak</p>

                    <p>You can find Neovim on <a href="https://flathub.org/apps/details/io.neovim.nvim">Flathub</a>. Providing you have Flatpak <a href="https://flatpak.org/setup/">set up</a>:</p>
                    <ul>
                        <li><code>flatpak install flathub io.neovim.nvim</code></li>
                        <li><code>flatpak run io.neovim.nvim</code></li>
                    </ul>

                    <p className="subtitle">Gentoo Linux</p>

                    <p>An ebuild is available in Gentoo's official portage repository:</p>
                    <code>emerge -a app-editors/neovim</code>

                    <p className="subtitle">GNU Linux</p>

                    <code>guix install neovim</code>

                    <p className="subtitle">Nix/NixOS</p>

                    <code>nix-env -iA nixpkgs.neovim</code>

                    <p className="subtitle">Mageia 7</p>

                    <code>urpmi neovim</code>

                    <p>To install the Python modules:</p>
                    <code>urpmi python2-pynvim python3-pynvim</code>

                    <p className="subtitle">OpenSUSE</p>

                    <code>sudo zypper in neovim</code>

                    <p>To install the Python modules:</p>
                    <code>sudo zypper in python-neovim python3-neovim</code>

                    <p className="subtitle">PLD Linux</p>

                    <ul>
                        <li><code>poldek -u neovim</code></li>
                        <li><code>poldek -u python-neovim python3-neovim</code></li>
                        <li><code>poldek -u python-neovim-gui python3-neovim-gui</code></li>
                    </ul>

                </div>
            
            </section>

        </div>
    )
}

export default NeoVim
