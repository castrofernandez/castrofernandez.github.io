import { connect } from 'react-redux';

import Header from './Header.component';

const mapStateToProps = ({ section }) => ({ section });

export default connect(
    mapStateToProps
)(Header);
