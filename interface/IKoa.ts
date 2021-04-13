import * as Koa from 'koa';
import * as Render from 'koa-swig';

export interface Context extends Koa.Context {
  render: typeof Render;
}
