import * as Koa from 'koa';
import * as Router from '@koa/router';

const app = new Koa();
const router = new Router();

router.get('/list', context => {
  context.body = [1, 2, 3];
});
router.get('/list/:id', content => {
  content.body = {
    id: content.params.id,
    time: new Date()
  }
})


// allowedMethods 如果请求报错会显示请求方式应该是哪些，对跨域有些提示
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('服务启动');
});
