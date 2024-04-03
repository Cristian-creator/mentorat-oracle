const accordionTitles = document.querySelectorAll('.accordion-title');
// const accordionTitleHeadings = document.querySelectorAll('.accordion-title h4');

const toggleAccordionByTitle = (e) => {
    const accordionTitle = e.target;
    if (accordionTitle.classList.contains('opened') === true) {
        // console.log('acordeonul trebuie inchis');

        accordionTitle.classList.remove('opened');
    
        const accordionDescription = accordionTitle.nextElementSibling;
        accordionDescription.style.display = 'none';
    
        const chevronRight = accordionTitle.querySelector('.accordion-chevron-right');
        chevronRight.style.display = 'inline';
    
        const chevronDown = accordionTitle.querySelector('.accordion-chevron-down');
        chevronDown.style.display = 'none';
    
        const question = accordionTitle.querySelector('h4');
        question.style.color = 'black';

    } else {
        // console.log('acordeonul trebuie deschis');

        accordionTitle.classList.add('opened');
    
        const accordionDescription = accordionTitle.nextElementSibling;
        accordionDescription.style.display = 'block';
    
        const chevronRight = accordionTitle.querySelector('.accordion-chevron-right');
        chevronRight.style.display = 'none';
    
        const chevronDown = accordionTitle.querySelector('.accordion-chevron-down');
        chevronDown.style.display = 'inline';
    
        const question = accordionTitle.querySelector('h4');
        question.style.color = '#FF5062';
    }
}

const toggleAccordionByHeading = (e) => {
    const accordionTitle = e.target.parentElement;
    if (accordionTitle.classList.contains('opened') === true) {
        // console.log('acordeonul trebuie inchis');

        accordionTitle.classList.remove('opened');
    
        const accordionDescription = accordionTitle.nextElementSibling;
        accordionDescription.style.display = 'none';
    
        const chevronRight = accordionTitle.querySelector('.accordion-chevron-right');
        chevronRight.style.display = 'inline';
    
        const chevronDown = accordionTitle.querySelector('.accordion-chevron-down');
        chevronDown.style.display = 'none';
    
        const question = accordionTitle.querySelector('h4');
        question.style.color = 'black';

    } else {
        // console.log('acordeonul trebuie deschis');

        accordionTitle.classList.add('opened');
    
        const accordionDescription = accordionTitle.nextElementSibling;
        accordionDescription.style.display = 'block';
    
        const chevronRight = accordionTitle.querySelector('.accordion-chevron-right');
        chevronRight.style.display = 'none';
    
        const chevronDown = accordionTitle.querySelector('.accordion-chevron-down');
        chevronDown.style.display = 'inline';
    
        const question = accordionTitle.querySelector('h4');
        question.style.color = '#FF5062';
    }
}

const toggleAccordion = (e) => {
    console.log(e.target);

    if (e.target.classList.contains('accordion-title') === true) {
        toggleAccordionByTitle(e);
    } else {
        toggleAccordionByHeading(e);
    }

};

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', toggleAccordion);
});

// const handleClickTitleHeading = (e) => {
//     e.stopPropagation();
// };

// accordionTitleHeadings.forEach((accordionTitleHeading) => {
//     accordionTitleHeading.addEventListener('click', handleClickTitleHeading);
// });