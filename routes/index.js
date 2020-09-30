const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index')
})
router.get('/service', async (ctx, next) => {
  await ctx.render('service')
})
router.get('/share', async (ctx, next) => {
  await ctx.render('share')
})
router.get('/share2', async (ctx, next) => {
  await ctx.render('share2')
})
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
