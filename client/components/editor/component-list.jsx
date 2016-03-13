import React from 'react';
import {PropTypes} from 'react';
import { DragSource, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Comwraper from './com-wraper.jsx';
class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let text = this.props.text;
        return (
            <div><div data-config={JSON.stringify({name:'card-1'})}>卡片</div></div>
        );
    }
}

const ItemTypes = {
    CARD: 'card',
    TUPI: 'tupian'
};
/**
 * Implements the drag source contract.
 */
const cardSource = {
    beginDrag(props) {
        return {
            text: props.text
        }
    },
    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        //debugger;
        props.onToAdd(JSON.stringify({name:'card-1'}));
        if (dropResult) {
            window.alert( // eslint-disable-line no-alert
                `You dropped ${item.text} into ${dropResult.name}!`
            );
        }
    }
};
/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}
const propTypes = {
    text: PropTypes.string.isRequired,
    // Injected by React DnD:
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
};
class DragWraperCom extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { isDragging, connectDragSource } = this.props;
        const { text } = this.props;
        let props = this.props;
        return connectDragSource(
            <div>
                <Card {...props}/>
                I am a draggable card number {text}
                {isDragging && ' (and I am being dragged now)'}
            </div>
        );
    }
}

// add  drag  wraper to component
var DragcomwraperSource = DragSource(ItemTypes.CARD, cardSource, collect)(DragWraperCom);

class Componentlist extends  React.Component {
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
        console.log('Componentlist props', this.props);
        let props = this.props;
        return (
            <div className="c-list">
                <DragcomwraperSource text={'----'} {...props}/>
                <ul>
                    <li onClick={this.onClickHandler.bind(this)}  data-config={JSON.stringify({name:'card-1'})}>组件1</li>
                </ul>
            </div>
        );
    }
}
class ComponentlistDragContext extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let props = this.props;
        return (
            <div className="c-list">
               <Componentlist {...props}/>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    <Comwraper />
                </div>
            </div>
        );
    }
}
export default DragDropContext(HTML5Backend)(ComponentlistDragContext)