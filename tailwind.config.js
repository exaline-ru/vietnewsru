module.exports = {
	purge: [
	'./assets/src/**/*.vue',
	'./layouts/**/*.htm',
	'./pages/**/*.htm',
	'./partials/**/*.htm',	
	],
    theme: {
        colors: {
            primary: {
                lightest: '#079BFB',
                light: '#007BCB',
                default: '#005C97',
                dark: '#004A7A',
                darkest: '#00375B'
            },
            secondary: {
                lightest: '#FF8D8D',
                light: '#DD5656',
                default: '#C53030',
                dark: '#9F1717',
                darkest: '#760000'
            },
            tertiary: {
                lightest: '#FFE9BE',
                light: '#EEC46E',
                default: '#C59431',
                dark: '#8F630C',
                darkest: '#493100'
            },
            grey: {
                lightest: '#EEE',
                light: '#BBB',
                default: '#888',
                dark: '#555',
                darkest: '#222'
            },
            error: '#FF6363',
            white: '#FFFFFF',
            black: '#000000',
            transparent: 'transparent'
        },
        fontFamily: {
            body: ['Roboto','sans-serif'],
            display: ['Roboto', 'sans-serif']
        }
    }
}

module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}
