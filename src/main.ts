// main.ts eller main.js
import './style.scss';
import project from "./projects";

const projects = document.querySelector('#projectContainer');

const techClassMap: Record<string, string> = {
  HTML: "html",
  CSS: "css",
  JavaScript: "js",
  TypeScript: "ts",
  Sass: "sass",
  Prettier: "prettier",
  EsLint: "eslint",
  Vite: "vite",
  Vue: "vue",
  "Node.js": "node",
  "API:s": "api",
  "Pair programming": "pairprogramming",
  Github: "github",
  Pnpm: "pnpm",
  Npm: "npm",
  Express: "express",
  MongoDB: "mongodb"
};


if (projects) {
  projects.innerHTML = project
  .slice()
  .reverse()
  .map(p => `
      <div class="project-wrapper">
        <div class="project-img-wrapper">
          <img src="${p.img?.src}" width="${p.img?.width}" height="${p.img?.height}">
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <ul class="colorful-list project-list">
        ${p.tech.map(tech => {
          const className = techClassMap[tech] ? `color-from-icon-${techClassMap[tech]}` : '';
          return `<li class="${className}">${tech}</li>`;
        }).join('')}
        
        </ul>
        <div class="project-links">
          <a target="_blank" class="project-link" href="${p.demo}">View Demo</a>
          <a target="_blank" class="project-link" href="${p.github}">View on Github</a>
        </div>
       </div>
      `)
      .join('');




}



