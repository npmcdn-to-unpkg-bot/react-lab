import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { hashHistory, browserHistory } from 'react-router';
import Layout from './layout.jsx';
import Home from './routes/home/index.jsx';
import App from './components/app/app.jsx';
import Page1 from './components/app/page.jsx';
import Page2 from './components/app/page2.jsx';
import Default from './components/app/default.jsx';
import Editor from './components/editor/index.jsx';
/**
 * hashHistory 是用hash 做路由的
 * browserHistory 是高级浏览器 pushstate, repacestate 实现路由的
 */
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Default}/>
            <Route path="/page1" component={Page1}></Route>
            <Route path="/page2" component={Page2}></Route>
        </Route>
        <Route  path="/editor" component={Editor}></Route>
    </Router>
)

export default routes