
  export type Colors = keyof typeof Tokens.colors
  export type FontSize = keyof typeof Tokens.fontSizes
  export type Shadows = keyof typeof Tokens.boxShadows

  export type Token = Colors | FontSize | Shadows

  export const Tokens = {
  colors: {
    purple: {
      '50': '#c8bbf0',
      '100': '#bdadec',
      '200': '#a08ae4',
      '300': '#8b71de',
      '400': '#7758d9',
      '500': '#633fd3',
      '600': '#532dc6',
      '700': '#4828ad',
      '800': '#3e2294',
      '900': '#331c7b',
      base: '#633fd3',
    },
    blue: {
      '50': '#aebae2',
      '100': '#94a4d9',
      '200': '#798dd0',
      '300': '#5f77c6',
      '400': '#4a65bf',
      '500': '#3c55a9',
      '600': '#33488f',
      '700': '#22305f',
      '800': '#182345',
      '900': '#0f152b',
      base: '#3C55A9',
    },
    background: {
      '50': '#2800be',
      '100': '#21009b',
      '200': '#190077',
      '300': '#120053',
      '400': '#0c0037',
      '500': '#040013',
      '600': '#000000',
      '700': '#000000',
      '800': '#000000',
      '900': '#000000',
      base: '#040013',
    },
    gray: {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#f0f0f0',
      '300': '#dedede',
      '400': '#d0d0d0',
      '500': '#bebebe',
      '600': '#acacac',
      '700': '#8c8c8c',
      '800': '#7a7a7a',
      '900': '#686868',
      base: '#BEBEBE',
    },
  },
  fontSizes: {
    sm: '1rem',
    md: '1.2rem',
    lg: '1.4rem',
  },
  fontWeights: {
    light: '200',
    normal: '400',
    bold: '700',
  },
  lineHeights: {
    short: '1',
    normal: '1.5',
    tall: '2',
  },
  boxShadows: {
    sm: '1rem',
    md: '1.2rem',
    lg: '1.4rem',
  },
}
  