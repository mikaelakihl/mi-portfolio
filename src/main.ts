import project from "./projects";

const projects = document.querySelector('#projectContainer');

if (projects) {
    projects.innerHTML = project
    .map(p => `
      <h3>${p.title}</h3>
      <img src="${p.img?.src}" width="${p.img?.width}" height="${p.img?.height}">
      <p>${p.description}</p>
        <span>${p.tech}</span>
        <a href="${p.demo}">View Demo</a>
        <a href="${p.github}">Go to Github</a>
      `)
      .join('');




}

