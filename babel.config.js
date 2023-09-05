module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"], // Set this to your preferred root directory
          alias: {
            components: "./components", // Example alias
            screens: "./screens", // Another example alias
            assets: "./assets",
          },
        },
      ],
      "expo-router/babel",
    ],
  };
};
