import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import containme from 'containme';
import sizeme from 'sizeme';

import scrolltome from 'scrolltome';
import GLOBALS from '../../../styles/globals';
import { changeSection, changeDevice } from '../../../actions';

const SectionWrapper = styled.section`
    > div {
        min-height: 100vh;
    }

    .section-title {
        display: inline-block;
        margin: 0 0 40px 0;
        font: 400 80px/60px ${GLOBALS.fonts.pixel};
        text-transform: uppercase;

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            font-size: 36px;
            line-height: 30px;
            margin-bottom: 20px;
        }
    }

    .wrapper {
        padding: 120px 70px 80px 70px;
        position: relative;
        z-index: 2;
        font-size: 26px;

        @media (min-width: ${GLOBALS.sizes.smallDesktop}) {
            padding: 80px 40px 40px 90px;
        }

        @media (max-width: ${GLOBALS.sizes.mobile}) {
            padding: 20px;
        }
    }
`;

const isSectionFocused = ({ top, bottom } = {}) => top <= 0 && bottom >= 0;

const Section = ({ id, children, device, changeSection, changeDevice }) => {
    const ref = useRef(null);

    const inViewPortHandler = (data) => isSectionFocused(data) ? changeSection(id) : false;

    useEffect(() => scrolltome.subscribe({
        element: ref.current,
        inViewPortHandler,
        repeat: 'KEEP'
    }), []);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const currentDevice = sizeme.getDeviceType();

            if (currentDevice !== device) {
                changeDevice(device);
            }
        });
    }, []);

    return (
        <SectionWrapper ref={ref}>
            <span id={id} className="anchor" />
            { children }
        </SectionWrapper>
    );
};

Section.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    device: PropTypes.string.isRequired,
    changeSection: PropTypes.func.isRequired,
    changeDevice: PropTypes.func.isRequired
};

export default containme({
    component: Section,
    actions: { changeSection, changeDevice },
    mapStateToProps: ({ device }) => ({ device })
});