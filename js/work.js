// work experiences 
const works = [
    // Yami
    {
        id: "yami",
        num: "1",
        overview: {
            company: "YAMI",
            logoImg: "images/work/Yami/yami.png",
            link: "https://www.linkedin.com/company/yamibuy-com/posts/?feedView=all",
            position: "Student Ambassador",
            duration: "Oct 2024 - present",
            description: "As a Student Ambassador at Yami, I led both brand promotion and social media marketing initiatives to expand Yami's e-commerce presence among the local Asian community."
        },
        
        keyContributions: [
            {
                icon: "bi bi-calendar-heart work-icon",
                subtitle: "Brand Promotion",
                description: "Expanded Yami's e-commerce presence in the local shopping center and Asian community by organizing both offline and online promotional events, including pop-ups and product sampling experiences, attracting over 100 customers and significantly increasing brand awareness."
            },
            {
                icon: "bi bi-tiktok work-icon",
                subtitle: "Social Media Marketing",
                description: "Managed social media account and created content-driven campaigns on TikTok, RedNote and Instagram for YAMI, including unboxing videos, product reviews, and discount promotions, reaching 10,000+ views and growing followers by 45%."
            },
            {
                icon: "bi bi-people work-icon",
                subtitle: "Growth Strategy",
                description: "Collected and analyzed user feedback and social media performance metrics from TikTok, RedNote and Instagram to optimize e-commerce marketing strategies, boost engagement, and drive sales for beauty, skincare, snack, and lifestyle products."    
            }
        ],

        keySkills: [
            'E-commerce Marketing',
            'Digital Marketing', 
            'Growth Strategy', 
            'Data Analysis',
            'Content Creation', 
            'Customer Acquisition',
            'Event Management', 
            'Social Media', 
            'Leadership',
            'Beauty, Skincare, Fashion & Trends'
        ],

        exmapleImgs: [
            "images/work/Yami/video-screenshot.png",
            "images/work/Yami/yami-homepage.jpg",
            "images/work/Yami/data-analysis.PNG"
        ]
    },
    // BorderX Media
    {
        id: "borderx",
        num: "2",
        overview: {
            company: "BorderX Media",
            logoImg: "images/work/borderx/borderx-logo.jpeg",
            link: "https://www.linkedin.com/company/borderxmedia/posts/?feedView=all",
            position: "Software Engineering Intern",
            duration: "Jul 2025 - present",
            description: "Contributed to the development of a full-stack AI-powered Learning Management System (LMS), collaborating with cross-functional teams to align technical features with product and user needs."
        },
        
        keyContributions: [
            {
                icon: "bi bi-code-slash work-icon",
                subtitle: "Frontend Development",
                description: "Developed dynamic and responsive user interfaces for an AI-powered Learning Management System (LMS) using React and Tailwind CSS, delivering a seamless experience across desktop for students and parents seeking personalized academic guidance and private school/college admissions support."
            },
            {
                icon: "bi bi-diagram-3 work-icon",
                subtitle: "UI/UX Collaboration",
                description: "Collaborated with UX designers to iterate on wireframes and prototypes from Figma, enhancing accessibility, usability, and overall aesthetic consistency."
            },
            {
                icon: "bi bi-database work-icon",
                subtitle: "Backend Integration",
                description: "Integrated frontend components with backend APIs for real-time student progress tracking using Firebase Firestore, ensuring seamless data synchronization and supporting AI-driven recommendations."    
            },
            {
                icon: "bi bi-people-fill work-icon",
                subtitle: "Cross-Functional Collaboration",
                description: "Worked closely with cross-functional teams (backend engineers, product managers, and content strategists) to optimize frontend performance and streamline onboarding workflows, improving engagement metrics."    
            }
        ],

        keySkills: [
            'Full-Stack Development',
            'React & Tailwind CSS',
            'UI/UX Collaboration',
            'Firebase Firestore',
            'Product Development',
            'Cross-Functional Communication',
            'Agile Workflows',
            'Data-Driven Features',
            'Problem Solving',
            'Technical Documentation'
        ],

        exmapleImgs: [
            "images/work/borderx/entry.jpg",
            "images/work/borderx/dashboard.jpg",
            "images/work/borderx/firebase.png"
        ]
    },
    // private kitchen
    {
        id: "private-kitchen",
        num: "3",
        overview: {
            company: "Private Kitchen",
            logoImg: "images/work/tasty-crispy/tasty-crispy-logo.JPG",
            link: "",
            position: "Social Media Manager",
            duration: "Mar 2025 - Present",
            description: "As the Social Media Manager for a private kitchen, I created and managed RedNote content strategies to attract local customers, promote signature dishes, and build an online following from scratch."
        },

        keyContributions: [
            {
                icon: "bi bi-camera-video work-icon",
                subtitle: "Content Creation & Management",
                description: "Produced engaging food videos and promotional posts on RedNote to showcase the private kitchen's dishes, highlighting their freshness, preparation, and cultural stories."
            },
            {
                icon: "bi bi-bar-chart-line work-icon",
                subtitle: "Social Media Growth",
                description: "Grew the private kitchen's RedNote account to over 200 followers and achieved a top-performing post with 6,000+ views within 3 months of launching the account."
            },
            {
                icon: "bi bi-graph-up-arrow work-icon",
                subtitle: "Brand Awareness",
                description: "Increased local brand visibility and customer engagement through consistent posting, visual storytelling, and interaction with the RedNote food community."
            }
        ],

        keySkills: [
            'Content Creation',
            'Social Media Management',
            'Brand Building',
            'Customer Engagement',
            'Growth Strategy',
            'Food Photography',
            'Video Editing',
            'Digital Marketing',
            'Community Management',
            'Storytelling'
        ],

        exmapleImgs: [
            "images/work/tasty-crispy/homepage.jpg",
            "images/work/tasty-crispy/top-post.PNG",
            "images/work/tasty-crispy/data-analysis.PNG"
        ]
    }
];

