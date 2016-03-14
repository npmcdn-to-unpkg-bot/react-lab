import React from 'react'
import Focus from '../../dep-components/focus/index.jsx'
import header from '../demo-header/header.jsx'
import './index.scss'
export default class DemoApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="_namespace">
                <Focus/>
            </div>
        );
    }
}