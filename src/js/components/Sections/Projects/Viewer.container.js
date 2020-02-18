import { connect } from 'react-redux';

import Viewer from './Viewer.component';

const mapStateToProps = function(state) {
    return {
        device: state.device
    };
};

export default connect(
    mapStateToProps
)(Viewer);
