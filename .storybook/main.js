module.exports = {
  stories: ['../packages/**/*.story.{js,jsx,ts,tsx,mdx}'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  features: {
    previewCsfV3: true,
  },
};
