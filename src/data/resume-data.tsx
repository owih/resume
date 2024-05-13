import { GitHubIcon, PdfIcon, TelegramIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Головатенко Дмитрий",
  initials: "ГД",
  location: "Россия, Волгоград",
  locationLink: "https://www.google.com/maps/place/Volgograd",
  about:
    "Фронтенд-разработчик",
  summary:
    "Привет! Я - Фронтенд-разработчик, имею ~3 года коммерческого опыта. Внимателен к деталям и стремлюсь максимально улучшить пользовательский опыт. Увлечен созданием чистого, эффективного и отзывчивого кода. Стараюсь учавствовать во всех этапах разработки продукта. Ценю коллективную работу и готов вносить свой вклад. В личных проектах изучаю новые для себя новые технологии и пишу fullstack приложения.",
  avatarUrl: "https://avatars.githubusercontent.com/u/89970102?v=4",
  personalWebsiteUrl: "https://golovatenko.vercel.app/",
  contact: {
    email: "golovatenko.dmitry@mail.ru",
    tel: "+79608700316",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/owih",
        icon: GitHubIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/owihh",
        icon: TelegramIcon,
      },
      {
        name: "PDF",
        url: "https://golovatenko.vercel.app/resume/golovatenko-resume.pdf",
        icon: PdfIcon,
      },
    ],
  },
  education: [
    {
      school: "Волгоградский государственный социально-педагогический университет",
      degree: "Бакалавр, Прикладная информатика",
      start: "2019",
      end: "2023",
    },
    {
      school: "Волгоградский государственный социально-педагогический университет",
      degree: "Магистратура, Математика информатика физика",
      start: "2023",
      end: "2025",
    },
  ],
  work: [
    {
      company: "101Hotels",
      link: "https://101hotels.com/",
      badges: ["Remote/Office"],
      title: "Frontend - разработчик",
      start: "апрель 2023",
      end: "май 2024",
      description:
        `Разработка фронтовой части админки и личного кабинета для отельеров
        <strong>Основные технологии:</strong> Vue 2/3, Bootstrap, Tailwind, Vuetify, Webpack, Docker, SSH
        <strong>Основные кейсы:</strong>
        - обновление версии Vue с 2.7 на 3.4
        - верстка и разработка страниц/отдельных компонентов
        - обсуждение и планирование задач на всех этапах разработки
        - участие в проектировании логики
        - тестирование и отладка
        - взаимодействие с командой
        - оптимизация, багфикс, рефакторинг кода
        - код-ревью
        - участие в улучшении внутренних процессов разработки и поддержки проекта
        - верстка писем
        - адаптивная верстка, кроссбраузерная верстка`,
    },
    {
      company: "Интерволга",
      link: "https://www.intervolga.ru/",
      badges: ["Remote/Office"],
      title: "Frontend - разработчик",
      start: "сентябрь 2021",
      end: "апрель 2023",
      description:
        `Разработка фронтовой части для нескольких проектов на разных этапах жизненного цикла и с разными стеками
        <strong>Основные технологии:</strong> Vue 2/3, React (basic), Vuex/Pinia, Bootstrap, Vuetify, Webpack, BEM-шаблонизатор
        <strong>Основные кейсы:</strong>
        - сопровождение младших разработчиков
        - аудит сайтов
        - оптимизация PageSpeed
        - верстка и разработка страниц/отдельных компонентов
        - обсуждение и планирование задач на всех этапах разработки
        - участие в проектировании логики
        - тестирование и отладка
        - взаимодействие с командой
        - багфикс, рефакторинг кода
        - код-ревью
        - верстка писем
        - адаптивная верстка, кроссбраузерная верстка`,
    },
    {
      company: "Фриланс",
      title: '',
      link: "https://www.intervolga.ru/",
      badges: [],
      start: "май 2021",
      end: "август 2021",
      description:
        `- разработка фронтовой части для внутреннего проекта вуза ВГСПУ (нативный js + webpack, Bootstrap, Swiper.js)
        - верстка лендинга для свадебного салона (нативный js, Bootstrap, Swiper.js)`,
    },
  ],
  skills: [
    {
      category: "HTML",
      points: ["BEM template", "BEM methodology", "SEO tags"]
    },
    {
      category: "CSS",
      points: ["SASS/SCSS", "Responsive design", "Mobile first develop", "Tailwind (basic)", "Bootstrap"]
    },
    {
      category: "Frontend",
      points: ["Vue 3", "Option/Composition API", "Vuetify", "Vuex/Pinia store", "Nuxt 3 (basic)", "Vue-router", "ECMAScript 6+", "TypeScript (basic)", "React (basic)", "Redux (basic)", "Data from API"]
    },
    {
      category: "Backend",
      points: ["HTTP", "Rest API", "Prisma (basic)", "PostgreSQL (basic)", "Nest (basic)", "Express (basic)", "Postman"]
    },
    {
      category: "Tools",
      points: ["Docker (basic)", "Browserstack", "Webpack", "DevTools", "Photoshop (basic)", "Figma", "Git/Gitflow/Github", "NPM/Yarn"]
    },
    {
      category: "Soft",
      points: ["English B1"]
    }
  ],
  projects: [
    {
      title: "Fullstack chess game online (React + Nest)",
      techStack: ["Prisma", "React", "Nest", "Redux", "Websocket", "Tailwind", "Data base", "TypeScript", "MUI"],
      description: "Playing chess online with the audience. Multiple rooms are supported.",
      links: {
        web: null,
        github: "https://github.com/owih/chess-online-frontend",
      },
    },
    {
      title: "Fullstack Portfolio website v2 (Nuxt 3 + Supabase)",
      techStack: ["Prisma", "JavaScript", "TypeScript", "Nuxt 3", "Vue 3", "Data base", "HTTP", "Tailwind", "Responsive", "SCSS/SASS", "Composition API"],
      description: "Last version of my portfolio website.",
      links: {
        web: "https://golovatenko.vercel.app/",
        github: "https://github.com/owih/web",
      },
    },
    {
      title: "Fullstack shop (Vue 3 + Express)",
      techStack: ["Vue 3", "JavaScript", "BEM", "Vue-router", "SCSS/SASS", "Responsive", "Express", "Prisma", "TypeScript", "Composition API", "Pinia store", "Vuetify"],
      description: "Shop template with backend.",
      links: {
        web: "https://fullstack-shop-frontend.vercel.app/",
        github: "https://github.com/owih/fullstack-shop-frontend",
      },
    },
    {
      title: "Portfolio website v1 (OLD)",
      techStack: ["Responsive", "SCSS/SASS", "BEM", "JavaScript"],
      description: "Old version of my portfolio website.",
      links: {
        web: "https://owih.github.io/profile/",
        github: "https://github.com/owih/profile",
      },
    },
    {
      title: "Cryptocurrency list (OLD)",
      techStack: ["Vue-router", "Responsive", "Composition API", "Pinia store", "BEM", "SCSS/SASS", "JavaScript", "TypeScript", "Vue 3"],
      description: "Tracking cryptocurrency prices with the ability to add tracked names and store them in localStorage.",
      links: {
        web: "https://owih.github.io/pinia-ts-crypto/",
        github: "pinia-ts-crypto.gif",
      },
    },
  ]
} as const;
