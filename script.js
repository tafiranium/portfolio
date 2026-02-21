// ========== ДВУЯЗЫЧНЫЕ ДАННЫЕ ==========
const i18n = {
    ru: {
        skills: [
            'React', 'TypeScript', 'JavaScript', 'HTML5/CSS3',
            'Node.js', 'Next.js', 'Tailwind', 'Git', 'Figma',
            'Webpack', 'Jest', 'GraphQL', 'Docker', 'Redux',
            'Python', 'Go', 'Vue', 'Django', 'WordPress',
            'PHP', 'Clickermann', 'Автоматизация'
        ],
        projects: [
            { 
                name: 'Генератор PDF-буклетов', 
                desc: 'Веб-приложение для подготовки макетов к печати (React + Node.js)', 
                url: 'https://github.com/tafiranium' 
            },
            { 
                name: 'Автоматизация документооборота', 
                desc: 'Скрипты для сбора данных, парсинга и выгрузки в Google Sheets', 
                url: 'https://github.com/tafiranium' 
            },
            { 
                name: 'Собственный шаблонизатор на PHP', 
                desc: 'Легковесный фреймворк для сборки сайтов из шаблонов (аналог Django-шаблонов)', 
                url: 'https://github.com/tafiranium' 
            },
            { 
                name: 'Дашборд для аналитики', 
                desc: 'Админ-панель на Next.js с визуализацией данных', 
                url: 'https://github.com/tafiranium' 
            },
            { 
                name: 'Чат-бот для Telegram', 
                desc: 'Бот на Python для автоматизации заказов и уведомлений', 
                url: 'https://github.com/tafiranium' 
            }
        ],
        experience: [
            { period: '2019 – н.в.', role: 'Fullstack-разработчик', company: 'Фриланс' },
        ],
        education: '11 классов + 3 курса МАДИ (Московский автомобильно-дорожный институт), специальность «Машиностроение».',
        name: 'Захаров Максим',
        title: 'Fullstack Разработчик',
        description: 'Разработчик с опытом создания веб-приложений, инструментов автоматизации и API. Легко осваиваю новые технологии (например, Clickermann для автоматизации кликов). Участвовал в проектах разной сложности — от верстки до создания собственного шаблонизатора на PHP. 5+ лет опыта на фрилансе.',
        downloadText: 'Скачать резюме (PDF)',
        triggerText: 'Подробнее обо мне',
        closeText: 'Свернуть',
        sectionTitles: {
            education: 'Образование',
            experience: 'Опыт работы',
            skills: 'Навыки',
            projects: 'Примеры работ',
            github: 'GitHub'
        }
    },
    en: {
        skills: [
            'React', 'TypeScript', 'JavaScript', 'HTML5/CSS3',
            'Node.js', 'Next.js', 'Tailwind', 'Git', 'Figma',
            'Webpack', 'Jest', 'GraphQL', 'Docker', 'Redux',
            'Python', 'Go', 'Vue', 'Django', 'WordPress',
            'PHP', 'Clickermann', 'Automation'
        ],
        projects: [
            { 
                name: 'PDF Booklet Generator', 
                desc: 'Web app for preparing print layouts (React + Node.js)', 
                url: 'https://github.com/tafiranium' 
            },
            { 
                name: 'Document Flow Automation', 
                desc: 'Scripts for data collection, parsing, and export to Google Sheets', 
                url: 'https://github.com/tafiranium' 
            },
            { 
                name: 'Custom PHP Template Engine', 
                desc: 'Lightweight framework for building sites from templates (similar to Django templates)', 
                url: 'https://github.com/tafiranium' 
            },
            { 
                name: 'Analytics Dashboard', 
                desc: 'Admin panel with data visualization using Next.js', 
                url: 'https://github.com/tafiranium' 
            },
            { 
                name: 'Telegram Chatbot', 
                desc: 'Python bot for order automation and notifications', 
                url: 'https://github.com/tafiranium' 
            }
        ],
        experience: [
            { period: '2019 – present', role: 'Fullstack Developer', company: 'Freelance' },
        ],
        education: '11 years of school + 3 incomplete years at Moscow Automobile and Road Construction University (MADI), Mechanical Engineering.',
        name: 'Maksim Zakharov',
        title: 'Fullstack Developer',
        description: 'Developer with experience in web applications, automation tools, and APIs. Quick learner (e.g., mastered Clickermann for task automation). Worked on various projects – from frontend to building a custom PHP template engine. 5+ years of freelance experience.',
        downloadText: 'Download Resume (PDF)',
        triggerText: 'More about me',
        closeText: 'Close',
        sectionTitles: {
            education: 'Education',
            experience: 'Experience',
            skills: 'Skills',
            projects: 'Projects',
            github: 'GitHub'
        }
    }
};

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentLang = 'ru';
let isOpen = false;
let pinned = false;

