import { lighten } from 'polished';

const white = '#FFFFFF';
const textLight = '#4A4A4A';
const textDefault = '#272727';

const primary = '#F14848';
const secondary = '#00FEFE';
const terminalBack = '#00CBD5';
const prompt = '#00B2BE';

export default {
    sizes: {
        mobile: '767px',
        tablet: '1023px',
        tabletLandscape: '1024px',
        smallDesktop: '1300px'
    },
    colours: {
        primary,
        secondary,
        white,
        text: {
            default: textDefault,
            light: '#343434',
            lighter: textLight,
            lightest: '#c8c8c8'
        },
        link: {
            default: '#F7D358',
            hover: '#DEAE0C'
        },
        ide: {
            keyword: 'rgba(0, 254, 254, 0.2)',
            number: '#FA58D0',
            key: 'rgba(255, 255, 255, 0.6)'
        },
        sections: {
            intro: {
                fore: textLight,
                back: white
            },
            experience: {
                fore: secondary,
                back: textDefault
            },
            studies: {
                fore: white,
                back: '#FB93E0',
                prompt,
                input: 'rgba(255, 255, 255, 0.4)'
            },
            projects: {
                fore: primary,
                back: textDefault,
                box: lighten(0.1, textDefault)
            },
            footer: {
                fore: prompt,
                back: terminalBack,
                twitter: '#1dA1F2',
                linkedin: '#0077b5',
                github: textDefault
            },
            mobileMenu: {
                fore: white,
                back: terminalBack
            }
        }
    },
    fonts: {
        pixel: 'pixel, sans-serif',
        pixelCondensed: 'pixel_condensed, sans-serif'
    }
};
