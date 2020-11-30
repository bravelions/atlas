import createRouter, { Joi } from 'koa-joi-router';

const post = createRouter().route({
  method: 'POST',
  path: '/name',
  validate: {
    body: {
      name: Joi.string().max(100),
    },
    type: 'form',
    output: {
      200: {
        body: {
          message: Joi.string(),
        }
      }
    }
  },
  handler: async (ctx) => {
    ctx.status = 200;
    ctx.body = { message: `Hello ${ ctx.request.body.name }` };
  },
});

export default post;