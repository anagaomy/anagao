let lastScrollTop = 0;
const navbar = document.getElementById("mainNavbar");
const sections = document.querySelectorAll("section");

// Navbar hide/show
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop <= 150) {
    // At top of page
    navbar.classList.remove("nav-scrolled", "nav-hidden");
  } else if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add("nav-hidden");
  } else {
    // Scrolling up
    navbar.classList.remove("nav-hidden");
    navbar.classList.add("nav-scrolled");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// background color transition 
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.body.className = ""; // Reset classes
        document.body.classList.add(`bg-${entry.target.id}`);
      }
    });
  },
  { threshold: 0.4 } // Trigger when 50% of section is visible
);

sections.forEach((section) => {
  observer.observe(section);
});

// work skill lists 
const skillContainer = document.querySelector('.skill-lists');

const skills = [
  'Marketing', 
  'Growth Strategy', 
  'Data Analysis',
  'Social Media', 
  'Content Creation', 
  'Leadership',
  'Event Management', 
  'Customer Acquisition', 
];

skills.forEach(skill => {
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
