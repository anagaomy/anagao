const projects = [
    {
        id: "medimateModal",
        title: "🏥 Medimate+", 
        description: "description of the project",
        about: "about the project",
        technologies: ["React", "HTML", "CSS", "Javascript", "Vercel", "Render", "PostgreSQL", "Node.js/Express", "OpenAI API", "Google Map API"],
        youtubeLink: "https://www.youtube.com/embed/HSwBGuq-D-E?autoplay=1&mute=1&controls=0&loop=1",
        githubLink: "https://github.com",
        webLink: "https://medimate-chi.vercel.app/dashboard",
        imgSrc: "images/projects/medimate/dashboard.png",
        figmaLink: "https://embed.figma.com/design/jSpwSZG9TRbkAneMt3d1QP/Medimate--UI-design?node-id=0-1&embed-host=share"
    },
    {
        id: "sleeptrackerModal",
        title: "😴 Sleep Tracker",
        description: "description of the project",
        about: "about the project",
        technologies: ["Ionic", "HTML", "Scss", "Javascript", "Typescript", "Node.js"], 
        youtubeLink: "https://www.youtube.com/embed/rgn8NQtAel4?autoplay=1&mute=1&controls=0&loop=1",        
        githubLink: "https://github.com",
        webLink: "",
        imgSrc: "images/projects/sleeptracker/sleeptracker-demo.GIF"
    },
    {
        id: "spotifyModal",
        title: "🎵 Spotify Browser",
        description: "description of the project",
        about: "about the project",
        technologies: ["Angular", "HTML", "CSS", "Typescript", "Javascript", "Spotify API", "Node.js/Express"],
        youtubeLink: "https://www.youtube.com/embed/DWUlPqBxBPc?autoplay=1&mute=1&controls=0&loop=1",        
        githubLink: "https://github.com",
        webLink: "",
        imgSrc: "images/projects/spotify_browser/spotify-browser-demo.GIF"
    },
    {
        id: "chatModal",
        title: "💬 Distributed Social Messenger",
        description: "description of the project",
        about: "about the project",
        technologies: ["Python","Tkinter", "JSON", "Web API"],
        youtubeLink: "",        
        githubLink: "",
        webLink: "",
        imgSrc: "images/projects/DSPchat/DSP-chat.jpeg"
    },
    {
        id: "runkeeperModal",
        title: "🏃 Runkeeper Tweet Report",
        description: "description of the project",
        about: "about the project",
        technologies: ["HTML", "CSS", "Javascript", "Typescript"],
        youtubeLink: "https://www.youtube.com/embed/c3pllqUbVHw?autoplay=1&mute=1&controls=0&loop=1",        
        githubLink: "https://github.com",
        webLink: "",
        imgSrc: "images/projects/runkeeper/runkeeper-demo.GIF"
    },
    {
        id: "canvasModal",
        title: "🎨 Canvas UI Redesign",
        description: "description of the project",
        about: "about the project",
        technologies: ["Figma", "Prototype", "Wireframe", "Hi-Fi Mockup"],
        youtubeLink: "https://www.youtube.com/embed/9Imvim1OI8U?autoplay=1&mute=1&controls=0&loop=1",        
        githubLink: "",
        webLink: "",
        imgSrc: "images/projects/canvas/dashboard.png",
        figmaLink: "https://embed.figma.com/design/6wd6PO9RECCJsKZue1brqR/Canvas-UI-Redesign?node-id=0-1&embed-host=share"
    },
];


function createModalContent(project) {
    return `
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">${project.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>${project.description}</p>
            ${project.youtubeLink ? `<iframe class="youtube-video" src="${project.youtubeLink}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
                 : `<img class="grid-image" src="${project.imgSrc}" style="margin-bottom: 20px;"></img>`}
            <h5>About</h6>
            <p>${project.about}</p>
            <h5>Technologies</h6>
            <div class="tech-lists">
            </div>
            <div class="project-links">
                ${project.githubLink ? 
                `<div class="github-link">
                    <a href="${project.githubLink}" target="_blank">
                        <i class="bi bi-github link-icon"></i>
                    </a>
                </div>`
                : ''}
                ${project.webLink ? 
                `<div class="web-link">
                    <a href="${project.webLink}" target="_blank">
                        <i class="bi bi-globe2 link-icon"></i>
                    </a>
                </div> `
                : ''}
                ${project.figmaLink ? 
                `<div class="figma-link">
                    <a href="${project.figmaLink}" target="_blank">
                        <img src="images/skills/figma-icon.png" width= 24px;></img>
                    </a>
                </div>` 
                : ''
                }
            </div>
            ${project.figmaLink ? 
                `<iframe class="figma-links"; style="solid rgba(0, 0, 0, 0.1);" src="${project.figmaLink}" frameborder="0" allowfullscreen></iframe>` 
                : ''}
        </div>    
    `;
}


function initProjectGrid() {
const modalContainer = document.querySelector("#projects-main .project-grid");

const projectImgWrapper = document.querySelectorAll(".project-img-wrapper");
projectImgWrapper.forEach((wrapper, index) => {
    const overlayHTML = `
    <div class="project-img-overlay">
            <div class="carousel-caption d-none d-md-block" style="color: white;">
                <h5>${projects[index].title}</h5>
                <p>${projects[index].description}</p>
                <div class="technology-lists"></div>
            </div>
        </div>
    `;
    wrapper.insertAdjacentHTML('afterbegin', overlayHTML);
});

const technologyListsDiv = document.querySelectorAll(".technology-lists");
    technologyListsDiv.forEach((listDiv, index) => {
        const techLists = projects[index].technologies;
        techLists.forEach((technology) => {
            const techDiv = document.createElement("div");

            techDiv.className = "btn btn-light rounded-5 disabled";
            techDiv.style.cssText = "font-size: 10px; margin: 3px; padding: 4px 8px 4px 8px;";
            techDiv.textContent = technology;

            listDiv.appendChild(techDiv);
        });
    });

    projects.forEach((project) => {
        const modalHTML = `
            <div class="modal fade project-modal" id="${project.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content rounded-5 project-modal" style="background-color: rgba(255, 255, 255, 0.75); backdrop-filter: blur(10px);">
                        ${createModalContent(project)}
                    </div>
                </div>
            </div>     
        `;

        modalContainer.insertAdjacentHTML('beforeend', modalHTML);
    });

    const techListsDiv = document.querySelectorAll(".tech-lists");
    techListsDiv.forEach((listDiv, index) => {
        const techLists = projects[index].technologies;
        techLists.forEach((technology) => {
            const techDiv = document.createElement("div");

            techDiv.className = "btn btn-light rounded-5 disabled";
            techDiv.style.cssText = "font-size: 10px; margin: 3px; padding: 4px 8px 4px 8px;";
            techDiv.textContent = technology;

            listDiv.appendChild(techDiv);
        });
    });

    const grid = document.querySelector('.project-grid');
    imagesLoaded(grid, function() {
        new Masonry(grid, {
            itemSelector: '.project-img-wrapper',
            columnWidth: '.project-img-wrapper',
            gutter: 20,
            percentPosition: true,
            transitionDuration: '0.8s'
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the projects page
    if (document.querySelector('#projects-main')) {
        initProjectGrid();
    }
});