/**
 * animation.js
 * 1. 初始化滚动动画观察器
 */

// 将函数挂载到 window 对象，以便 main.js 可以调用它
window.initScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // 当元素进入视口时
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 动画触发一次后即停止观察
                observer.unobserve(entry.target); 
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 元素可见 10% 时触发
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
};

// 页面加载时立即初始化
document.addEventListener('DOMContentLoaded', window.initScrollAnimations);
