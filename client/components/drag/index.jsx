import React from 'react';
import {PropTypes} from 'react';
import { DragSource } from 'react-dnd';
const ItemTypes = {
    CARD: 'card'
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

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isDragging, connectDragSource } = this.props;
        const { text } = this.props;
        return connectDragSource(
            <div>
                I am a draggable card number {text}
                {isDragging && ' (and I am being dragged now)'}
            </div>
        );
    }
}
Card.propTypes = {
    text: PropTypes.string.isRequired,
    // Injected by React DnD:
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
};
//export default Card;
export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);