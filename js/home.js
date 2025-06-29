// work skill lists 
const skillContainer = document.querySelector("#work .skill-lists");

const skills = [
  'Marketing', 
  'Growth Strategy', 
  'Data Analysis',
  'Social Media', 
  'Content Creation', 
  'Leadership',
  'Event Management', 
  'Customer Acquisition'
];

skills.forEach((skill) => {
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
