import { connect } from 'react-redux';
import PresentationComponent from '../PresentationComponent';

const mapStateToProps = (state, props) => {
    return {
        loading: state.loading,
        userName: state.user.name,
        entity: state.collection.entities[props.id],
    };
};

export default connect(mapStateToProps)(PresentationComponent);