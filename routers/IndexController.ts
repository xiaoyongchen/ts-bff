import { GET, route } from 'awilix-koa';

@route("/")
class IndexController {
  @route('/')
  @GET()
  async actionList(ctx, next: () => Promise<any>): Promise<any> {
    ctx.body = {
      data: '入口',
    }
  }
}

export default IndexController;
