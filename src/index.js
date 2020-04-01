const plugin = require('tailwindcss/plugin');

// Components

const asset = require('./components/asset');
const mint = require('./components/mint');

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    ...asset(theme),
    ...mint(theme),
  });
});
