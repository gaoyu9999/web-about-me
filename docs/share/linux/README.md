::: tip
LINUX。

:::
## LINUX常用命令
[LINUX常用命令](https://juejin.cn/post/6844904202855006221)

## PM2
PM2 是一个带有负载均衡功能的 Node 应用进程管理器
``` pm2 查看当前启动的所有应用
pm2 list
pm2 查看日志
pm2 log
如果要查询指定项目的日志
pm2 log [project]
pm2 重启某服务
pm2 restart [project]
pm2 其它常用命令
pm2 start <script_file|config_file> [options] 启动指定应用，如pm2 start index.js --name httpServer；
± 这里需要注意的是，如果已指定服务名称，可以直接pm2 start <appName>，否则需要在项目目录里指定名称并执行 pm2 start <script_file|config_file> --name <appName>.
± 如果项目支持 npm 命令，可以pm2 start npm --name <appName> -- run start
pm2 stop <appName> [options] 停止指定应用，如pm2 stop httpServer；
pm2 list 把所有pm2启动实例列举出来，注意：pm2 stop 某个项目后，该项目还会存在pm2 list 的列表里面， 只是状态是 stop, 要想去掉该项目，用pm2 delete
pm2 reload|restart <appName> [options] 重启指定应用，如pm2 restart httpServer；
pm2 show <appName> [options] 显示指定应用详情，如pm2 show httpServer；
pm2 delete <appName> [options] 删除指定应用，如pm2 delete httpServer，如果修改应用配置行为，最好先删除应用后，重新启动方才生效，如修改脚本入口文件；
pm2 kill 杀掉pm2管理的所有进程；
pm2 logs <appName> 查看指定应用的日志，即标准输出和标准错误；
pm2 monit 监控各个应用进程cpu和memory使用情况；
pm2 startOrReload <appName> 如果项目没有启动就执行 start 如果项目正在运行 就执行relaod
``` 

