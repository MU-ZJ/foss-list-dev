function Kitty() {
    return(
        <div>

            <h1 className="title has-text-centered">Kitty Terminal Emulator</h1>

            <section className="section is-small">

                <div className="content has-text-centered">

                    <p>
                        Kitty is a GPU accelerated terminal emulator focused primarily on speed and reduced system load, but also improved aesthetics and functionality over other GPU based terminals such as <a href="https://github.com/alacritty/alacritty">Alacritty</a>. Kitty supports images, unicode, true-color, ligatures, mouse protocol, hyperlinks, focus tracking, bracketed paste, splits, tabs, transparency (if the system has a compositor), and more.
                    </p>

                </div>

                <div className="content">

                    <p>Website: <a href="https://sw.kovidgoyal.net/kitty/">https://sw.kovidgoyal.net/kitty/</a></p>

                    <p>GitHub: <a href="https://github.com/kovidgoyal/kitty">https://github.com/kovidgoyal/kitty</a></p>
                
                </div>

                <div className="content">

                    <p className="title has-text-centered">Installation</p>

                    <p className="title">Linux</p>

                    <p className="subtitle">Arch Linux</p>

                    <ul>
                        <li><code>pacman -S kitty</code></li>
                    </ul>

                    <p className="subtitle">Fedora</p>

                    <ul>
                        <li><code>dnf install kitty</code></li>
                    </ul>

                    <p className="subtitle">Ubuntu</p>

                    <ul>
                        <li><code>apt install kitty</code></li>
                    </ul>

                    <p className="subtitle">OpenSUSE</p>

                    <ul>
                        <li><code>zypper install kitty</code></li>
                    </ul>

                    <p className="subtitle">Void Linux</p>

                    <ul>
                        <li><code>sudo xbps-isntall -S kitty</code></li>
                    </ul>

                    <p className="subtitle">Solus</p>

                    <ul>
                        <li><code>sudo eopkg install kitty</code></li>
                    </ul>

                    <p className="subtitle">Nix</p>

                    <ul>
                        <li><code>nix-env -iA nixpkgs.kitty</code></li>
                    </ul>

                    <p className="title">MacOS</p>

                    <p className="subtitle">Homebrew</p>

                    <ul>
                        <li><code>brew install --cask kitty</code></li>
                    </ul>

                </div>

            </section>

        </div>
    )
}

export default Kitty
