::: tip
客服工单系统-航空工单ajax请求封装优化方案。

:::
封装方案参考VUE-TEMPLATE-ADMIN

## 如何使用
nginx-1.23.2\html\airui4
指定目录下放dist（前端打包产物）文件


1. start nginx  ==> 启动
2. nginx.exe -s stop ==> 停止 
4. nginx.exe -s reopen ==> 重启
3. nginxexe -s reload ==> 重新加载配置文件


此时启动一定会跨域。

## 如何解决跨域
### 配置代理
进入conf文件 找到配置文件，增加需要的代理即可。


重启服务器，重新进入页面访问。

