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
  'Social Media', 
  'Content creation', 
  'Customer acquisition', 
  'Event management', 
  'Leadership', 
  'Growth strategy', 
  'Data analysis'
];

skills.forEach(skill => {
  const skillDiv = document.createElement('div');
  skillDiv.className = 'btn btn-light rounded-5 mt-md-2 disabled';
  skillDiv.style.cssText = 'font-size: 17px; border-width: 0; margin-right: 5px';
  skillDiv.textContent = skill;

  skillContainer.appendChild(skillDiv);
});
