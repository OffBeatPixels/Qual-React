module.exports = {
  presets: [
    "@babel/preset-env", // Transpile modern JavaScript
    ['@babel/preset-react', {// Transpile JSX
      runtime: 'automatic', // Use automatic runtime for React 17+
    }], 
  ],
  plugins: ["@babel/plugin-transform-modules-commonjs"],
};
