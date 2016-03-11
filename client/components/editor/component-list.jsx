import React from 'react';
export default class Componentlist extends  React.Component {
    constructor(props) {
        super(props);
    }
    onClickHandler(e) {
        //debugger;
        try {
            let dataConfig = JSON.parse(e.target.getAttribute('data-config'));
            this.props.onToAdd(dataConfig);
        }
        catch(exception) {
            throw new Error('parse json in Componentlist');
        }
    }
    render() {
        let that = this;
        return (
            <div className="c-list">
                <ul>
                    <li onClick={this.onClickHandler.bind(that)} data-config={JSON.stringify({name:'card-1'})}>组件1</li>
                    <li onClick={this.onClickHandler.bind(that)} data-config={JSON.stringify({name:'card-2'})}>组件2</li>
                    <li onClick={this.onClickHandler.bind(that)} data-config={JSON.stringify({name:'card-3'})}>组件3</li>
                    <li onClick={this.onClickHandler.bind(that)} data-config={JSON.stringify({name:'card-4'})}>组件4</li>
                    <li onClick={this.onClickHandler.bind(that)} data-config={JSON.stringify({name:'card-5'})}>组件5</li>
                </ul>
            </div>
        );
    }
}