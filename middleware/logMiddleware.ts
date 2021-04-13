/**
 * 自定义中间件
* */
export default () => {
  return async (content, next) => {
    // todo
    console.log('mid1-start');
    await next();
    // todo
    console.log('mid1-end');
  }
}
