/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-primary': '#69548D',
        'theme-onPrimary': '#FFFFFF',
        'theme-primaryContainer': '#ECDCFF',
        'theme-onPrimaryContainer': '#240E45',
        'theme-secondary': '#635B70',
        'theme-onSecondary': '#FFFFFF',
        'theme-secondaryContainer': '#EADEF7',
        'theme-onSecondaryContainer': '#1F182A',
        'theme-tertiary': '#7F525C',
        'theme-onTertiary': '#FFFFFF',
        'theme-tertiaryContainer': '#FFD9E0',
        'theme-onTertiaryContainer': '#32101A',
        'theme-error': '#BA1A1A',
        'theme-onError': '#FFFFFF',
        'theme-errorContainer': '#FFDAD6',
        'theme-onErrorContainer': '#410002',
        'theme-background': '#FEF7FF',
        'theme-onBackground': '#1D1B20',
        'theme-surface': '#FEF7FF',
        'theme-onSurface': '#1D1B20',
        'theme-surfaceVariant': '#E8E0EB',
        'theme-onSurfaceVariant': '#49454E',
        'theme-outline': '#7A757F',
        'theme-outlineVariant': '#CBC4CF',
        'theme-scrim': '#000000',
        'theme-inverseSurface': '#322F35',
        'theme-inverseOnSurface': '#F5EEF7',
        'theme-inversePrimary': '#D4BBFC',
        'theme-primaryFixed': '#ECDCFF',
        'theme-onPrimaryFixed': '#240E45',
        'theme-primaryFixedDim': '#D4BBFC',
        'theme-onPrimaryFixedVariant': '#513C74',
        'theme-secondaryFixed': '#EADEF7',
        'theme-onSecondaryFixed': '#1F182A',
        'theme-secondaryFixedDim': '#CDC2DB',
        'theme-onSecondaryFixedVariant': '#4B4357',
        'theme-tertiaryFixed': '#FFD9E0',
        'theme-onTertiaryFixed': '#32101A',
        'theme-tertiaryFixedDim': '#F1B7C4',
        'theme-onTertiaryFixedVariant': '#643B45',
        'theme-surfaceDim': '#DED8E0',
        'theme-surfaceBright': '#FEF7FF',
        'theme-surfaceContainerLowest': '#FFFFFF',
        'theme-surfaceContainerLow': '#F8F1F9',
        'theme-surfaceContainer': '#F3ECF4',
        'theme-surfaceContainerHigh': '#EDE6EE',
        'theme-surfaceContainerHighest': '#E7E0E8'
      }
    },
  },
  plugins: [],
}

