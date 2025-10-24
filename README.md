现代化个人作品集网站

这是一个基于 HTML, CSS 和 JavaScript 构建的现代化、响应式个人作品集网站。

该项目遵循企业级开发标准，将代码结构化、组件化和动态化。

特性 (Features)

完全响应式: 适配桌面、平板和移动设备。

深色/浅色模式: 支持主题切换，并自动保存用户偏好到 localStorage。

动态内容: 项目卡片由 js/data.js 中的数据动态生成，易于维护。

滚动动画: 使用 IntersectionObserver API 实现优雅的元素淡入动画。

滚动激活导航: 导航栏链接会根据页面滚动位置自动高亮。

模块化代码: 清晰的文件结构 (HTML, CSS, JS 分离)。

文件结构

/
├── index.html          (主页)
├── contact.html        (联系页面)
├── README.md           (项目说明)
│
├── css/
│   ├── base.css        (全局变量, 重置, 基础排版)
│   ├── layout.css      (布局, 容器, Header, Footer)
│   └── component.css   (组件样式: 按钮, 卡片, 表单)
│
├── js/
│   ├── main.js         (主逻辑: 主题切换, 导航, 项目加载)
│   ├── animation.js    (滚动动画逻辑)
│   └── data.js         (项目数据)
│
└── assets/
    ├── fonts/          (本地字体文件 - 未使用)
    ├── icons/          (本地图标 - 未使用)
    └── img/            (本地图片 - 未使用, 当前使用占位符)


如何运行

这是一个纯静态网站。您只需在本地启动一个 HTTP 服务器即可。

克隆或下载此仓库。

在项目根目录运行一个简单的服务器：

使用 Python 3:

python -m http.server


使用 Node.js (需要 http-server):

npx http-server


在浏览器中打开 http://localhost:8000。