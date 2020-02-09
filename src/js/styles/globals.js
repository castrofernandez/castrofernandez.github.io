const white = '#fff';
const textLight = '#4a4a4a';
const textDefault = '#272727';

const primary = '#F14848';
const secondary = '#00FEFE';

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
                back: '#00CBD5',
                prompt: '#00B2BE',
                input: 'rgba(255, 255, 255, 0.4)'
            }
        }
    },
    fonts: {
        pixel: 'pixel, sans-serif',
        pixelCondensed: 'pixel_condensed, sans-serif'
    }
};