// ========== ИКОНКИ (LUCIDE) ==========
const icons = {
    graduationCap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    code2: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
    image: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"/></svg>`,
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    chevronUp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
    chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
};

// ========== ФУНКЦИИ СОЗДАНИЯ СЕКЦИЙ ==========
function createSection(iconSvg, title, content) {
    const section = document.createElement('div');
    section.className = 'section';

    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `${iconSvg}<h3 class="section-title">${title}</h3>`;
    section.appendChild(header);

    const contentDiv = document.createElement('div');
    if (typeof content === 'string') {
        contentDiv.innerHTML = `<p class="text-secondary-foreground">${content}</p>`;
    } else {
        contentDiv.appendChild(content);
    }
    section.appendChild(contentDiv);

    return section;
}

function createExperience() {
    const container = document.createElement('div');
    container.className = 'space-y-3';
    
    i18n[currentLang].experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'flex items-start gap-3';
        item.innerHTML = `
            <span class="mt-0.5 text-xs text-muted-foreground font-mono whitespace-nowrap">${exp.period}</span>
            <div>
                <p class="text-sm font-medium text-foreground">${exp.role}</p>
                <p class="text-xs text-muted-foreground">${exp.company}</p>
            </div>
        `;
        container.appendChild(item);
    });
    
    return container;
}

function createSkills() {
    const container = document.createElement('div');
    container.className = 'flex flex-wrap gap-2';
    
    i18n[currentLang].skills.forEach(skill => {
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = skill;
        container.appendChild(badge);
    });
    
    return container;
}

function createProjects() {
    const container = document.createElement('div');
    container.className = 'grid gap-3 sm:grid-cols-3';
    
    i18n[currentLang].projects.forEach(p => {
        const link = document.createElement('a');
        link.href = p.url;
        link.className = 'group block rounded-lg bg-secondary/50 p-4 border border-border transition-colors hover:border-primary/40';
        link.innerHTML = `
            <h4 class="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">${p.name}</h4>
            <p class="mt-1 text-xs text-muted-foreground">${p.desc}</p>
            <span class="external-link-icon mt-2 block">${icons.externalLink}</span>
        `;
        container.appendChild(link);
    });
    
    return container;
}

// ========== ФУНКЦИИ ПОСТРОЕНИЯ ИНТЕРФЕЙСА ==========
function buildPanel() {
    const contentDiv = document.getElementById('panel-content');
    if (!contentDiv) return;

    contentDiv.innerHTML = '';

    contentDiv.appendChild(createSection(icons.graduationCap, i18n[currentLang].sectionTitles.education, i18n[currentLang].education));
    contentDiv.appendChild(createSection(icons.briefcase, i18n[currentLang].sectionTitles.experience, createExperience()));
    contentDiv.appendChild(createSection(icons.code2, i18n[currentLang].sectionTitles.skills, createSkills()));
    contentDiv.appendChild(createSection(icons.image, i18n[currentLang].sectionTitles.projects, createProjects()));

    const githubLink = document.createElement('a');
    githubLink.href = 'github.com/tafiranium';
    githubLink.target = '_blank';
    githubLink.className = 'github-link';
    githubLink.innerHTML = `github.com/tafiranium ${icons.externalLink}`;
    contentDiv.appendChild(createSection(icons.github, i18n[currentLang].sectionTitles.github, githubLink));
}

