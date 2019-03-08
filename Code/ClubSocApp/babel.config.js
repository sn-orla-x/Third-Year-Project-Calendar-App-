module.exports = function(api) {
  api.cache(true);
  return {
  "presets": ["@babel/preset-env","@babel/preset-react"],
    "plugins": [
      "react-hot-loader/babel",
      "transform-object-rest-spread",
      "transform-class-properties",
      "dynamic-import-webpack"
    ],
  "env":{
    "test":{
      "presets": ["@babel/preset-env","@babel/preset-react"],
    "plugins": [
      "transform-object-rest-spread",
      "transform-class-properties",
      "dynamic-import-webpack"
    ]}
  }
}
};
