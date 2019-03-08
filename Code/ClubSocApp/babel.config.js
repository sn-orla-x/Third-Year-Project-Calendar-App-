module.exports = function(api) {
  api.cache(true);
  return {
  "presets": ["@babel/preset-env","@babel/preset-react","babel-preset-expo"],
    "plugins": [
      "react-hot-loader/babel",
      "dynamic-import-webpack",
    "@babel/plugin-proposal-object-rest-spread"
 
    ],
  "env":{
    "test":{
      "presets": ["@babel/preset-env","@babel/preset-react","babel-preset-expo"],
    "plugins": [
      "react-hot-loader",
      "dynamic-import-webpack",
    "@babel/plugin-proposal-object-rest-spread"

    ]}
  }
}
};