function changeImage(imgIndex, workIndex) {
    const images = document.querySelectorAll(".example-img");
    const image = images[workIndex];

    // Fade out
    image.style.opacity = 0;

    setTimeout(() => {
        // Change image
        image.setAttribute('src', works[workIndex].exmapleImgs[imgIndex]);

        // Force reflow
        image.removeAttribute('data-aos');
        void image.offsetWidth;
        image.setAttribute('data-aos', 'fade');
        image.setAttribute('data-aos-duration', '300');

        // Fade back in
        image.style.opacity = 1;

        AOS.refresh();
    }, 200); 
};


function createWorkContainer(work, index) {
    return `
        <div class="row row-cols-2">
            <div class="col left-img">
                <img class="rounded-5 example-img" src="${work.exmapleImgs[0]}">
            </div>
            <div class="col right-text">
                <div class="accordion" id="${work.id}">
                    <div class="accordion-item rounded-5">
                        <div class="accordion-header">
                            <button class="btn accordion-button rounded-5" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#collapse${work.num}" 
                                aria-expanded="true" aria-controls="collapse${work.num}" 
                                onclick="changeImage(0, ${index})">
                                <h5>OVERVIEW</h5>
                            </button>
                        </div>
                        <div id="collapse${work.num}" class="accordion-collapse collapse show" data-bs-parent="#${work.id}">
                            <div class="accordion-body">
                                <h3 class="work-overview-title">${work.overview.position}</h3>
                                <h5 style="font-weight: 300; font-size: 20px; margin-top: 10px;">
                                    ${work.overview.company}
                                </h5>
                                <h5 style="font-weight: 300; font-size: 16px;">
                                    ${work.overview.duration}
                                </h5>
                                ${work.overview.link ? `<a class="company-logo" href="${work.overview.link}" target="_blank">` : `<a class="company-logo">`}
                                    <img src="${work.overview.logoImg}" alt="${work.overview.changeImage} logo">
                                </a>
                                <p class="overview-description">
                                    ${work.overview.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item rounded-5">
                        <h2 class="accordion-header">
                            <button class="btn accordion-button rounded-5 collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#collapse${work.num + 1}" 
                                aria-expanded="false" aria-controls="collapse${work.num + 1}"
                                onclick="changeImage(1, ${index})">
                                <h5>KEY CONTRIBUTIONS</h5>
                            </button>
                        </h2>
                        <div id="collapse${work.num + 1}" class="accordion-collapse collapse" data-bs-parent="#${work.id}">
                            <div class="accordion-body scrollable-body">
                                <div class="job-description-lists"></div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item rounded-5">
                        <h2 class="accordion-header">
                            <button class="btn accordion-button rounded-5 collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#collapse${work.num + 2}" 
                                aria-expanded="false" aria-controls="collapse${work.num + 2}"
                                onclick="changeImage(2, ${index})">
                                <h5>KEY SKILLS</h5>
                            </button>
                        </h2>
                        <div id="collapse${work.num + 2}" class="accordion-collapse collapse" data-bs-parent="#${work.id}">
                            <div class="accordion-body scrollable-body skillsets-container"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

works.forEach((work, index) => {
    const workSection = document.querySelector(`#work-${index + 1}-container`);
    workSection.insertAdjacentHTML('beforeend', createWorkContainer(work, index));
});


// create work overview
const jobDescriptionLists = document.querySelectorAll(".job-description-lists");
jobDescriptionLists.forEach((descriptionDiv, index) => {
    const contributions = works[index].keyContributions;
    contributions.forEach((contribution) => {
        const textHTML = `
            <div class="job-description-title">
                <i class="${contribution.icon}"></i>
                <p>${contribution.subtitle}</p>
            </div>
            <p class="job-description-text">
                ${contribution.description}
            </p>
        `;
        descriptionDiv.insertAdjacentHTML('beforeend', textHTML);
    });
});

const skillsetsContainer = document.querySelectorAll(".skillsets-container");
skillsetsContainer.forEach((skillContainer, index) => {
    const keySkillsets = works[index].keySkills;
    keySkillsets.forEach(skill => {
        const skillHTML = `
            <div class="skill-list">
                <i class="bi bi-check-lg"></i>
                <p>${skill}</p>
            </div>
        `;
        skillContainer.insertAdjacentHTML('beforeend', skillHTML);
    });
})
