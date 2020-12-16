/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const addActiveClassSection = function () {
    sections.forEach (section =>
        {const currentSection = section.getBoundingClientRect();       
            if(currentSection.top >= 0 && currentSection.bottom <= ((document.documentElement.clientHeight) + 100)) {       
            section.classList.add('your-active-class');
            } else{      
            section.classList.remove('your-active-class');       
            }       
        });  
    };

const addActiveNav = function ()  {
    const navLinks = document.querySelectorAll('a');
    navLinks.forEach(link => {
        let section = document.querySelector('.your-active-class');
        let sectionId = `.` + section.id;
        if (link.classList.contains(sectionId) === true) {
            link.classList.add('active__nav');

        } else {
            link.classList.remove('active__nav');
        }
        });
};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const buildNav = function () {
    sections.forEach(section=>{
        let listItem = document.createElement('li'); //creates new li element
        let sectionLink = document.createElement('a'); //creates link 
        sectionLink.href = `#${section.id}`; //designates the section ID as the link location
        sectionLink.text = `${section.dataset.nav}`; //sets the data_set text as the link text
        sectionLink.className = `.navbar__menu .${section.id}`; // sets the class to .navbar__menu and section ID (for highlighting active)
        listItem.appendChild(sectionLink); //appends the Section Link to the LI
        document.getElementById('navbar__list').appendChild(listItem); //appends the LI to the UL
    })
};

// Add class 'active' to section when near top of viewport

const activeSection = function () {
    window.addEventListener('scroll', (event) => {
    addActiveClassSection();
    });
};

const activeNav = function () {
    window.addEventListener('scroll', (event) => {
    addActiveNav();
    });
};


// Scroll to anchor ID using scrollTO event
const smoothScript = function () {
    const smoothLinks = document.querySelectorAll('a'); //array of all links
    smoothLinks.forEach(anchor => //applys behavior to all links
    anchor.addEventListener('click', function(e) { //adds event listner to link clicks
    e.preventDefault(); //prevents jumping to link

    document.querySelector(this.getAttribute('href')).scrollIntoView({ //calls scroll into view on items in document with href as an attribute
    behavior: 'smooth'}); //makes scrolling behavior smooth
    })
    );
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();
// Scroll to section on link click
smoothScript();
// Set sections as active
activeSection();
activeNav();