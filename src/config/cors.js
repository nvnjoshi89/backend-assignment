export default {
  // origin: 'https://f07f-27-34-54-143.in.ngrok.io',
  origin: 'http://192.168.10.64:3000',
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization', 'RefreshToken'],
  exposedHeaders: ['Content-Length', 'Content-Type', 'RefreshToken', 'Token'],
};
