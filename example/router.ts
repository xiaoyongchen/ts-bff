import * as Koa from 'koa';
import * as Router from '@koa/router';

const app = new Koa();
const router = new Router();
// 路由分组
const user = new Router({
  prefix: '/users'
});

router.get('/list', async context => {
  context.body = [1, 2, 3];
});

// 动态路由
router.get('/list/:id', async content => {
  content.body = {
    id: content.params.id,
    time: new Date()
  }
});

// 嵌套
const next = new Router();
next.use('/next', router.routes());
user.get('/', async content => {
  content.body = 'group'
});

// next 必须要执行，否则不往下执行
router.get('/detail', async (content, next) => {
  content.info = { name: '老王' };
  next();
},  async (content, next) => {
  content.time = new Date();
  next();
}, async content => {
  content.body = {
    info: content.info,
    time: content.time,
  }
});

app.use(next.routes()).use(next.allowedMethods());

// allowedMethods 如果请求报错会显示请求方式应该是哪些，对跨域有些提示
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('服务启动');
});
