// SurakshaYatri Design System - Color Tokens
// Sourced directly from the Stitch project design theme

export const Colors = {
  // Brand Backgrounds (Warm Cream)
  warmBackground: '#FFF8DE',
  warmSurface: '#FFF2C6',

  // Material Color System
  background: '#faf8ff',
  surface: '#faf8ff',
  surfaceBright: '#faf8ff',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f4f3fa',
  surfaceContainer: '#eeedf4',
  surfaceContainerHigh: '#e8e7ef',
  surfaceContainerHighest: '#e3e2e9',
  surfaceDim: '#dad9e1',
  surfaceVariant: '#e3e2e9',
  surfaceTint: '#3c5aab',

  // Primary Blues (Serene & Trust)
  primary: '#3c5aab',
  onPrimary: '#ffffff',
  primaryContainer: '#8ca9ff',
  onPrimaryContainer: '#173b8a',
  primaryFixed: '#dbe1ff',
  primaryFixedDim: '#b3c5ff',
  onPrimaryFixed: '#00184a',
  onPrimaryFixedVariant: '#204291',
  inversePrimary: '#b3c5ff',

  // Secondary Blues
  secondary: '#455f8a',
  onSecondary: '#ffffff',
  secondaryContainer: '#b3cdfe',
  onSecondaryContainer: '#3d5681',
  secondaryFixed: '#d6e3ff',
  secondaryFixedDim: '#adc7f8',
  onSecondaryFixed: '#001b3d',
  onSecondaryFixedVariant: '#2d4771',

  // Tertiary (Warm Gold for accents)
  tertiary: '#755b00',
  onTertiary: '#ffffff',
  tertiaryContainer: '#d0a72c',
  onTertiaryContainer: '#513e00',
  tertiaryFixed: '#ffdf91',
  tertiaryFixedDim: '#edc145',
  onTertiaryFixed: '#241a00',
  onTertiaryFixedVariant: '#594400',

  // Error / SOS (Coral Red - psychological urgency)
  error: '#ba1a1a',
  onError: '#ffffff',
  errorContainer: '#ffdad6',
  onErrorContainer: '#93000a',

  // Surface Text
  onSurface: '#1a1b21',
  onSurfaceVariant: '#444651',
  onBackground: '#1a1b21',

  // Outline
  outline: '#747682',
  outlineVariant: '#c4c6d3',

  // Inverse
  inverseSurface: '#2f3036',
  inverseOnSurface: '#f1f0f7',

  // Shadows (soft blue tint)
  shadowPrimary: 'rgba(140, 169, 255, 0.15)',
  shadowPrimaryStrong: 'rgba(140, 169, 255, 0.25)',

  // SOS specific
  sosPulse: 'rgba(186, 26, 26, 0.7)',
};

export const Typography = {
  displayLg: { fontSize: 48, lineHeight: 56, fontWeight: '700', letterSpacing: -0.96 },
  headlineLg: { fontSize: 32, lineHeight: 40, fontWeight: '600', letterSpacing: -0.32 },
  headlineLgMobile: { fontSize: 28, lineHeight: 36, fontWeight: '600' },
  titleMd: { fontSize: 20, lineHeight: 28, fontWeight: '600' },
  bodyLg: { fontSize: 18, lineHeight: 28, fontWeight: '400' },
  bodyMd: { fontSize: 16, lineHeight: 24, fontWeight: '400' },
  labelMd: { fontSize: 14, lineHeight: 20, fontWeight: '500', letterSpacing: 0.14 },
  labelSm: { fontSize: 12, lineHeight: 16, fontWeight: '600', letterSpacing: 0.6 },
};

export const Spacing = {
  base: 8,
  gutter: 16,
  containerPaddingMobile: 20,
  sectionGap: 32,
  cardGap: 20,
};

export const BorderRadius = {
  sm: 8,
  default: 16,
  md: 24,
  lg: 32,
  xl: 48,
  full: 9999,
};

export const Shadows = {
  card: {
    shadowColor: '#8ca9ff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 8,
  },
  cardSm: {
    shadowColor: '#8ca9ff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 4,
  },
};
