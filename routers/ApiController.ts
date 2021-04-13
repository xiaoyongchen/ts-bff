import { GET, route } from 'awilix-koa';
import { IApi } from '../interface';
import { Context } from '../interface/IKoa';

@route("/api")
class ApiController {
  private apiService: IApi;
  constructor({ apiService }) {
    this.apiService = apiService;
  }
  @route("/list")
  @GET()
  async actionList(ctx: Context, next: () => Promise<any>): Promise<any> {
    const data = await this.apiService.getInfo();
    ctx.body = {
      data,
    }
  }
}

export default ApiController;
