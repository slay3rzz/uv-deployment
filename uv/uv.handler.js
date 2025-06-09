// This file sets up the main UV handler, used by the frontend (served at /uv/uv.handler.js)

import { UVHandler } from '/uv/uv.bundle.js'; // Adjust import path if needed

const uv = new UVHandler({
  prefix: '/service/', // Must match uv.config.js
  bare: 'https://bare.yourdomain.com', // Bare server URL
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  // Other options as needed
});

export default uv;
