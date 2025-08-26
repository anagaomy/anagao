const projects = [
    // INF 124 – Medimate+
    {
        id: "medimateModal",
        title: "🩺 Medimate+", 
        description: "A healthcare web app for doctor appointment, health tracking, and AI-assisted clinic search.",
        about: "Medimate+ is a fullstack healthcare web application integrating APIs that helps users manage medical appointments, track health data, and access location-based clinic recommendations using Google Maps and AI-powered assistance.",
        technologies: ["React", "HTML", "CSS", "Javascript", "Vercel", "Render", "PostgreSQL", "Node.js/Express", "OpenAI API", "Google Map API"],
        youtubeLink: "https://www.youtube.com/embed/HSwBGuq-D-E?autoplay=1&mute=1&controls=0&loop=1",
        githubLink: "https://github.com/XiaomengDong/medimate",
        webLink: "https://medimate-chi.vercel.app/dashboard",
        imgSrc: "images/projects/medimate/dashboard.png",
        figmaLink: "https://embed.figma.com/design/jSpwSZG9TRbkAneMt3d1QP/Medimate--UI-design?node-id=0-1&embed-host=share"
    },

    // INF 133 – Sleep Tracker
    {
        id: "sleeptrackerModal",
        title: "😴 Sleep Tracker",
        description: "A simple mobile app to log and track your sleep and daily energy levels for better sleep habits.",
        about: "Sleep Tracker is cross-platform mobile app to log and review overnight sleep and daytime sleepiness data using Ionic and Node.js",
        technologies: ["Ionic", "HTML", "Scss", "Javascript", "Typescript", "Node.js"], 
        youtubeLink: "https://www.youtube.com/embed/rgn8NQtAel4?autoplay=1&mute=1&controls=0&loop=1",        
        githubLink: "https://github.com/anagaomy/inf133-sleeptracker",
        webLink: "",
        imgSrc: "images/projects/sleeptracker/sleeptracker-demo.GIF"
    },

    // INF 133 – Spotify Browser
    {
        id: "spotifyModal",
        title: "🎵 Spotify Browser",
        description: "A web tool that lets you explore and search Spotify music directly from your browser.",
        about: "Spotify Browser is a web app using Angular and Spotify API to browse, search, and display real-time Spotify music data.",
        technologies: ["Angular", "HTML", "CSS", "Typescript", "Javascript", "Spotify API", "Node.js/Express"],
        youtubeLink: "https://www.youtube.com/embed/DWUlPqBxBPc?autoplay=1&mute=1&controls=0&loop=1",        
        githubLink: "https://github.com/anagaomy/inf133-a3-spotfy-browser",
        webLink: "",
        imgSrc: "images/projects/spotify_browser/spotify-browser-demo.GIF"
    },

    // ICS 32 – Canvas UI Redesign
    {
        id: "chatModal",
        title: "💬 Distributed Social Messenger",
        description: "A simple chat app that lets users send and receive messages without relying on a central server.",
        about: "Distributed Social Messenger is a Python-based decentralized messenger using Tkinter and Web APIs for real-time message exchange.",
        technologies: ["Python","Tkinter", "JSON", "Web API"],
        youtubeLink: "",        
        githubLink: "",
        webLink: "",
        imgSrc: "images/projects/DSPchat/DSP-chat.jpeg"
    },

    // INF 133 – Runkeeper Tweet Report
    {
        id: "runkeeperModal",
        title: "🏃 Runkeeper Tweet Report",
        description: "A tool that analyzes and displays workout summaries from Runkeeper tweets.",
        about: "Runkeeper Tweet Report is a web app that parses and summarizes Runkeeper workout data from JSON tweets using HTML, CSS, JavaScript, and TypeScript.",
        technologies: ["HTML", "CSS", "Javascript", "Typescript", "Vega-Lite"],
        youtubeLink: "https://www.youtube.com/embed/c3pllqUbVHw?autoplay=1&mute=1&controls=0&loop=1",        
        githubLink: "https://github.com/anagaomy/a2-tweets-anagaomy",
        webLink: "",
        imgSrc: "images/projects/runkeeper/runkeeper-demo.GIF"
    },

    // INF 113 – PPM
    {
        id: "ppmProject",
        title: "🐶 Pooch Palace Management System",
        description: "Requirements engineering and system design project for a dog daycare expanding into retail.",
        about: "Led end-to-end requirement documentation, stakeholder interviews, and system analysis. Produced detailed UML diagrams, user stories, and functional specifications to align business goals with technical feasibility.",
        technologies: ["UML", "Use Case Diagrams", "Figma", "Requirement Specifications"],
        youtubeLink: "",        
        githubLink: "",
        webLink: "https://drive.google.com/drive/folders/1FvOSpxDilTec9WvOYqJb91AWzcGGRAus?usp=sharing",
        imgSrc: "images/projects/inf113/hw5.png",
        pdfLink: "https://drive.google.com/file/d/1cJxb8sro24rJH8MxJiknaH8a5fl-7Jyy/preview"
    },

    // Tencent Product Manager Bootcamp
    {
        id: "tencentPM",
        title: "🤖 Tencent AI Search Engine",
        description: "Designed an AI-powered search engine to improve user discovery and engagement.",
        about: "Completed a product management bootcamp with Tencent, focusing on user research, product requirement documents, wireframes, and MVP design. Defined KPIs and success metrics for recommendation quality and user engagement.",
        technologies: ["Product Management", "Figma", "Wireframing", "User Research", "PRD"],
        youtubeLink: "",        
        githubLink: "",
        webLink: "https://drive.google.com/drive/folders/1rBaNlXmXWWwjmohDYzdJxexBzLrV0U2f",
        imgSrc: "images/projects/tencent/ppt.png",
        figmaLink: "https://embed.figma.com/design/GeVujJtz8t006U5ShGMAcF/AI%E6%90%9C%E7%B4%A2%E4%BA%A7%E5%93%81%E8%AE%BE%E8%AE%A1%E5%8E%9F%E5%9E%8B?node-id=0-1&embed-host=share",
        pdfLink: "https://drive.google.com/file/d/1D8SuPAgYV8TDTmPWkRR_zUxV1rlOdZD0/preview"
    },

    // INF 131 – UI Design
    {
        id: "canvasModal",
        title: "🎨 Canvas UI Redesign",
        description: "A modern, user-friendly redesign of the Canvas learning platform for smoother navigation and a better experience.",
        about: "Redesigned Canvas UI with Figma, developing wireframes, interactive prototypes, and high-fidelity mockups to improve usability.",
        technologies: ["Figma", "Prototype", "Wireframe", "Hi-Fi Mockup"],
        youtubeLink: "https://www.youtube.com/embed/9Imvim1OI8U?autoplay=1&mute=1&controls=0&loop=1",        
        githubLink: "https://github.com/anagaomy/ics32_assignment5",
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
                ${project.pdfLink ? 
                `<div class="pdf-link">
                    <a href="${project.pdfLink}" target="_blank">
                        <i class="bi bi-file-earmark-pdf link-icon"></i>
                    </a>
                </div>`
                : ''}
            </div>
            ${project.figmaLink ? 
                `<iframe class="figma-links"; style="solid rgba(0, 0, 0, 0.1);" src="${project.figmaLink}" frameborder="0" allowfullscreen></iframe>` 
                : ''}
            ${project.pdfLink ? 
                `<iframe class="pdf-links"; style="solid rgba(0, 0, 0, 0.1);" src="${project.pdfLink}" frameborder="0" allow="autoplay"></iframe>` 
                : ''}
        </div>    
    `;
}


function initProjectGrid() {
const modalContainer = document.querySelector("#projects-main .project-grid");

// Hide grid until images are fully loaded
modalContainer.classList.add("is-hidden");

const projectImgWrapper = document.querySelectorAll(".project-img-wrapper");
projectImgWrapper.forEach((wrapper, index) => {
    const overlayHTML = `
    <div class="project-img-overlay">
            <div class="carousel-caption d-none d-md-block" style="color: white; padding-bottom: 0;">
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
        // Reveal grid after Masonry has been initialized
        grid.classList.remove('is-hidden');
        grid.classList.add('is-visible');
        const loader = document.getElementById('projects-loader');
        if (loader) {
            loader.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the projects page
    if (document.querySelector('#projects-main')) {
        initProjectGrid();
    }
});