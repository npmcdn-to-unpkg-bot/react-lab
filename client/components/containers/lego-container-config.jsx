import { connect } from 'react-redux';
import Legoconfig from '../editor/lego-config.jsx';

const mapStateToProps = (state) => {
    console.log('ContainerLegoconfig->mapStateToProps', state);
    return {
        configs: state.configs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            console.log(dispatch,'----');
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
const ContainerLegoconfig = connect(
    mapStateToProps,
    mapDispatchToProps
)(Legoconfig)

export default ContainerLegoconfig;