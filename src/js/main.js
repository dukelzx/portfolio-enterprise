/**
 * main.js
 * 1. 初始化 (年份, 主题)
 * 2. 主题切换逻辑
 * 3. 滚动激活导航 (仅 index.html)
 * 4. 动态项目加载 (仅 index.html)
 * 5. 表单提交处理 (仅 contact.html)
 */

// 导入项目数据 (在 index.html 中已通过 <script> 标签全局引入)
// const projectData = window.projectData || [];

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 初始化 ---
    initFooterYear();
    initTheme();

    // --- 2. 主题切换逻辑 ---
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // --- 3. 滚动激活导航 (仅在 index.html 运行) ---
    // 检查是否存在 #hero 元素，以此判断是否为 index.html
    if (document.getElementById('hero')) {
        setupScrollObserver();
    }
    
    // --- 4. 动态项目加载 (仅在 index.html 运行) ---
    const projectGrid = document.getElementById('project-grid');
    if (projectGrid && typeof projectData !== 'undefined') {
        loadProjects(projectGrid);
    }
    
    // --- 5. 表单提交处理 (仅在 contact.html 运行) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// ---------------------------
// 功能函数
// ---------------------------

/**
 * 1. 设置页脚年份
 */
function initFooterYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

/**
 * 2. 初始化主题
 */
const THEME_STORAGE_KEY = 'portfolio-theme';
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) ||
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light-mode' : 'dark-mode');
    
    if (savedTheme === 'light-mode') {
        document.body.classList.add('light-mode');
    }
}

/**
 * 2b. 切换主题
 */
function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem(THEME_STORAGE_KEY, isLight ? 'light-mode' : 'dark-mode');
}

/**
 * 3. 设置滚动激活导航
 */
function setupScrollObserver() {
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    const sections = document.querySelectorAll('section, main');

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSectionId = entry.target.id;
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentSectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -50% 0px', // 在视口顶部 100px 到 50% 之间触发
        threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
}

/**
 * 4. 动态加载项目
 * @param {HTMLElement} gridContainer - 放置卡片的网格容器
 */
function loadProjects(gridContainer) {
    gridContainer.innerHTML = ''; // 清空容器
    
    projectData.forEach(project => {
        const card = document.createElement('article');
        card.className = 'card animate-on-scroll'; // 添加动画类
        
        // 使用占位符图像
        const placeholderUrl = `https://placehold.co/600x400/${project.imgColor || '26273f'}/aaaaaa?text=${encodeURIComponent(project.title)}`;

        card.innerHTML = `
            <img 
                src="${placeholderUrl}" 
                alt="${project.alt}" 
                onerror="this.onerror=null; this.src='https://placehold.co/600x400/26273f/aaaaaa?text=Project';"
            />
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.linkUrl || '#'}" class="btn btn-primary" target="_blank">${project.linkText || 'View Case Study'}</a>
        `;
        gridContainer.appendChild(card);
    });
    
    // 动态加载项目后，需要重新初始化动画观察器
    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
}

/**
 * 5. 处理联系表单提交
 * @param {Event} event - 提交事件
 */
function handleFormSubmit(event) {
    event.preventDefault(); // 阻止表单默认提交
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // 模拟发送中...
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // 模拟 API 请求
    setTimeout(() => {
        // 实际开发中，这里会是一个 fetch() 请求
        // 成功后：
        console.log('Form data submitted:', {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        });
        
        // 显示一个简单的成功消息
        // (在企业级应用中，这里会是一个更友好的 UI 提示)
        alert('Message sent successfully! (Simulation)'); 
        
        form.reset(); // 重置表单
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;

    }, 1500);
}

