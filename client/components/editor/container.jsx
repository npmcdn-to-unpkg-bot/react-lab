import React from 'react';
import Phone from 'fit-phone';
export default class Legocontainer extends React.Component {
    constructor(props) {
        super(props);
    }
    onClick(e) {
        this.props.onTodoClick('11');
    }
    render() {
        let that = this;
        console.log('props-->',this.props);
        return (
            <div className="c-container">
                {
                    [1,2].map(function(value, index){
                        return (
                            <div key={index} onClick={that.onClick.bind(that)}> 组件-{value}-点我配置form</div>
                        );
                    })
                }
                {
                    this.props && this.props.cards && this.props.cards.map(function(value, index) {
                        return (
                            <div key={index}>{value.name}---{index}</div>
                        );
                    })
                }
            </div>
        );
    }
}