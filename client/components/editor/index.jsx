import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Editorheader from './header.jsx';
//import Componentlist from './component-list.jsx';
import Containercomponentlist from '../containers/container-component-list.jsx';
import ContainerLegocontainer from '../containers/lego-container-todo.jsx';
//import Legoconfig from './lego-config.jsx';
import ContainerLegoconfig from '../containers/lego-container-config.jsx';
import './index.scss';
import todoApp from '../reducers/com-list.jsx';
let store = createStore(todoApp,  window.devToolsExtension ? window.devToolsExtension() : undefined);
export default class Editor extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <div className="_namespace">
                    <Editorheader/>
                    <div className="content">
                        <Containercomponentlist/>
                        <ContainerLegocontainer/>
                        <ContainerLegoconfig/>
                    </div>
                </div>
            </Provider>
        );
    }
}