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
  { threshold: 0.4 } // Trigger when 40% of section is visible
);

sections.forEach((section) => {
  observer.observe(section);
});


// Navbar items 
const navItems = [
  // // home
  // {
  //   text: "Home",
  //   href: "index.html#home"
  // },
  // about
  {
    text: "About",
    href: "index.html#about"
  },
  // work 
  {
    text: "Work",
    href: "work.html"
  },
  // project
  {
    text: "Academic Projects",
    href: "projects.html"
  },
  // skills
  {
    text: "Skills",
    href: "index.html#skills"
  },
  // involvement
  {
    text: "Involvement",
    href: "involvement.html"
  }
];

// Navbar container
const navbarDiv = document.querySelectorAll("#mainNavbar .collapse")
const navBar = document.createElement("ul");
navBar.className = "navbar-nav me-auto nav-center my-2 my-lg-0 navbar-nav-scroll";
navBar.style.cssText = "--bs-scroll-height: 100px; font-weight: 300; font-size: 14px;";
navbarDiv.forEach(element => {
  element.appendChild(navBar);
});

const navbarContainers = document.querySelectorAll("#mainNavbar .navbar-nav");

navItems.forEach((item) => {
  const navItemHTML = `
    <li class="nav-item">
      <a class="nav-link other-page rounded-5" aria-current="page" href="${item.href}"
      style="
          background-color:rgba(240, 240, 240, 0.5);
          backdrop-filter: blur(10px); 
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 22px; 
          padding-right: 22px;" 
      >${item.text}</a>
    </li>
  `;

  navbarContainers.forEach((container) => {
    container.insertAdjacentHTML('beforeend', navItemHTML);
  });
});

// Select all sections and all navbar links
const navLinks = document.querySelectorAll('.collapse .nav-link');

// active navbar
const currentPage = window.location.pathname.split('/').pop();
const currentHash = window.location.hash;

const navLink = document.querySelectorAll(".collapse .nav-link");
navLink.forEach((link) => {
  const linkHref = link.getAttribute('href');
  if (currentHash === '' && currentPage === linkHref) {
    link.classList.remove('other-page');
    link.classList.add('active');
  }
});

const activeLink = document.querySelector('.collapse .nav-link.active');
if (activeLink) {
    activeLink.style.backgroundColor = 'rgba(255, 255, 255)';
    activeLink.style.color = '#000000';
}

