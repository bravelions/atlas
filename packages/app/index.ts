import next from 'next';

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: __dirname,
});

export default app;