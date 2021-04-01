import { GET, route } from 'awilix-koa';

@route("/api")
class ApiController {
  private apiService;
  constructor({ apiService }) {
    this.apiService = apiService;
  }
  @route("/list")
  @GET()
  async actionList(ctx, next: () => Promise<any>): Promise<any> {
    const data = await this.apiService.getInfo();
    ctx.body = {
      data,
    }
  }
}

export default ApiController;
