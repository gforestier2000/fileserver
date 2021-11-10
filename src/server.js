console.log("File server for Bouygues Telecom Entreprise");

const HOSTNAME = process.env.NODEHOST || '0.0.0.0';
const PORT = process.env.NODEPORT || 4888;

// setup app handle 
const app = require('./app');

// start listening
var listener = app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
    const {port} = listener.address();
    console.log(listener.address());
  });
