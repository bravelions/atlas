import Application from "koa";
import Router from "@koa/router";
import app from "../client/index";

const port = process.env.PORT && parseInt(process.env.PORT, 10) || 3000;
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Application();
  const router = new Router();

  router.get('/a', async (ctx) => {
    await app.render(ctx.req, ctx.res, '/a', ctx.query);
    ctx.respond = false;
  });

  router.get('/b', async (ctx) => {
    await app.render(ctx.req, ctx.res, '/b', ctx.query);
    ctx.respond = false;
  });

  router.all('(.*)', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost: ${ port }`);
  });
});
