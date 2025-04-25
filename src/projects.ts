interface IProject {
    id: number;
    title: string;
    img?: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    description: string;
    tech: string[];
    demo: string;
    github: string;
    created_at: string;
}

const project: IProject[] = [
    {
        id: 0,
        title: 'Gottfrids canvas shop',
        img: {
            src: './assets/gottfrids-canvas-shop-portfolio.png',
            alt: 'quiz',
            width: 1466,
            height: 817
        },
        description: `This project was developed as a school project at Medieinstitutet.
        The aim was to create a webshop for donuts or another product of choice. I chose to create a webshop for Canvases I've created in photoshop a few years ago to make it a little bit more personal.
        Troughtout this project I focused on understanding the basics of Java Script and I'm excited to redo this projects in a few years. This is my first project so I consider it to be the most important one. I hope you enjoy.`,
        tech: ['HTML', 'CSS', 'JavaScript', 'Sass', 'Prettier'],
        demo: 'https://mikaelakihl.github.io/mi-js-intro-assignment1-webshop/',
        github: 'https://github.com/mikaelakihl/mi-js-intro-assignment1-webshop',
        created_at: ""
    },
    {
        id: 1,
        title: 'Cartoon quiz',
        img: {
            src: './assets/cartoon-quiz-portfolio.png',
            alt: 'quiz',
            width: 1718,
            height: 1000
        },
        description: `This project was developed as a school group-project at Medieinstitutet.
        The aim was to create a quiz in theme of choice. We chose to create a quiz about cartoons because it felt fun to play with happy colors.
        Troughout this project we focused on learning how to work as a group, both individually and pair coding. I hope you enjoy.`,
        tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Sass', 'Prettier', 'EsLint', 'Vite'],
        demo: 'https://mikaelakihl.github.io/mi-js-intro-assignment2-cartoonquiz/',
        github: 'https://github.com/mikaelakihl/mi-js-intro-assignment2-cartoonquiz',
        created_at: ""
    },
    {
        id: 3,
        title: 'Tough Cookies',
        img: {
            src: './assets/tough-cookies-portfolio.png',
            alt: 'tough cookies',
            width: 1991,
            height: 1113
        },
        description: `This project was developed as a school project at Medieinstitutet.
        We were given a pre-made design to replicate using HTML and CSS for the first time.`,
        tech: ['HTML', 'CSS', 'Sass'],
        demo: 'https://mikaelakihl.github.io/mi-html-css-assignment2-toughcookie/',
        github: 'https://github.com/mikaelakihl/mi-html-css-assignment2-toughcookie',
        created_at: ""
    },
    {
        id: 4,
        title: 'Jurassic World - Rebirth',
        img: {
            src: './assets/jurassic-world-portfolio.png',
            alt: 'jurassic world',
            width: 1848,
            height: 1000
        },
        description: `Welcome to a "Design-Swap", an assignment we did while studying the Front End Developer Program at Mediainstitutet. 
        In this project we got handed a desing from another group and coded the website acording to their vision. `,
        tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Sass', 'Prettier', 'EsLint', 'Vite', 'Vue','Node.js', 'Pnpm'],
        demo: 'https://mikaelakihl.github.io/mi-graphic-tools-assignment2-jurassic-world/',
        github: 'https://github.com/mikaelakihl/mi-graphic-tools-assignment2-jurassic-world',
        created_at: ""
    },
    {
        id: 5,
        title: 'Reptilicious',
        img: {
            src: './assets/reptilicous-portfolio.png',
            alt: 'reptilicious',
            width: 1833,
            height: 1003
        },
        description: `Welcome to the other project of the "Design-Swap", an assignment we did while studying the Front End Developer Program at Mediainstitutet. 
        In this project we handed over this design and another group code the website acording to our vision. `,
        tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Sass', 'Prettier', 'EsLint', 'Vite', 'Vue','Node.js', 'Npm'],
        demo: 'https://mikaelakihl.github.io/mi-graphic-tools-assignment1-reptilicious/',
        github: 'https://github.com/mikaelakihl/mi-graphic-tools-assignment1-reptilicious',
        created_at: ""
    },

];

export default project;