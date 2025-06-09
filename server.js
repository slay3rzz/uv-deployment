// Main Node.js server for UV proxy + static files

const express = require('express');
const { UVServer } = require('@titaniumnetwork-dev/ultraviolet');
const path = require('path');

const app = express();
const uv = new UVServer({
  prefix: '/service/', // Must match your frontend config
  bare: 'https://bare.yourdomain.com' // Replace with your own Bare instance or a public one
});

// Proxy endpoint
app.use('/service/', uv.middleware());

// Static serving for UV client files (adjust path as needed)
app.use('/uv/', express.static(path.join(__dirname, 'public', 'uv')));

// (Optional) Serve your tabbed browser front-end
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Ultraviolet proxy running: http://localhost:${port}`);
});
