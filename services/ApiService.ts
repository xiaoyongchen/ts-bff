class ApiService {
  getInfo() {
    return new Promise((resolve) => {
      return resolve('请求的结果');
    });
  }
}

export default ApiService;
