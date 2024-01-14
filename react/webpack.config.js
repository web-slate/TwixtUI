module.exports = {
    // ... other configurations ...
  
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        // ... other rules ...
      ],
    },
  
    // If you're using JSX file extension, add this:
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
  