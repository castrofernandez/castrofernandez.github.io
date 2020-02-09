import { connect } from 'react-redux';

import Clock from './Clock.component';

const mapStateToProps = ({ section }) => ({ section });

export default connect(
    mapStateToProps
)(Clock);
