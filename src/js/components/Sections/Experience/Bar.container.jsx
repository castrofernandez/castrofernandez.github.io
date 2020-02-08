import { connect } from 'react-redux';

import Bar from './Bar.component';

const mapStateToProps = ({ section }) => ({ section });

export default connect(
    mapStateToProps
)(Bar);
