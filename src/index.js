import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bulma/css/bulma.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Main from './components/Main';
import NeoVim from './components/NeoVim';
import Bat from './components/Bat';
import Lsd from './components/Lsd';
import Ripgrep from './components/Ripgrep';
import Kitty from './components/Kitty';
import Fish from './components/Fish';
import VimPlug from './components/VimPlug';
import CocNvim from './components/CocNvim';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path = "/" component = {Main} />
                <Route exact path = "/NeoVim" component = {NeoVim} />
                <Route exact path = "/Bat" component = {Bat} />
                <Route exact path = "/Lsd" component = {Lsd} />
                <Route exact path = "/Ripgrep" component = {Ripgrep} />
                <Route exact path = "/Kitty" component = {Kitty} />
                <Route exact path = "/Fish" component = {Fish} />
                <Route exact path = "/VimPlug" component = {VimPlug} />
                <Route exact path = "/CocNvim" component = {CocNvim} />
            </Switch>
        </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
