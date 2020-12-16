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
const sections = document.querySelectorAll('section'); //creates array of sections to be used in two functions

/**
 * End Global Variables
*/  

// build the nav

buildNav = () => {
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
addActiveClassSection = () => {
    sections.forEach (section => //calls on each section
        {const currentSection = section.getBoundingClientRect(); //tells bounding of the current section in loop       
            if(currentSection.top >= 0 && currentSection.bottom <= (document.documentElement.clientHeight)) {       
            section.classList.add('your-active-class'); //adds class if in viewport
            } else{      
            section.classList.remove('your-active-class'); //removes class if not in viewport
            }       
        });  
    };

addActiveNav = () => {
    const navLinks = document.querySelectorAll('a'); //creates array of all links on page
    navLinks.forEach(link => {
        let section = document.querySelector('.your-active-class'); //defines section as one with active class
        if (section !== null) { //only runs following if there is a section with an active class
            let sectionId = `.` + section.id; //creates variable to check againt DOMTokenList
            if (link.classList.contains(sectionId) === true) { //checks if section ID is in the DOMTokenList
                link.classList.add('active__nav'); //adds active nav class if yes
            } else {
                link.classList.remove('active__nav'); //removes active nav class if no
            }
        } else if (window.scrollY === 0) { //removes active nav class if user returns to top of page
            link.classList.remove('active__nav');
        }
    });
};

activeSectionAndNav = () => { //listens for scroll and runs active section function and active nav function
    window.addEventListener('scroll', function () {
            addActiveClassSection();
            addActiveNav();
     });
};


// Scroll to anchor ID using scrollTO event
smoothScript = () => {
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
activeSectionAndNav();
