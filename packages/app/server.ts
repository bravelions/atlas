import next from 'next';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = next({ dev: process.env.NODE_ENV !== 'production', dir: __dirname });
const port = process.env.PORT && parseInt(process.env.PORT, 10) || 3000;
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/api', () => createProxyMiddleware({ target: process.env.API_HOST, changeOrigin: false }));

  server.all('*', async (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`> Ready on http://localhost: ${ port }`);
  });
});
