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

