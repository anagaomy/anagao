// work skill lists 
const skillContainer = document.querySelector("#work .skill-lists");

const skills = [
  'Marketing', 
  'Growth Strategy', 
  'Data Analysis',
  'Social Media', 
  'Content Creation', 
  'Leadership',
  'Event Management', 
  'Customer Acquisition'
];

skills.forEach((skill) => {
  const skillDiv = document.createElement('div');
  skillDiv.className = 'btn btn-light rounded-5 mt-md-2 disabled';
  skillDiv.style.cssText = 'font-size: 16px; border-width: 0; margin-right: 5px; background-color: rgba(255, 255, 255, 0.5);';
  skillDiv.textContent = skill;

  skillContainer.appendChild(skillDiv);
});


// involvement skill lists
const skillSets = [
  // CU
  ["Content creation", "Design", "Branding", "Team collaboration", "Social media marketing"],
  // CUCS
  ["Peer support", "Collaboration", "Technical skills", "Networking", "Community engagement"], 
  // film academy
  ["Filming", "Directing", "script writing", "Video editing", "Storyboarding"],
  // cyberforward
  ["Third-party risk", "Vulnerability analysis", "Security policy"]
];

skillSets.forEach((skills, index) => {
  const cardListContainer = document.querySelector(`.card-list-${index + 1}`);

  skills.forEach(skill => {
    const card = document.createElement('a');
    card.className = "btn btn-light rounded-5 mt-md-2 disabled";
    card.style = "font-size: 14px; border-width: 0; margin: 0 2px 1px 2px";
    card.textContent = skill;

    cardListContainer.appendChild(card);
  });
});


// projects
const projects = [
    {
        title: "🏥 Medimate+", 
        type: "Web & Fullstack",
        src: "images/projects/medimate/dashboard.png",
        description: "A healthcare app for doctor appointment, health tracking, and AI-assisted clinic search.",
        technologies: ["React", "HTML", "CSS", "Javascript", "Vercel", "Render", "PostgreSQL", "Node.js/Express", "OpenAI API", "Google Map API"],
    },
    {
        title: "😴 Sleep Tracker",
        type: "iOS & Fullstack",
        src: "images/projects/sleeptracker/dashboard.png",
        description: "A simple mobile app to log and track your sleep and daily energy levels for better sleep habits.",
        technologies: ["Ionic", "HTML", "Scss", "Javascript", "Typescript", "Node.js"], 
    },
    {
        title: "🎵 Spotify Browser",
        type: "Web & Fullstack",
        src: "images/projects/spotify_browser/bruno.png",
        description: "A web tool that lets you explore and search Spotify music directly from your browser.",
        technologies: ["Angular", "HTML", "CSS", "Typescript", "Javascript", "Spotify API", "Node.js/Express"],
    },
    {
        title: "🏃 Runkeeper Tweet Report",
        type: "Web & Front-end",
        src: "images/projects/runkeeper/tweets.png",
        description: "A tool that analyzes and displays workout summaries from Runkeeper tweets.",
        technologies: ["HTML", "CSS", "Javascript", "Typescript"],
    },
    {
        title: "🎨 Canvas UI Redesign",
        type: "UI/UX",
        src: "images/projects/canvas/dashboard.png",
        description: "A modern, user-friendly redesign of the Canvas learning platform for smoother navigation and a better experience.",
        technologies: ["Figma", "Prototype", "Wireframe", "Hi-Fi Mockup"],
    },
    {
        title: "💬 Distributed Social Messenger",
        type: "Python",
        src: "images/projects/DSPchat/DSP-chat.jpeg",
        description: "A simple chat app that lets users send and receive messages without relying on a central server.",
        technologies: ["Python","Tkinter", "JSON", "Web API"],
    },
];


const carouselDiv = document.querySelector(".carousel");

projects.forEach((project, index) => {
  const carouselIndicators = document.querySelector(".carousel-indicators");
  const indicator = document.createElement("button");
  indicator.type  = "button";
  indicator.setAttribute("data-bs-target", "#carouselExampleDark");
  indicator.setAttribute("data-bs-slide-to", index);
  indicator.setAttribute("aria-label", `Slide ${index + 1}`);

  if (index === 0) {
    indicator.className = "active";
    indicator.setAttribute("aria-current", "true");
  }

  carouselIndicators.appendChild(indicator);

  const carouselInnerDiv = document.querySelector(".carousel-inner");
  carouselInnerDiv.insertAdjacentHTML('beforeend', createCarouselItem(project, index));
}); 

function createCarouselItem(project, index) {
  return `
    ${index === 0 ? `<div class="carousel-item active" data-bs-interval="2000">` 
        : `<div class="carousel-item" data-bs-interval="2000">`}
      <div class="carousel-img-wrapper">
          <img src="${project.src}" class="carousel-img d-block w-100" alt="${project.title}">
          <div class="carousel-overlay">
              <a class="btn btn-light rounded-5 mt-md-4 carousel-label disabled" style="--bs-btn-padding-y: .5rem;">
                  ${project.type}
              </a>
              <div class="carousel-caption d-none d-md-block" style="color: white;">
                  <h5>${project.title}</h5>
                  <p>${project.description}</p>
                  <a href="projects.html" class="btn btn-light rounded-5 mt-md-3 mb-3 custom-button" type="button" style="--bs-btn-padding-y: .8rem;">View project</a>
              </div>
          </div>
      </div>
    </div>
  `;
}