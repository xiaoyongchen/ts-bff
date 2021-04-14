import * as Koa from 'koa';
import * as Router from '@koa/router';
import logMiddleware from '../middleware/logMiddleware';
import mid2 from '../middleware/mid2';

import * as bodyParser from 'koa-bodyparser';
import * as betterBody from 'koa-better-body'
const app = new Koa();

const router = new Router();

// 1. 动态路由
// router.get('/list/:id', async content => {
//   content.body = {
//     id: content.params.id,
//     time: new Date()
//   }
// });

// 2. 路由分组
const user = new Router({
  prefix: '/users'
});

// next 必须要执行，否则不往下执行
router.get('/detail', async (content, next) => {
  content.info = { name: '老王' };
  await next();
},  async (content, next) => {
  content.time = new Date();
  await next();
}, async content => {
  content.body = {
    info: content.info,
    time: content.time,
  }
});

// 3. 嵌套
const next = new Router();
next.use('/next', router.routes());
user.get('/', async content => {
  content.body = 'group'
});

// 4. 路由重定向, 必须这个路由存在的
// router.get('/router/redirect', async content => {
//   content.redirect('/list');
// });

// 5. 中间件
// 全局中间件
// app.use(logMiddleware());

// 局部中间件, 洋葱模型
// user.get('/router', logMiddleware(), mid2(), async content => {
//   content.body = '自定义中间件';
// });

// 6. 中间测试
router.get('/list', async content => {
  content.body = content.query;
});

router.post('/list', async content => {
  console.log('post', content);
  // console.log(this.request.body); // if buffer or text
  // console.log(this.request.files); // if multipart or urlencoded
  // console.log(this.request.fields); // if json
  content.body = content.request.fields;
});
// bodyParser 不支持表单提交
// app.use(bodyParser());

// 支持表单
app.use(betterBody());
app.use(user.routes()).use(user.allowedMethods());

app.use(next.routes()).use(next.allowedMethods());
// allowedMethods 如果请求报错会显示请求方式应该是哪些，对跨域有些提示
app.use(router.routes()).use(router.allowedMethods());

// 设置bodParser 插件
app.listen(3000, () => {
  console.log('服务启动');
});
