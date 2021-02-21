import Application from 'koa';
import compress from 'koa-compress';
import range from 'koa-range';
import post from './router/v1/test/post';
import { MikroORM, RequestContext } from '@mikro-orm/core';

export default class AtlasApp extends Application {
  public async init(): Promise<void> {
    const orm = await MikroORM.init();

    this.use(range);

    this.use(compress({
      filter: (contentType: string) => /text|json|javascript|xml/i.test(contentType),
      threshold: 2048,
      br: false,
    }));

    this.use((_, next) => RequestContext.createAsync(orm.em, next));

    this.use(post.middleware());
  }
}