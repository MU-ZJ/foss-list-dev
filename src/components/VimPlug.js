function VimPlug() {
    return(
        <div>

            <h1 className="title has-text-centered">Vim Plug</h1>

            <section className="section is-small">

                <div className="content has-text-centered">

                    <p>
                        An easy to use plugin manager for Vim and Neovim. After adding the program to the autoload directory, simply put the name of the plugins you want to install in your .vimrc or init.vim using the format <code>Plug 'GitUserName/RepositoryName'</code>, then open Vim/Nvim and run the command <code>:PlugInstall</code>. All plugins listed in your .vimrc/init.vim will be automatically downloaded and installed.
                    </p>

                </div>

                <div className="content">

                    <p>GitHub: <a href="https://github.com/junegunn/vim-plug"></a>https://github.com/junegunn/vim-plug</p>
                
                </div>

                <div className="content">

                    <p className="title has-text-centered">Installation</p>

                    <p>Download Vim Plug from the GitHub and place into your vim/nvim autoload directory.</p>

                    <p className="title">Prerequisites</p>

                    <p>Vim Plug is compatible with both Vim and Neovim</p>

                </div>

            </section>

        </div>
    )
}

export default VimPlug
