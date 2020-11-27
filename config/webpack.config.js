const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const getAddons = (addonArguments) => {
  const addons = Array.isArray(addonArguments) ? addonArguments : [addonArguments];

  return addons.filter(Boolean).map((name) => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ mode = 'production', addon }) => {
  const modeConfig = require(`./webpack.${mode}.js`);

  return merge(commonConfig, modeConfig, ...getAddons(addon));
};
