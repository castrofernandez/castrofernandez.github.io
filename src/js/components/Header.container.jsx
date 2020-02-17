import { connect } from 'react-redux';

import Header from './Header.component';

const mapStateToProps = ({ section, puzzle }) => ({ section, puzzle });

export default connect(
    mapStateToProps
)(Header);
