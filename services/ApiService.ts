import { IApi } from '../interface';

class ApiService implements IApi{
  getInfo() {
    return new Promise<string>((resolve) => {
      resolve('后台请求的结果');
    });
  }
}

export default ApiService;
