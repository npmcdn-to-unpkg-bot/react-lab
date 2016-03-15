import React from 'react';
import ContactFormSimple from './contact-form.jsx';
export default class Legoconfig extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit(data) {
        debugger;
    }
    render() {
        console.log('Legoconfig config---->', this.props);
        return (
            <div className="c-config">
                form config
                <ContactFormSimple onSubmit={this.onSubmit.bind(this)}/>
                -----------<br/>
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