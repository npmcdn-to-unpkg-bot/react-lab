import { connect } from 'react-redux';
import Legocontainer from '../editor/container.jsx';

const mapStateToProps = (state) => {
    console.log('mapStateToProps->', state);
    return {
        configs: state.configs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            console.log(dispatch,'----',id);
            dispatch({
                type: 'ADD_CONFIG',
                config: {
                    name:'json',
                    form: 'config'
                }
            });
        }
    }
}
const ContainerLegocontainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Legocontainer)

export default ContainerLegocontainer;