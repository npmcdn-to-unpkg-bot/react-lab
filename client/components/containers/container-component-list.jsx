import {connect} from 'react-redux';
import Componentlist from '../editor/component-list.jsx';
/**
 * 传递 值给Componentlist  props
 * @param state 这个是store  全局的state
 * @returns {{props object}}
 */
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToAdd: function(params) {
            dispatch({
                type:'ADD_COMPONENT',
                component:params
            });
        }
    }

}
const Containercomponentlist = connect(mapStateToProps, mapDispatchToProps)(Componentlist);
export default Containercomponentlist;