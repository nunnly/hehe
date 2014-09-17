# express源码分析
## 前言
之前学node也有一段时间了，从去年的年底有开始接触node，到今年实际项目中用到node，有些许想法，还有很多模糊的概念，希望借助这一次分析express框架来落实自己的所学
## 分析思路 
express4开始就开始把入口改到了`./bin/www`这个文件，实在是有点淡淡疼。那我们分析的入口就从`www`这个文件开始吧

首先需要准备的工具[node-inspector](https://github.com/node-inspector/node-inspector)用这个进行调试

