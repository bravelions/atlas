import Application from 'koa';
import compress from 'koa-compress';
import range from 'koa-range';
import post from './router/v1/test/post';

export default class AtlasApp extends Application {

  constructor() {
    super();

    this.use(range);

    this.use(compress({
      filter: (contentType: string) => /text|json|javascript|xml/i.test(contentType),
      threshold: 2048,
      br: false,
    }));

    this.use(post.middleware());
  }
}