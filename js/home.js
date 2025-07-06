// IntersectionObserver setup
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove 'active' class from all links
      navLinks.forEach(link => {
        link.classList.remove('active');
        // Optional: Reset to default styles
        link.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        link.style.fontWeight = '200';
      });

      // Add 'active' class to the current link
      const activeLink = document.querySelector(`.collapse .nav-link[href$="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.remove('other-page');
        activeLink.classList.add('active');
        activeLink.style.backgroundColor = 'rgb(255, 255, 255)';
        activeLink.style.color = '#000000';
      }
    }
  });
}, { threshold: 0.4 }); // Trigger when 40% of section is visible

// Start observing each section
sections.forEach(section => observer1.observe(section));

// work skill lists 
const skillContainer = document.querySelector("#work .skill-lists");

const skills = [
  'E-commerce Marketing',
  'Digital Marketing', 
  'Growth Strategy', 
  'Data Analysis',
  'Content Creation', 
  'Customer Acquisition',
  'Event Management', 
  'Social Media', 
  'Leadership',
  'Beauty, Fashion & Trends'
];

skills.forEach((skill) => {
  const skillDiv = document.createElement('div');
  skillDiv.className = 'btn btn-light rounded-5 mt-md-2';
  skillDiv.style.cssText = 'font-size: 15px; border-width: 0; margin-right: 5px; background-color: rgba(255, 180, 203);';
  skillDiv.textContent = skill;

  skillContainer.appendChild(skillDiv);
});


// Yami work descriptions
const yamiWorkDescription = [
  {
    icon: "bi bi-calendar-heart work-icon",
    subtitle: "Brand Promotion",
    description: "Expanded Yami's e-commerce presence in the local shopping center and Asian community by organizing both offline and online promotional events, including pop-ups and product sampling experiences, attracting over 100 customers and significantly increasing brand awareness."
  },
  {
    icon: "bi bi-tiktok work-icon",
    subtitle: "Social Media Marketing",
    description: "Created content-driven campaigns on TikTok, Instagram and RedNote for Yami's e-commerce platform, featuring unboxing videos, product reviews, and discount promotions, reaching 10,000+ views and growing followers by over 50%."
  },
  {
    icon: "bi bi-people work-icon",
    subtitle: "Growth Strategy",
    description: "Collected and analyzed user feedback and social media data from TikTok, Instagram, and RedNote to optimize e-commerce marketing strategies, boost engagement, and drive sales for beauty, snack, and lifestyle products."    
  }
];


const yamiContainer = document.querySelector(".yami-description-container");

yamiWorkDescription.forEach((description, index) => {
  const descriptionHTML = `
    <div class="col">
      <div class="card h-100" style="background-color: rgba(255, 255, 255, 0.9); border-width: 0; border-radius: 20px" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="${index * 200}">
          <div class="card-body">
              <div class="row g-0 align-items-center" style="text-align: left; padding: 10px;">
                  <div class="col-md-1 d-flex justify-content-center">
                      <i class="${description.icon}" style="font-size: 25px;"></i>
                  </div>
                  <div class="col-md-11">
                      <div class="card-body justify-content-center">
                          <h6 style="margin-bottom: 0; font-size: 20px">${description.subtitle}</h6>
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
              <a class="btn btn-light mt-md-4 carousel-label disabled rounded-5" style="--bs-btn-padding-y: .5rem;">
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


// skills data
const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      {src: "images/skills/C_Logo.png", name: "C"}, 
      {src: "images/skills/CPlusPlus.svg", name: "C++"}, 
      {src: "images/skills/Java.svg", name: "Java"}, 
      {src: "images/skills/Python.svg", name: "Python"},  
      {src: "images/skills/html5.svg", name: "HTML"}, 
      {src: "images/skills/css3.svg", name: "CSS"}, 
      {src: "images/skills/JS.svg", name: "JavaScript"}, 
      {src: "images/skills/typescript.png", name: "TypeScript"}, 
      {src: "images/skills/sql.png", name: "SQL"}, 
      {src: "images/skills/R.svg", name: "R"}
    ]
  },
  {
    category: "Development Frameworks",
    skills: [
      {src: "images/skills/react.png", name: "React"},
      {src: "images/skills/angular.webp", name: "Angular"},
      {src: "images/skills/ionic.png", name: "Ionic"},
      {src: "images/skills/bootstrap.png", name: "Bootstrap"},
      {src: "images/skills/express.png", name: "Express.js"},
      {src: "images/skills/nextjs.webp", name: "Next.js"}
    ]
  },
  {
    category: "Software Tools", 
    skills: [
      { src: "images/skills/Figma-logo.svg", name: "Figma"},
      { src: "images/skills/canva.png", name: "Canva"},
      { src: "images/skills/word.svg", name: "Word"},
      { src: "images/skills/powerpoint.svg", name: "PowerPoint"},
      { src: "images/skills/excel.png", name: "Excel"},
      { src: "images/skills/premiere_pro.png", name: "Premiere Pro"},
      { src: "images/skills/photoshop.png", name: "Photoshop"},
      { src: "images/skills/illustrator.png", name: "Illustrator"},
      { src: "images/skills/capcut.png", name: "CapCut"},
      { src: "images/skills/git.png", name: "Git"},
      { src: "images/skills/nodejs.webp", name: "Node.js"},
      { src: "images/skills/mongodb.svg", name: "MongoDB"},
      { src: "images/skills/Postgresql.png", name: "PostgreSQL"},
      { src: "images/skills/vercel.png", name: "Vercel"},
      { src: "images/skills/render.jpg", name: "Render"}
    ]
  },
  {
    category: "Languages",
    skills: [
      { src: "images/skills/USA.png", name: "English"},
      { src: "images/skills/China.png", name: "Chinese"}
    ]
  },
];

