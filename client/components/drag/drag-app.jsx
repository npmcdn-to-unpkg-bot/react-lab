import React from 'react';
import CardContainer from './index.jsx';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Dustbin from './dustbin.jsx';
/**
 * CardContainer 是对要拖动组件的封装,相当于一个container
 * Dustbin 是被拖动组件的目的容器，
 * 在层要应用的时候，需要加入drag 的context，
 * DragDropContext做链接，这个做测试的时候忘记了，浪费了很长时间
 *
 */
class DragTest extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    <Dustbin />
                </div>
                <CardContainer text={'第一个组件'}/>
                <CardContainer text={'第二个组件'}/>
            </div>
        );
    }
}
export default DragDropContext(HTML5Backend)(DragTest)