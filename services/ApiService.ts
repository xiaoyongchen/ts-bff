import { IApi } from '../interface';

class ApiService implements IApi{
  getInfo() {
    return new Promise<string>((resolve) => {
      resolve('请求的结果');
    });
  }
}

export default ApiService;
