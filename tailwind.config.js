module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/components-v2/**/*.{js,ts,jsx,tsx}',
        './src/blocks/**/*.{js,ts,jsx,tsx}',
        './src/blocks-v2/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        colors: {
            black: '#000000',
            white: '#FFFFFF',
            'alpha-black': 'rgba(0, 0, 0, 0.5)',
            'off-white': {
                100: '#FFF9F6',
                200: '#FFF2EA',
                300: '#FFECE1'
            },
            turquoise: '#13BFBF',
            yellow: '#FF9E00',
            pink: '#FF99F5',
            orange: '#FF6840',
            green: '#23CC5B',
            blue: '#527DFF',
            purple: '#9357F2',
            sky: '#3FBFFF',
            gray: {
                100: '#F7F7F7',
                200: '#EEEEEE',
                300: '#CFCFCF',
                400: '#999999',
                500: '#777777',
                600: '#444444',
                700: '#333333',
                800: '#222222',
                900: '#111111'
            },
            primary: {
                100: '#FFF0E5',
                200: '#FBE0CC',
                400: '#FCA670',
                900: '#D65A01',
                contrast: '#38445C'
            },
            contrast: '#11192F',
            green: {
                100: '#15803D',
                200: '#BBF7D0',
                900: '#15803D'
            },
            lime: {
                200: '#D9F99D'
            },
            amber: {
                100: '#FEF3C7',
                200: '#FDE68A',
                900: '#F59E0B'
            },
            red: {
                200: '#FECACA'
            },
            purple: {
                200: '#EDE5FF'
            }
        },
        fontSize: {
            '10xl': [
                '7rem',
                {
                    lineHeight: '6.3rem'
                }
            ],
            '9xl': [
                '6rem',
                {
                    lineHeight: '5.4rem'
                }
            ],
            '8xl': [
                '5rem',
                {
                    lineHeight: '4.5rem'
                }
            ],
            '7xl': [
                '4rem',
                {
                    lineHeight: '3.6rem'
                }
            ],
            '6xl': [
                '3.5rem',
                {
                    lineHeight: '3.15rem'
                }
            ],
            '5xl': [
                '3rem',
                {
                    lineHeight: '2.7rem'
                }
            ],
            '4xl': [
                '2.5rem',
                {
                    lineHeight: '2.5rem'
                }
            ],
            '3xl': [
                '2.25rem',
                {
                    lineHeight: '2.25rem'
                }
            ],
            '2xl': [
                '2rem',
                {
                    lineHeight: '2rem'
                }
            ],
            xl: [
                '1.5rem',
                {
                    lineHeight: '1.7rem'
                }
            ],
            lg: [
                '1.25rem',
                {
                    lineHeight: '1.6rem'
                }
            ],
            base: [
                '1.125rem',
                {
                    lineHeight: '1.5rem'
                }
            ],
            sm: [
                '1rem',
                {
                    lineHeight: '1.25rem'
                }
            ],
            xs: [
                '0.75rem',
                {
                    lineHeight: '1rem'
                }
            ]
        },
        extend: {
            fontFamily: {
                inter: ['Inter, Helvetica, Arial, sans-serif'],
                nuform: ['Nuform Sans', 'sans-serif']
            },
            borderRadius: {
                xxl: '40px'
            },
            backgroundImage: {
                'email-section': 'linear-gradient(180deg, #FFF2EA 50%, #FF99F5 0%)'
            }
        },
        fontWeight: {
            thin: 100,
            extralight: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        }
    },
    plugins: []
}
