# Change Log

[EN CHANGELOG](https://github.com/IronPans/freeng/blob/master/CHANGELOG.md)

## 0.5.2(2018-03-06)

**Bug Fixes**
  
- 修复日期选择器选择Now时无法传递值。<a href='https://github.com/IronPans/freeng/issues/14'>#14</a>
- 修复自定义滚动框Scroll无法滚动

**Features**

- 优化日期选择器的样式
- 日期选择器新增年、年月或月选择面板属性dateView

## 0.5.1(2018-01-19)

**Bug Fixes**
  
- 修复Spinner可以输入文字的问题<a href='https://github.com/IronPans/freeng/issues/12' target='_blank'>#12</a>

## 0.5.0(2018-01-06)

**CHANGES**
  
- 兼容 Angular 5.0 版本，Angular 4.x 版本请使用 0.4.6 版本的 FreeNG

**Refactor**

- 重构Tree组件。

## 0.4.6(2017-12-27)

**Bug Fixes**
  
- Radio修复设置Theme无效<a href='https://github.com/IronPans/freeng/issues/8' target='_blank'>#8</a>
- 开关中Change Event demo中切换报错<a href='https://github.com/IronPans/freeng/issues/10' target='_blank'>#10</a>
- upload 控件，选中任一文件，然后删除，再次选中此文件失败<a href='https://github.com/IronPans/freeng/issues/11' target='_blank'>#11</a>

## 0.4.5(2017-12-09)

**Bug Fixes**
  
- 修复Modal无法移动

## 0.4.4(2017-12-02)

**Features**

- Inputtext新增disabled属性

**Bug Fixes**
  
- 修复无法动态创建tab
- 修复Accordion在Sidenav中使用时，动画无效
- 修复Switch位置错乱的问题
- 修复Checkbox设置默认值的问题

## 0.4.3(2017-11-18)

**Bug Fixes**
  
- 修复Paginator分页器的按钮点击无效

## 0.4.2(2017-11-12)

**Features**

- Checkbox移除theme属性，新增styleClass/binary属性
- 官网新增Grid栅格系统实例说明

**Bug Fixes**
  
- 修复Selector选择器多选时选择无效的问题

## 0.4.1(2017-11-04)

**Features**

- Accordion新增styleClass属性，用于自定义样式
- 新增常用的表单验证器(date, email, url, cn, range, number, phone)
- Upload
  - 新增maxFileSize、name属性
  - 新增method、url、withCredentials属性
  - 新增showProgress、autoUpload属性
  - 新增invalidFileSizeMessage、invalidFileTypeMessage属性
  - 新增styleClass
  - 新增onChange、onBeforeUpload、onProgress、onUpload、onError、onRemove、onBeforeSend事件

**Bug Fixes**
  
- 修复下拉菜单Dropdown在关闭后依旧存在的问题
- 修复当选择Switch类型2时，会有白色背景的问题
- 修复Scroll组件在火狐下无法滚动
- 修复Progress无法设置动态值

## 0.4.0(2017-10-21)

**Features**

- 新增Scroll组件

**Bug Fixes**
  
- 修复Cropper的裁剪框移到边界时，图片位置错乱。[#4](https://github.com/IronPans/freeng/issues/4)

## 0.3.2(2017-10-15)

**Features**

- 新增Popover组件
- 优化List的样式
- Badge
  - 优化了Badge的样式
  - 新增outline、theme、circle属性
- Inputtext新增type属性
- 优化Dropdown的动画
- 优化Progress的样式
- 优化Loading的样式
- 优化Slide的样式

**Bug Fixes**
  
- 修复Calendar的pholder设置无效

## 0.3.1(2017-10-08)

**Features**

- 优化了Panel的样式
- 优化了Datatable的样式
- 优化了Button的样式

**Bug Fixes**
  
- 修复Knob动态设值的问题

## 0.3.0(2017-09-30)

**Features**

- 新增Knob组件
- 新增Steps组件
- 优化了Modal样式
- Panel
    - 优化了Panel的样式
    - 新增tool属性，用于工具
- 优化了Range的样式
- 优化了Calendar的样式
- 优化了Button的样式
- Progress新增barColor和trackColor属性
- 关闭了Accordion切换动画

**Bug Fixes**
  
- Fix Spinner Set the maximum and minimum values that can not be clicked

## 0.2.5(2017-09-23)

**Features**

- Modal新增onChange事件
- Slide
  - 新增touch属性，用于控制是否开启触摸事件
  - 新增direction属性
  - 优化Slide的样式

**Bug Fixes**
  
- 修复Datatable反向选择时全选错误问题

## 0.2.4(2017-09-21)

**Bug Fixes**
  
- 修复依赖模块版本冲突问题

## 0.2.3(2017-09-09)

**Bug Fixes**
  
- 修复TreeComponent无法选择的错误

## 0.2.2(2017-09-08)

**Features**

- 新增分享按钮
- Calendar新增timeOnly属性，只显示时间选择
- Sidenav
  - 新增outside/navStyle/overlayBackground属性
  - direction属性新增top/bottom
  - 新增平推模式，内容跟随菜单平移
- Modal新增可拖动

**Bug Fixes**
  
- 修复找不到f-header组件的问题
- 全局导出FlowModule模块[#3](https://github.com/IronPans/freeng/issues/3)
- 修复Sidenav当点击半透明背景关闭时，打开的按钮要双击才能打开[#3](https://github.com/IronPans/freeng/issues/3)

## 0.2.1(2017-08-30)

**Bug Fixes**
  
- 修复需要手动安装highlight.js依赖
- 修复需要手动安装chart.js依赖问题

## 0.2.0(2017-08-29)

**Features**

- 新增媒体播放器
- 新增图片裁剪
- 新增流加载
- 星星评分(Rating)新增半星评分
- 时间轴(Timeline)新增自定义标题
- 面包屑导航(Breadcrumb)新增两个自定义类型
- 滑动条(Range)新增handleSize属性，用来设置滑块大小
- 树形菜单(Tree)新增复选框和点击事件
- 面板新增主题属性

**Bug Fixes**

- 修复日期选择器的范围选择问题
- 修复富文本编辑器的table选择框高度错乱
- 修复星星评分(Rating)无法恢复原值的问题
- 调整输入框(Inputtext)验证提示的位置

## 0.1.4(2017-08-14)

* 优化了样式

## 0.1.3(2017-08-13)

* 更新到npm包
* 修复组件(Accordion, Colorpicker, Calendar)样式

## 0.1.2(2017-08-12)

* 新增组件: 颜色选择器/级联选择器/日期选择器/数据表格/消息通知/消息提示/富文本编辑器/时间轴/多栏布局/侧边栏/拖放控件/图表
* 组件更新: 
  * 输入框新增组件正则验证(中文/日期/网址)
  * 碎片组件的chipsChange事件修改为onChange
  * List的avatar新增组件circle属性
  * 选项卡(Tab)新增组件disabled属性和onChange事件
  * 复选框的数据绑定进行了修改，详情请看示例。
  * 上传组件(upload): 1) free-file标签更名为free-upload  2) 优化图片预览样式

## 0.1.1(2017-07-08)

* 新增组件: 幻灯片/碎片/浮动按钮/选择框/分页器/上下文菜单/粒子效果/全屏滚动
* 组件更新: 
  * 输入框新增组件正则验证
  * 下拉菜单: 1) 新增组件自定义内容  2) 新增组件hover事件
  * 模态框: 1) 新增组件loading模态框  2) 新增组件延时隐藏模态框

## 0.1.0(2017-05-21)

* UI 元素: 栅格系统/图片/辅助元素/阴影
* 基础组件: 按钮/列表/卡片/进度条/加载条/输入框/复选框/单选框/开关/面包屑/图标/小徽章/
* 扩展组件: 面板/选项卡/模态框/提示框/数字输入框/星星评分/下拉菜单/表格/树形菜单
* 页面: 登录页/404页面
