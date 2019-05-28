import { connect } from 'react-redux';

import Level from './Level.component';

const mapStateToProps = function(state) {
    return {
        level: state.level
    };
};

export default connect(
    mapStateToProps
)(Level);
