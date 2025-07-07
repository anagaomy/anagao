// work experiences 
const works = [
    // Yami
    {
        overview: {
            company: "YAMI",
            logoImg: "images/work/yami.png",
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
                description: "Created content-driven campaigns on TikTok, Instagram and RedNote for Yami's e-commerce platform, featuring unboxing videos, product reviews, and discount promotions, reaching 1,000+ views and growing followers by over 50%."
            },
            {
                icon: "bi bi-people work-icon",
                subtitle: "Growth Strategy",
                description: "Collected and analyzed user feedback and social media data from TikTok, Instagram, and RedNote to optimize e-commerce marketing strategies, boost engagement, and drive sales for beauty, snack, and lifestyle products."    
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
            'Beauty, Fashion & Trends'
        ],

        exmapleImgs: [
            "images/work/Yami/video-screenshot.png",
            "images/work/Yami/yami-homepage.jpg",
            "images/work/Yami/data-analysis.PNG"
        ]
    }
    // private kitchen

];


function changeImage(imgIndex, workIndex) {
    const image = document.querySelector(".example-img");
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
}


function createWorkContainer(work, index) {
    return `
        <div class="row row-cols-2">
            <div class="col left-img">
                <img class="rounded-5 example-img" src="${work.exmapleImgs[0]}">
            </div>
            <div class="col right-text">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item rounded-5">
                        <h2 class="accordion-header">
                            <button class="btn rounded-5" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                                aria-expanded="true" aria-controls="collapseOne" 
                                onclick="changeImage(0, ${index})">
                                <h5>OVERVIEW</h5>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item rounded-5">
                        <h2 class="accordion-header">
                            <button class="btn rounded-5 collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
                                aria-expanded="false" aria-controls="collapseTwo"
                                onclick="changeImage(1, ${index})">
                                <h5>KEY CONTRIBUTIONS</h5>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="job-description-lists"></div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item rounded-5">
                        <h2 class="accordion-header">
                            <button class="btn rounded-5 collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#collapseThree" 
                                aria-expanded="false" aria-controls="collapseThree"
                                onclick="changeImage(2, ${index})">
                                <h5>KEY SKILLS</h5>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                hey
                            </div>
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