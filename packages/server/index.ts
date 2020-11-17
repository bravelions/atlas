import http from 'http-server';
import AtlasServer from './atlas-server';

const start = async () => {
  const port = process.env.PORT && parseInt(process.env.PORT, 10) || 3001;
  const server = new AtlasServer();

  server.listen(port, () => {
    console.log(`> Atlas koa.js app has started on http://localhost:${ port }`);
  });
};

start().catch((error) => {
  console.log('> Atlas koa.js server error', error);
  process.exit(1);
});