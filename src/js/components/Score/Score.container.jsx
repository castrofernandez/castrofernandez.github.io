import { connect } from 'react-redux';

import Score from './Score.component';

const mapStateToProps = function(state) {
    return {
        score: state.score
    };
};

export default connect(
    mapStateToProps
)(Score);
