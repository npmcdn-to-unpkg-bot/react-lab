import React from 'react';
export default class Componentlist extends  React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="c-list">
                <ul>
                    <li>组件1</li>
                    <li>组件2</li>
                    <li>组件3</li>
                    <li>组件4</li>
                    <li>组件5</li>
                </ul>
            </div>
        );
    }
}