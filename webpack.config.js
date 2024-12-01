const path = require('path');

module.exports = {
  entry: './scripts/firebase.js', // Your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js', // Bundled output file
  },
  mode: 'production', // Or 'development' for debugging
};