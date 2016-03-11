import React from 'react';
export default class Editorheader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let styleObj = {
            height:50,
            width:'100%',
            backgroundColor:'#31708F'
        };
        return (
            <div className="header">
                header
            </div>
        );
    }
}