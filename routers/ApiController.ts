import { GET, route } from 'awilix-koa';

@route("/api")
class ApiController {
  private apiService: any;
  constructor({ apiService }) {
    this.apiService = apiService;
  }
  @route('list')
  @GET()
  async actionList(ctx, next: () => Promise<any>): Promise<any> {
    const data = this.apiService.getInfo();
    ctx.body = {
      data,
    }
  }
}

export default ApiController;
