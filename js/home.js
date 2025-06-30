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
                  <div class="techLists mb-3"></div>
              </div>
          </div>
      </div>
    </div>
  `;
}

const techListsDiv = document.querySelectorAll(".techLists");
techListsDiv.forEach((techList, index) => {
  const technologies = projects[index].technologies;
  technologies.forEach((tech) => {
    const techDiv = document.createElement("div");
      techDiv.className = "btn btn-light rounded-5 disabled";
      techDiv.style.cssText = "font-size: 12px; margin: 3px; padding: 4px 8px 4px 8px;";
      techDiv.textContent = tech;

      techList.append(techDiv);
  })
});


// Yami work descriptions
const yamiWorkDescription = [
  {
    icon: "bi bi-calendar-heart work-icon",
    subtitle: "Brand Promotion",
    description: "Expanded Yami's presence at UC Irvine by organizing on-campus and online promotional events, including pop-ups and sampling experiences, attracting 100+ participants and increasing brand awareness."
  },
  {
    icon: "bi bi-tiktok work-icon",
    subtitle: "Social Media Marketing",
    description: "Created content-driven campaigns on TikTok and RedNote, including unboxing videos, product reviews, and discount promotions, reaching 10,000+ views and growing followers by 45%."
  },
  {
    icon: "bi bi-people work-icon",
    subtitle: "Growth Strategy",
    description: "Collected and analyzed user feedback to optimize marketing strategies, enhance engagement, and drive sales for beauty, snack, and lifestyle products."    
  }
];


const yamiContainer = document.querySelector(".yami-description-container");

yamiWorkDescription.forEach((description, index) => {
  const descriptionHTML = `
    <div class="col">
      <div class="card h-100" style="background-color: rgba(255, 255, 255, 0.5); border-width: 0; border-radius: 20px" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="${index * 200}">
          <div class="card-body">
              <div class="row g-0 align-items-center" style="text-align: left; padding: 10px;">
                  <div class="col-md-1 d-flex justify-content-center">
                      <i class="${description.icon}" style="font-size: 25px;"></i>
                  </div>
                  <div class="col-md-11">
                      <div class="card-body justify-content-center">
                          <h6 style="margin-bottom:0;">${description.subtitle}</h6>
                      </div>
                  </div>
                  <p style="margin-top: 9px;">${description.description}</p>
              </div>
          </div>
      </div>
    </div>
  `;
  yamiContainer.insertAdjacentHTML('beforeend', descriptionHTML);
});

