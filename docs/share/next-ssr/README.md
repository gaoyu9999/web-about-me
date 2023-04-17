::: tip
SSR

:::

# vue-cli SSR

## ROUTER创建方式
```
export function createRouter () {
  return new Router({
    mode: 'history',
    routes
  })
}
```
## ROUTER调用
<<< @/docs/static/js/app.js
## 客户端挂载
<<< @/docs/static/js/entry-client.js
## 服务端激活
<<< @/docs/static/js/entry-server.js
## node脚本-拦截 返回ssr
<<< @/docs/static/js/server.js
## webpack脚本
<<< @/docs/static/js/vue.config.js
## nextjs相关
## 使用时机
#### 静态生成（推荐）：
 HTML 是在 构建时（build time） 生成的，并重用于每个页面请求。要使页面使用“静态生成”，只需导出（export）页面组件或导出（export） getStaticProps 函数（如果需要还可以导出 getStaticPaths 函数）。对于可以在用户请求之前预先渲染的页面来说，这非常有用。你也可以将其与客户端渲染一起使用以便引入其他数据。
#### 服务器端渲染： 
HTML 是在 每个页面请求 时生成的。要设置某个页面使用服务器端渲染，请导出（export） getServerSideProps 函数。由于服务器端渲染会导致性能比“静态生成”慢，因此仅在绝对必要时才使用此功能。

## 获取数据
#### 我应该什么时候使用getStaticProps？
如果出现以下情况，您应该使用getStaticProps：

呈现页面所需的数据在用户请求之前的构建时可用。
数据来自无头 CMS。
数据可以公开缓存（非用户特定）。
该页面必须预渲染（用于 SEO）并且速度非常快——getStaticProps生成 HTML 和 JSON 文件，这两种文件都可以由 CDN 缓存以提高性能。



