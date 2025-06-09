// This file configures UV's prefix and encoding/decoding logic for your frontend

self.__uv$config = {
  prefix: '/service/', // Proxy endpoint prefix, update if your backend uses another route
  bare: 'https://tomp.app', // Use your own or public Bare instance
  encodeUrl: Ultraviolet.codec.xor.encode, // Default encoding (xor is standard)
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/uv/uv.handler.js', // Handler script path (see below)
  client: '/uv/uv.bundle.js',   // Ultraviolet client bundle
  injected: '/uv/uv.inject.js', // Optional: for injected scripts
  // Additional config options can go here
};
