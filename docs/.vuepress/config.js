module.exports = {
  base: '/web-about-me/',
  title: 'GY s 项目',
  description: '开发记录',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '前端项目', link: '/web/ydxy/' }, // 内部链接 以docs为根目录
      { text: '技术分享', link: '/share/hkgd/' }, // 外部链接
      // 下拉列表
      // {
      //   text: 'GitHub',
      //   items: [
      //     { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
      //     {
      //       text: '算法仓库',
      //       link: 'https://github.com/OBKoro1/Brush_algorithm'
      //     }
      //   ]
      // }
    ]
    ,
    sidebar: [
      {
        title: '前端项目',   // 必要的
        path: '/web/ydxy/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children:[
          {
            title: '云端学院',   // 必要的
            path: '/web/ydxy/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
          },
          {
            title: '模拟教学',   // 必要的
            path: '/web/mnjx/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
          },
          {
            title: 'TRP航司合约标准版',   // 必要的
            path: '/web/bw/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            children: [
            ]
          },
          {
            title: '成航辅助营销管理端',   // 必要的
            path: '/web/eu-fy/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
          },
          {
            title: '中国航信客服工单系统',   // 必要的
            path: '/web/gd/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
          },
          {
            title: '考试系统',   // 必要的
            path: '/web/ks/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
          },
          {
            title: '天津航空B2C官网',   // 必要的
            path: '/web/tj/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
          },
          {
            title: '西部航空B2C官网',   // 必要的
            path: '/web/xb/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
          },
        ]
      },
      {
        title: '技术分享',   // 必要的
        path: '/share/hkgd/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children:[
          {
            title: '客服工单系统-航空工单ajax请求封装',   // 必要的
            path: '/share/hkgd/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
          },
          // 部署
          {
            title: '项目部署-Nginx',   // 必要的
            path: '/share/nginx/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
          },
          {
            title: '项目部署-Linux',   // 必要的
            path: '/share/linux/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
          },
          // JS
          {
            title: 'JS基础',   // 必要的
            path: '/share/js/sjjg/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children:[
              {
                title: '数据结构与算法',   // 必要的
                path: '/share/js/sjjg/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
              },
              {
                title: 'var-let',   // 必要的
                path: '/share/js/var-let/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
              },
            ]
          },
          {
            title: 'SSR',   // 必要的
            path: '/share/next-ssr/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children:[
              {
                title: 'vue-cli&nextjs',   // 必要的
                path: '/share/next-ssr/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, 
              }
            ]
          },

        ]
      }
      
    ]
  }

}