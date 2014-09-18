# express源码分析
## 前言
之前学node也有一段时间了，从去年的年底有开始接触node，到今年实际项目中用到node，有些许想法，还有很多模糊的概念，希望借助这一次分析express框架来落实自己的所学
## 分析思路 
express4开始就开始把入口改到了`./bin/www`这个文件，实在是有点淡淡疼。那我们分析的入口就从`www`这个文件开始吧

首先需要准备的工具[node-inspector](https://github.com/node-inspector/node-inspector)用这个进行调试

##流程分析

1. 入口是`bin/www.js`,我把`www`改名成`www.js`方便`webstorm`识别。
- 首先是引入`debug`模块，确实是否处于`debug`状态，如果不是，就直接跳出
- 引入直接在`app.js`这个模块
- 创建一个HTTP的监听服务，通过`app.set`这个方法，我们可以获取到`app.settings.port`这个刚才我们设置的值，如果有看到`set`这个方法的注释应该知道，这里接收2个值，如果参数只有一个，那么返回值，如果有两个，则是设置属性值


## 模块分析
这个部分是接下来需要分析的,从express里面引入的模块，一个一个来分析，分析顺序，按照debug的顺序，一步一步来

1. `debug` 这个模块顾名思义，就是用来debug的。
2. `methods` 这个模块定义了一系列的方法，`http`请求的一些方法，返回的是一个数组`PS:这里有个疑问`
