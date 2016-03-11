import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import {Link}  from 'react-router';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import './app.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="_namespace">
                <ul>
                    <li><Link to="/page1">Page 1</Link></li>
                    <li><Link to="/page2">Page 2</Link></li>
                    <li><a href="/page1">Page 1</a></li>
                </ul>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    >
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}