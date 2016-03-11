/**
 * 负责组件列表，相当于页面json的cards
 *
 */
import { combineReducers } from 'redux';
    //cards for appp container
const getCards = (state = [], action) => {
    let type = action.type;
    switch(type) {
        case 'ADD_COMPONENT':
            return [...state, action.component];
        default: return state;
    }
}

// configs for app form
const getConfigs = (state = [], action) => {
    let type = action.type;
    switch(type) {
        case 'ADD_CONFIG':
            return [...state, action.config];
        default:
            return state;
    }
}
const todoApp = combineReducers({
    cards: getCards,
    configs: getConfigs
});
export default todoApp;