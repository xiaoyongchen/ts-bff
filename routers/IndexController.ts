import { GET, route } from 'awilix-koa';
import * as Router from 'koa-router';

@route("/")
class IndexController {
  @route('/')
  @GET()
  async actionList(ctx: Router.IRouterContext, next: () => Promise<any>): Promise<any> {
    ctx.body = {
      data: '入口',
    }
  }
}

export default IndexController;
