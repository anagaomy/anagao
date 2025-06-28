// project titles
const projectTitles = [ 
    "🏥 Medimate+", "💤 Sleep Tracker",
    "🎵 Spotify Browser",
    "💬 Distributed Social Messenger",
    "🏃 Runkeeper Tweet Report",
    "🎨 Canvas UI Redesign"
];

// project-description 
const projectDescription = [
    "description of the project",
    "...",
    "...",
    "...",
    "...",
    "..."
];

// project abouts
const projectAbout = [
    "about the project",
    "...",
    "...",
    "...",
    "...",
    "..."
];

// Project technology lists
const technologySets = [
  // Medimate+
  ["React", "HTML", "CSS", "Javascript", "Vercel", "Render", "PostgreSQL", "Node.js/Express", "OpenAI API", "Google Map API"],
  // sleeptracker
  ["Ionic", "HTML", "Scss", "Javascript", "Typescript", "Node.js"], 
  // spotify browser
  ["Angular", "HTML", "CSS", "Typescript", "Javascript", "Spotify API", "Node.js/Express"],
  // Messanger
  ["Python","Tkinter", "JSON", "Web API"],
  // Runkeeper
  ["HTML", "CSS", "Javascript", "Typescript"],
  // Canvas
  ["Figma", "Prototype", "Wireframe", "Hi-Fi Mockup"]
];


// Youtube video links
const youtubeLinks = [
    "https://www.youtube.com/embed/HSwBGuq-D-E?autoplay=1&mute=1&controls=0&loop=1",
    "",
    "",
    "",
    "",
    "",
    ""
];


// project github links
const githubLinks = [
    "",
    "",
    "",
    "",
    "",
    ""
];


// project website links
const webLinks = [
    "",
    "",
    "",
    "",
    "",
    ""
];


// add project image wrapper
const projectImgWrapper = document.querySelectorAll(".project-img-wrapper");
projectImgWrapper.forEach((wrapper) => {
    const ImgOverlayDiv = document.createElement("div");
    ImgOverlayDiv.className = "project-img-overlay";

    const carouselCaption = document.createElement("div");
    carouselCaption.className = "carousel-caption d-none d-md-block";
    carouselCaption.style.cssText = "color: white; padding-bottom: 0px";
    ImgOverlayDiv.appendChild(carouselCaption);

    wrapper.appendChild(ImgOverlayDiv);
});


// add project captions
const carousels = document.querySelectorAll(".carousel-caption");
carousels.forEach((carousel) => {
    carousel.classList.add("project-captions");
});

const projectCaption = document.querySelectorAll(".project-captions");
projectCaption.forEach((caption, index) => {
    const title = document.createElement('h5');
    title.textContent = projectTitles[index];

    const description = document.createElement('p');
    description.textContent = projectDescription[index];

    const technologyDiv = document.createElement('div');
    technologyDiv.className = `technology-lists-${index + 1}`;

    caption.appendChild(title);
    caption.appendChild(description);
    caption.appendChild(technologyDiv);
});

// add technology sets
technologySets.forEach((technologies, index) => {
  const listContainer = document.querySelector(`.technology-lists-${index + 1}`);
  
  technologies.forEach(technology => {
    const listDiv = document.createElement('div');
    listDiv.className = "btn btn-light rounded-5 disabled";
    listDiv.style.cssText = "font-size: 10px; margin: 3px; padding: 4px 8px 4px 8px;";
    listDiv.textContent = technology;

    listContainer.appendChild(listDiv);
  });
});


// add modal for each project
const modals = document.querySelectorAll("modal");

modals.forEach((modal, index) => {
    const modalDialogDiv = document.createElement("div");
    modalDialogDiv.innerHTML = `
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content rounded-5 project-modal" style="background-color: rgba(255, 255, 255, 0.75); backdrop-filter: blur(10px);">
        </div>
    <div>
    `
    const modalContent = document.querySelector("modal-content");

    // modal header
    const modalHeaders = document.createElement("div");
    modalHeaders.className = "modal-header";

    const modalTitle = document.createElement("h1");
    modalTitle.className = "modal-title fs-5";
    modalTitle.id = "staticBackdropLabel";
    modalTitle.textContent = projectTitles[index];

    const cancelBtn = document.createElement("button");
    cancelBtn.className = "btn-close";
    cancelBtn.setAttribute("data-bs-dismiss", "modal");
    cancelBtn.setAttribute("aria-label", "Close");

    modalHeaders.appendChild(modalTitle);
    modalHeaders.appendChild(cancelBtn);

    // modal body
    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";

    const description = document.createElement("p");
    description.textContent = projectDescription[index];

    const youtubeVideo = document.createElement("iframe");
    youtubeVideo.className = "youtube-video";
    youtubeVideo.src = youtubeLinks[index];
    // youtubeVideo.frameBorder = "0";
    youtubeVideo.allow = "autoplay; encrypted-media";
    youtubeVideo.allowFullscreen = true;

    const aboutHeader = document.createElement("h6");
    aboutHeader.textContent = "About";

    const aboutProject = document.createElement("p");
    aboutProject.textContent = projectAbout[index];

    const techHeader = document.createElement("h6");
    techHeader.textContent = "Technology";

    const techLists = document.createElement("p");
    techLists.textContent = projectAbout[index];

    const projectLinks = document.createElement("div");
    const githubLink = document.createElement("div");
    const webLink = document.createElement("div");

    const github = document.createElement("a");
    const githubLogo = document.createElement("i");
    githubLogo.className = "bi bi-github link-icon";
    github.href = githubLinks[index];
    github.target = "_blank";
    github.appendChild(githubLogo);
    githubLink.appendChild(github);

    const website = document.createElement("a");
    const websiteLogo = document.con


    modalContent.appendChild(modalHeaders);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalDialogDiv);
});