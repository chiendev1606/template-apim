module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
    // development: {
    //   plugins: ['transform-remove-console'],
    // },
  },
  plugins: [
    // [
    //   'module-resolver',
    //   {
    //     extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
    //     alias: {
    //       '@': './src',
    //     },
    //   },
    // ],
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
};
