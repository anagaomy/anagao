// involvements container 
const involvements = [
  // CU
  {
    title: "Marketing Officer",
    name: "UCI Chinese Union",
    location: "UC Irvine",
    date: "June 2023 - present",
    img: "images/involvement/cu-svg.png",
    skillSets: ["Content creation", "Design", "Branding", "Team collaboration", "Social media marketing"],
    linkedinLink: "https://www.linkedin.com/company/chineseunion/posts/?feedView=all",
    description: ["Managed the development and execution of targeted marketing strategies across key social media platforms, including Instagram, TikTok, RedNote and WeChat, to enhance community engagement and promote organizational events.", 
        "Designed engaging content, such as posters, graphics, and videos, to promote events and activities, ensuring alignment with organizational goals and branding.", 
        "Collaborated with team members to organize and execute events, including new student orientation, cultural celebrations, and networking events."],
    exampleImg: [
        {
            link: "https://mp.weixin.qq.com/s/feTOPAiSPgj6cuTauSt01Q",
            src: "images/involvement/UCI-CU-Hangzhou-cover.JPG"
        },
        {
            link: "https://mp.weixin.qq.com/s/Qn_PK0eiUstwxTPvLwdaIw",
            src: "images/involvement/UCI-CU-album-cover.JPG"
        }
    ],
    expanded: "true"
  },
  // CUCS
  {
    title: "Event Coordinator",
    name: "UCI CUCS",
    location: "UC Irvine",
    date: "Sept 2024 - present",
    img: "images/involvement/cucs.jpeg",
    skillSets: ["Peer support", "Collaboration", "Technical skills", "Networking", "Community engagement"],
    linkedinLink: "https://www.linkedin.com/company/chinese-union-in-computer-science-at-uci/posts/?feedView=all",
    description: ["Participated in regular meetings, coding workshops, and technical events to strengthen programming and problem-solving skills.", 
        "Supported peers in navigating internship and job searches by actively sharing resources, industry insights, and effective networking strategies.", 
        "Assisted in organizing technical events, collaborative study sessions, and career development activities to foster a supportive community among computer science students."],
    exampleImg: [
        {
            link: "images/involvement/cucs-final-review.jpg",
            src: "images/involvement/cucs-final-review.jpg"
        },
        {
            link: "images/involvement/cucs-ics31-review.jpg",
            src: "images/involvement/cucs-ics31-review.jpg"
        }
    ],
    expanded: "false"
  },
  {
    title: "Student Video Producer",
    name: "AUHSD Film Academy",
    location: "Anaheim, CA",
    date: "Aug 2022 - May 2023",
    img: "images/involvement/film-academy.jpg",
    skillSets: ["Filming", "Directing", "Script writing", "Video editing", "Storyboarding"],
    linkedinLink: "https://www.youtube.com/@auhsdfilm",
    description: ["Captured high-quality footage of major events for the AUHSD district, maintaining exceptional visual and audio standards.", 
        "Utilized advanced video editing software to create professional, polished videos that effectively highlighted key moments and narratives from events.", 
        "Independently produced a music video, handling all aspects from storyboarding and scripting to filming and editing, which was nominated for Best Music Video at the AUHSD Student Film Festival."],
    exampleImg: [
        {
            link: "images/involvement/MV-poster-1.jpeg",
            src: "images/involvement/MV-poster-1.jpeg"
        },
        {
            link: "images/involvement/MV-poster-2.jpeg",
            src: "images/involvement/MV-poster-2.jpeg"
        }
    ],
    expanded: "false"
  },
  {
    title: "Cyber Security Trainee",
    name: "CyberForward",
    location: "Anaheim, CA",
    date: "May 2022 - Jul 2022",
    img: "images/involvement/cyberforward_logo.jpeg",
    skillSets: ["Third-party risk", "Vulnerability analysis", "Security policy"],
    linkedinLink: "https://www.linkedin.com/company/cyberforward/posts/?feedView=all",
    description: ["Performed thorough security assessments to identify potential vulnerabilities within company networks and systems", 
        "Conducted detailed analysis of identified vulnerabilities, including risk assessment and mitigation recommendations.",
        "Evaluated the security practices of third-party partners to ensure compliance with industry standards and minimize risk exposure."],
    exampleImg: [
        {
            link: "images/involvement/cyberforward-example.PNG",
            src: "images/involvement/cyberforward-example.PNG"
        }
    ],
    expanded: "false"
  },  
];

const accordionContainer = document.querySelectorAll(".accordion-item");
accordionContainer.forEach((itemContainer, index) => {
    const accordionItemHTML = `
            ${index === 0 ? `<div id="collapse${index + 1}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">` 
                : `<div id="collapse${index + 1}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">`}
                <div class="accordion-body">
                    <div class="row row-cols-2 accordion-conetent">
                        <div class="col left-text">
                            <div class="organization-header">
                                <div class="organization-info">
                                    <h1><strong>${involvements[index].title}</strong></h1>
                                    <h6>${involvements[index].location}</h6>
                                    <h6>${involvements[index].date}</h6>
                                    <div class="skill-lists"></div>
                                </div>
                                <div class="organization-logo">
                                    <a href="${involvements[index].linkedinLink}" target="_blank">
                                        <img src="${involvements[index].img}">
                                    </a>
                                </div>
                            </div>
                            <ul class="involvement-description"></ul>
                        </div>
                        <div class="col right-img"></div>
                    </div>
                </div>
            </div>
    `;
    itemContainer.insertAdjacentHTML('beforeend', accordionItemHTML);
});

const descriptionLists = document.querySelectorAll(".involvement-description");
descriptionLists.forEach((descriptionDiv, index) => {
    involvements[index].description.forEach((text) => {
        const descriptionLi = document.createElement('li');
        descriptionLi.innerText = text;

        descriptionDiv.appendChild(descriptionLi);
    });
});

const exampleImgs = document.querySelectorAll(".right-img");
exampleImgs.forEach((exampleDiv, index) => {
    const images = involvements[index].exampleImg;
    images.forEach((img) => {
        const exampleContainer = document.createElement("a");
        exampleContainer.href = img.link;
        exampleContainer.target = "_blank";

        const imgContainer = document.createElement("img");
        imgContainer.className = "example-image";
        imgContainer.src = img.src;

        exampleContainer.appendChild(imgContainer);
        exampleDiv.appendChild(exampleContainer);
    });
});

const involvementSkillLists = document.querySelectorAll(".organization-info .skill-lists");
involvementSkillLists.forEach((listDiv, index) => {
  const skillSets = involvements[index].skillSets;
  skillSets.forEach((skill) => {
    const card = document.createElement('a');
    card.className = "btn btn-light rounded-5 disabled";
    card.style = "font-size: 13px; border-width: 0; margin: 0 3px 5px 0; background-color: pink;";
    card.textContent = skill;

    listDiv.appendChild(card);
  });
}); 