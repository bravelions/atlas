import AtlasApp from './app';

const start = async () => {
  const port = process.env.PORT && parseInt(process.env.PORT, 10) || 3001;
  const server = new AtlasApp();

  server.listen(port, () => {
    console.log(`> Atlas server ready on http://localhost:${ port }`);
  });
};

start().catch((error) => {
  console.log('> Atlas server error', error);
  process.exit(1);
});