# SuicideWarningSystem
介绍
-------------
##### -w-我不会写好看的Readme.md啊
##### 有在百度上搜索过 “自杀” 等关键词的你们都可能知道，百度，知乎等对这些搜索关键词都给予一些特别的内容，同样的，我也希望做一个开源的js库来让大家能更方便的部署在自己的网站上。
##### 受lwl12的启发做的，更方便于部署。
##### Demo:https://blog.sakuralove.cn

快速部署
-------------
* 这个项目基于jQuery开发，所以在一切之前，你需要先引入jQuery.js
```
  <script src="jquery.js"></script>
```
* 接着你就可以进入SPS.js文件
```
  <script src="SPS.js"></script>
```
* 如何使用
```
<script src="jquery.js"></script>
<script src="SPS.js"></script>
<script>
    SPS.check($("input"),function(input){
        $("input").after("<h1 id='sps-help'>诸事可为，乐观面对，世界虽不完美， 但我们仍可改变。</h1>");
    });
</script>
```

对象
-------------
### SPS
- `check` - 函数

函数
-------------

此函数将会绑定该元素并在每次该元素的value被更改时检查内容，若含有关键词就会使用回调函数进行回调

### check(obj,callback)
- `obj` - 输入框的jQuery对象
- `callback` - 回调函数
    - `input` - 匹配到的关键词
