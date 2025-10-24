/**
 * data.js
 * 存储所有动态数据，例如项目信息。
 * main.js 将会读取这个文件来动态生成内容。
 */

// 将数据挂载到 window 对象，以便 main.js 可以访问
window.projectData = [
    {
        "title": "Enterprise Dashboard",
        "description": "A scalable admin dashboard built with React and Tailwind, featuring data visualization and role-based access control.",
        "alt": "Dashboard web app preview",
        "linkText": "View Case Study",
        "linkUrl": "#",
        "imageUrl": "assets/img/project1.jpg" // 更新：使用本地图片路径
    },
    {
        "title": "E-Commerce Redesign",
        "description": "Revamped online store with improved UX flow, mobile optimization, and 30% higher conversion rate.",
        "alt": "E-commerce storefront preview",
        "linkText": "Visit Site",
        "linkUrl": "#",
        "imageUrl": "assets/img/project2.jpg" // 更新：使用本地图片路径
    },
    {
        "title": "Portfolio Platform",
        "description": "A dynamic portfolio system with Markdown-based content management and instant page generation.",
        "alt": "Portfolio website preview",
        "linkText": "Explore",
        "linkUrl": "#",
        "imageUrl": "assets/img/project3.jpg" // 更新：使用本地图片路径
    }
];

