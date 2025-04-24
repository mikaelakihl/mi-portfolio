// main.ts eller main.js
import './style.scss';
import project from "./projects";

const projects = document.querySelector('#projectContainer');

if (projects) {
    projects.innerHTML = project
    .map(p => `
      <div class="project-wrapper">
        <div class="project-img-wrapper">
          <img src="${p.img?.src}" width="${p.img?.width}" height="${p.img?.height}">
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <ul class="colorful-list project-list">
          ${p.tech.map(tech => `<li>${tech}</li>`).join('')}
        </ul>
        <div class="project-links">
          <a class="project-link" href="${p.demo}">View Demo</a>
          <a class="project-link" href="${p.github}">Go to Github</a>
        </div>
       </div>
      `)
      .join('');




}