// skills section container
const skillsContainer = document.querySelector(".skills-container");

skillsData.forEach((skillSet) => {
  const skillsDiv = document.createElement("div");
  skillsDiv.setAttribute("data-aos", "fade-up");
  skillsDiv.setAttribute("data-aos-duration", "1000");

  const skillTitle = document.createElement("h4");
  skillTitle.className = "skill-category";
  skillTitle.textContent = skillSet.category;

  const skillPartDiv = document.createElement("div");
  skillPartDiv.className = "skills-part";

  skillSet.skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill";

    const source = document.createElement("img");
    const name = document.createElement("p");
    source.src = skill.src;
    source.alt = skill.name;
    name.textContent = skill.name;
    skillDiv.appendChild(source);
    skillDiv.appendChild(name);

    skillPartDiv.appendChild(skillDiv);
  });
  
  skillsDiv.appendChild(skillTitle);
  skillsDiv.appendChild(skillPartDiv);
  skillsContainer.appendChild(skillsDiv);
});



// involvements container 
const involvements = [
  // CU
  {
    title: "Marketing Officer",
    name: "UCI Chinese Union",
    date: "June 2023 - present",
    img: "images/involvement/cu.png",
    skillSets: ["Content creation", "Design", "Branding", "Team collaboration", "Social media marketing"]
  },
  // CUCS
  {
    title: "Event Coordinator",
    name: "UCI CUCS",
    date: "Sept 2024 - present",
    img: "images/involvement/cucs.jpeg",
    skillSets: ["Peer support", "Collaboration", "Technical skills", "Networking", "Community engagement"]
  },
  {
    title: "Student Video Producer",
    name: "AUHSD Film Academy",
    date: "Aug 2022 - May 2023",
    img: "images/involvement/film-academy.jpg",
    skillSets: ["Filming", "Directing", "Script writing", "Video editing", "Storyboarding"]
  },
  {
    title: "Cyber Security Trainee",
    name: "CyberForward",
    date: "May 2022 - Jul 2022",
    img: "images/involvement/cyberforward_logo.jpeg",
    skillSets: ["Third-party risk", "Vulnerability analysis", "Security policy"]
  },  
];


const involvementContainer = document.querySelector("#involvement .row")
involvements.forEach((involvement, index) => {
  const involvementHTML = `
    <div class="col" onclick="window.location.href='involvement.html'">
      <div class="card h-100" style="background-color: rgba(255, 255, 255, 0.5); border-width: 0; border-radius: 20px" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="${index * 200}">
          <img src="${involvement.img}" class="card-img-top involvement-img" alt="An image of ${involvement.name} logo" style="border-top-left-radius: 20px; border-top-right-radius: 20px;">
          <div class="card-body">
              <h5 class="card-title">${involvement.title}</h5>
              <p class="card-text">${involvement.name}</p>
              <p class="card-text work-date">${involvement.date}</p>
              <div class="card-list"></div>
              <div class="arrow-button-container">
                  <i class="bi bi-arrow-right-circle arrow-button-outline"></i>
                  <i class="bi bi-arrow-right-circle-fill arrow-button"></i>
              </div>
          </div>
      </div>
    </div>
  `;

  involvementContainer.insertAdjacentHTML('beforeend', involvementHTML);
});


const involvementCardList = document.querySelectorAll("#involvement .card-list");
involvementCardList.forEach((cardList, index) => {
  const skillSets = involvemnets[index].skillSets;
  skillSets.forEach((skill) => {
    const card = document.createElement('a');
    card.className = "btn btn-light rounded-5 mt-md-2 disabled";
    card.style = "font-size: 13px; border-width: 0; margin: 0 2px 1px 2px";
    card.textContent = skill;

    cardList.appendChild(card);
  });
}); 


