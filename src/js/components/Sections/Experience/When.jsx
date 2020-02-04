import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { basicContent, line, trailComma } from './BasicContent';
import Number from './Number';
import Desc from './Desc';

const WhenWrapper = styled.h4`
    ${basicContent};
    ${line};
    ${trailComma};
`;

const getFragment = (key, value) => (<WhenWrapper><Desc>{key}</Desc><Number>{value}</Number></WhenWrapper>);

const When = ({ from, to }) => (
    <React.Fragment>
        { getFragment('from', from) }
        { to ? getFragment('to', to) : <React.Fragment /> }
    </React.Fragment>
);

When.propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number
};

export default When;
