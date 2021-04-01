import * as Koa from 'koa';
// 注入服务，设置一些单例之类的。
const { createContainer, Lifetime } = require('awilix');
const { loadControllers, scopePerRequest } = require('awilix-koa');

const app = new Koa();

// 容器
const container = createContainer();

// 1.load 所有的service模块
container.loadModules([__dirname + '/services/*.ts'], {
  // 不区分大小写模块名, 对应的service文件映射成一个实例;
  formatName: 'camelCase',
  // 每次都生成一个实例
  resolverOptions: {
    lifetime: Lifetime.SCOPED,
  }
});

// 2.控制器作用到service中
app.use(scopePerRequest(container));

// 3.控制器没有运行,装载控制器
app.use(loadControllers(__dirname+"/routers/*.ts"));

app.listen(3000, () => {
  console.log('BFF启动成功');
});
