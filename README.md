# vue3practice
技术栈综合  vue3+ts+echarts+vue Ant +webpack
##  项目主要目的
    1.封装sass库，实现主题切换
    2.学习 数量使用TypeScript  vue3技术
    3.webpack打包配置
    4.
### vue3创建项目
### 引入echarts
    安装：npm i echarts --save
    使用：
        import echarts from 'echarts' //echarts5.0以前的版本引入方法
        Vue.prototype.$echarts = echarts  // vue2全局引用   
        import * as echarts from 'echarts' //echarts5.0以后的版本引入
        App.config.globalProperties.$echarts = echarts // vue3全局引用
### 引入vue Ant
    安装：npm i --save ant-design-vue@next
    使用：
        import 'ant-design-vue/dist/antd.css';
        import ant from 'ant-design-vue'
### 参考资源：
    * TypeScript 入门教程： https://ts.xcatliu.com/
    * TypeScript 高级教程： https://github.com/jkchaotypescript-book-chinese
    * TypeScript 编写提高： https://github.com/labs42io/clean-code-typescript
    * vbenAdmin： https://vvbin.cn/next/#/dashboard/analysis
    * Vben Admin： https://vvbin.cn/doc-next/?from=thosefree.com
