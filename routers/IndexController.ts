import { GET, route } from 'awilix-koa';
import { Context } from '../interface/IKoa';

@route("/")
class IndexController {
  @route('/')
  @GET()
  async actionList(ctx: Context, next: () => Promise<any>): Promise<any> {
    ctx.body = await ctx.render('index.html');
  }
}

export default IndexController;
