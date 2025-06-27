// Project technology lists
const technologySets = [
  // Medimate+
  ["React", "HTML"],
  // sleeptracker
  ["Ionic", "HTML"], 
  // spotify browser
  ["Angular", "HTML"],
  // Messanger
  ["Python", "API"],
// Runkeeper
  ["HTML", "Javascript", "Typescript"],
  // Canvas
  ["Figma"]
];

technologySets.forEach((technologies, index) => {
  const listContainer = document.querySelector(`.technology-lists-${index + 1}`);
  
  technologies.forEach(technology => {
    const listDiv = document.createElement('div');
    listDiv.className = "btn btn-light rounded-5 disabled";
    listDiv.style.cssText = "font-size: 12px; margin: 0 3px 0 3px;";
    listDiv.textContent = technology;

    listContainer.appendChild(listDiv);
  });
});