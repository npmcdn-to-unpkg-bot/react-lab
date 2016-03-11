import React from 'react';
export default class Legoconfig extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('Legoconfig config---->', this.props);
        return (
            <div className="c-config">
                form config
                {
                    this.props && this.props.configs && this.props.configs.map(function(value, index) {
                        return (
                            <div key={index}>
                                这是配置{value.name}--->{index+1}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}