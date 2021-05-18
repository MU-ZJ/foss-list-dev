function CocNvim() {
    return(
        <div>

            <h1 className="title has-text-centered">coc.nvim</h1>

            <section className="section is-small">

                <div className="content has-text-centered">

                    <p>
                        A Vim/Neovim plugin allowing the use of third party language extentions for syntax highlighting. After installing the plugin either manually or through a plugin manager, extentions are downloaded from the <a href="https://github.com/neoclide/coc.nvim/wiki/Language-servers">language server</a> using the <code>:CocInstall</code> command in Vim/Nvim. Additional instructions can be found on the coc.nvim and language server GitHub pages.
                    </p>

                </div>

                <div className="content">

                    <p>GitHub: <a href="https://github.com/neoclide/coc.nvim">https://github.com/neoclide/coc.nvim</a></p>
                
                </div>

                <div className="content">

                    <p className="title has-text-centered">Installation</p>

                    <p>Install using Vim Plug by adding <code>Plug 'neoclide/coc.nvim'</code> to your .vimrc/init.vim then running <code>:PlugInstall</code> from Vim/Nvim</p>

                </div>

            </section>

        </div>
    )
}

export default CocNvim
