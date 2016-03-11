import { connect } from 'react-redux';
import Legocontainer from '../editor/container.jsx';

const mapStateToProps = (state) => {
    console.log('ContainerLegocontainer mapStateToProps->', state);
    return {
        cards: state.cards
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            //console.log(dispatch,'----',id);
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