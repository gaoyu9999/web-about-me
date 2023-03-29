::: tip
 中国航信客服工单系统

:::




## 中国航信客服工单系统

一、项目框架

1.商务工单、分销工单、航空工单、故障工单等各类工单都是重构项目，基于Vue+elementui技术框架，使用iframe嵌套形式，集成到工单系统里面；

工单系统支持pc端和移动端，均在一个项目里面，移动端通过媒体查询样式控制；

本地开发联调：熟悉框架跨域代理配置，测试环境登录之后，拷贝session值到本地cookie；

重点业务组件

1）avationForm：本地使用JSON灵活配置，通过字段定义和对应规则约束，生成表单；

API如下：

JSON对象配置字段：

说明	参数	示例
ifDisabled	当前字段是否置灰	
ifDisabled (data) {}；

data：所有表单值

this：可通过this获取到当前vue对象





所有示例都在 individual-ui 项目里面，基本满足工单开发需求，没有列的配置都可以通过配置文件找到；也可查看avationForm源码；

event	定义当前字段change事件，与handleEvent配合使用	字符串
ifRender	控制当前字段是否显示	
ifRender(data) {};

data：所有表单值

slotHtml	用于特殊定制，表单项后面加上自定义显示	字符串
     2. API


说明	参数	示例
configData	表单所有表单项配置可选项	







所有示例都在 individual-ui 项目里面，基本满足工单开发需求，没有列的配置都可以通过配置文件找到；也可查看avationForm源码；

formConfigData	表单配置项	
initFormModel	表单初始化对象	
disabledFunc	表单字段是否置灰；适用于表单交互之后，某个字段置灰的情况；	
disableFunc(obj)

obj：{

   key(表单项对应key值)：true/false

}

handleEvent	与json配置中event定义配合使用	
setFresh	表单值刷新；	
setModelData	设置表单值；	


2.航司个性化工单：基于Vue+elementui技术框架，集成FormMaking表单生成器

1）航司工单（非cpc）：表单基础业务组件 avationForm

2）航司工单（cpc配置）、旅交工单、通用工单、TBI工单、索赔工单：使用cpc系统可视化表单生成器，生成对应表单

cpc表单配置FormMaking API使用：


说明	参数	示例
dataSource	表单项json数据，通过后端接口获取	




所有示例都在 individual-ui 项目里面，基本满足工单开发需求；

router：/fcspAdd；/fcspAudit

getRemoteMethod	cpc系统配置接口url，工单项需要单独定义获取配置数据统一入口函数；	
onChange	表单项change事件	
changeEvent(field, value)：

field：表单项的key

value：表单项的值

value	表单初始化值	
widgetIfRender	表单项是否显示	
widgetIfRender(obj);

obj：{

   key(表单项对应key值)：true/false

}



3.cpc系统：自动化流程办公系统，表单可视化，流程引擎配置，审核节点配置

主要功能：1）表单可视化–FormMaking，可视化配置页面，提供栅格布局，一键生成配置json，支持表单验证等

                   2）流程引擎配置，审核节点配置；

附件：cpc系统文档分享：zh-doc.zip  （vuePress搭建的博客文档，有兴趣可以搭一套自己的博客）



4.工单移动端

线上从航信公众号点击进入；

csp-new-ui，提供一个移动端外壳，每个工单用iframe嵌套的方式进入；




## 项目技术
Vue+elementui+less+webpack