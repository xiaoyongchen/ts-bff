import { GET, route } from 'awilix-koa';
import { Contenxt } from '../interface/IKoa';

@route("/")
class IndexController {
  @route('/')
  @GET()
  async actionList(ctx: Contenxt, next: () => Promise<any>): Promise<any> {
    ctx.body = await ctx.render('index.html');
  }
}

export default IndexController;