function updateMainContent() {
    const nameElement = document.querySelector('.name');
    const titleElement = document.querySelector('.title');
    const descriptionElement = document.querySelector('.description');
    const downloadText = document.querySelector('.download-text');
    const triggerText = document.getElementById('trigger-text');
    const langIcon = document.querySelector('.lang-icon');

    if (nameElement) nameElement.textContent = i18n[currentLang].name;
    if (titleElement) titleElement.textContent = i18n[currentLang].title;
    if (descriptionElement) descriptionElement.textContent = i18n[currentLang].description;
    if (downloadText) downloadText.textContent = i18n[currentLang].downloadText;
    if (triggerText) triggerText.textContent = i18n[currentLang].triggerText;
    if (langIcon) langIcon.textContent = currentLang.toUpperCase();

    document.documentElement.lang = currentLang;
    document.body.dataset.lang = currentLang;
}

// ========== УПРАВЛЕНИЕ ПАНЕЛЬЮ ==========
function initPanelControls(trigger, panel, chevronDiv, triggerText) {
    chevronDiv.innerHTML = icons.chevronUp;
    chevronDiv.classList.add('bounce');

    function openPanel() {
        if (isOpen) return;
        isOpen = true;
        panel.classList.add('open');
        chevronDiv.innerHTML = icons.chevronDown;
        chevronDiv.classList.remove('bounce');
        triggerText.textContent = i18n[currentLang].closeText;
    }

    function closePanel() {
        if (!isOpen) return;
        isOpen = false;
        panel.classList.remove('open');
        chevronDiv.innerHTML = icons.chevronUp;
        chevronDiv.classList.add('bounce');
        triggerText.textContent = i18n[currentLang].triggerText;
    }

    trigger.addEventListener('mouseenter', () => {
        if (!pinned) openPanel();
    });

    trigger.addEventListener('click', () => {
        if (pinned) {
            pinned = false;
            closePanel();
        } else {
            pinned = true;
            openPanel();
        }
    });

    panel.addEventListener('mouseleave', () => {
        if (!pinned) closePanel();
    });

    panel.addEventListener('click', (e) => e.stopPropagation());

    return { openPanel, closePanel };
}

// ========== УПРАВЛЕНИЕ ТЕМОЙ ==========
function initThemeToggle(themeToggle) {
    const body = document.body;

    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;

    function setTheme(theme) {
        body.className = `theme-${theme}`;
        localStorage.setItem('theme', theme);
        themeToggle.innerHTML = theme === 'dark' ? moonIcon : sunIcon;
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('theme-dark') ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

// ========== УПРАВЛЕНИЕ ЯЗЫКОМ ==========
function initLangToggle(langToggle, triggerText) {
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        updateMainContent();
        buildPanel();
        
        if (isOpen && triggerText) {
            triggerText.textContent = i18n[currentLang].closeText;
        }
    }

    const savedLang = localStorage.getItem('language') || 'ru';
    setLanguage(savedLang);

    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'ru' ? 'en' : 'ru';
        setLanguage(newLang);
    });
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', () => {
    // Построение начального контента
    buildPanel();
    updateMainContent();

    // Получение DOM-элементов
    const trigger = document.getElementById('panel-trigger');
    const panel = document.getElementById('info-panel');
    const chevronDiv = document.getElementById('chevron-icon');
    const triggerText = document.getElementById('trigger-text');
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');

    if (!trigger || !panel || !chevronDiv || !triggerText || !themeToggle || !langToggle) return;

    // Инициализация всех модулей
    initPanelControls(trigger, panel, chevronDiv, triggerText);
    initThemeToggle(themeToggle);
    initLangToggle(langToggle, triggerText);
});
