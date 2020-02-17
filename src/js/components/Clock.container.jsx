import { connect } from 'react-redux';

import Clock from './Clock.component';

const mapStateToProps = ({ section, puzzle }) => ({ section, puzzle });

export default connect(
    mapStateToProps
)(Clock);
