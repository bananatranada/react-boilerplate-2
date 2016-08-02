import color from 'color'

export const breakpoints = {
  sm: '@media (min-width: 768px)',
  md: '@media (min-width: 992px)',
  lg: '@media (min-width: 1200px)',
}

export const colors = {
  backgroundColor: '#FFFFFF',

  primaryDarkText: color('#000000').alpha(.87).rgbString(),
  secondaryDarkText: color('#000000').alpha(.54).rgbString(),
  disabledDarkText: color('#000000').alpha(.38).rgbString(),
  dividerDarkText: color('#000000').alpha(.12).rgbString(),

  primaryLightText: color('#FFFFFF').rgbString(),
  secondaryLightText: color('#FFFFFF').alpha(.7).rgbString(),
  disabledDarkText: color('#FFFFFF').alpha(.5).rgbString(),
  dividerDarkText: color('#FFFFFF').alpha(.12).rgbString(),

}

