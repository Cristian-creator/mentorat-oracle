const ticketCategories = [
    {
        id: 1,
        name: 'GA',
        price: 10,
    },
    {
        id: 2,
        name: 'VIP',
        price: 100,
    },
    {
        id: 3,
        name: 'VIP++',
        price: 200,
    },
];

const ticketCategoriesContainer = document.querySelector('.ticket-categories-container');


for(let i = 0;i < ticketCategories.length;i++) {
    const ticketCategoryContainer = document.createElement('div');

    // varianta 2 - folosesti innerHTML
    ticketCategoryContainer.innerHTML = `
        <h3> ${ticketCategories[i].name} </h3>
        <p> ${ticketCategories[i].price} </p>
        <button class="add-ticket-button"> + </button>
    `;

    const addTicketButton = ticketCategoryContainer.querySelector('.add-ticket-button');

    addTicketButton.addEventListener('click');

    // varianta 1 - iti creezi fiecare element cu createElement
    // const ticketCategoryTitle = document.createElement('h3');
    // ticketCategoryTitle.classList.add('ticket-category-title');
    // ticketCategoryTitle.innerText = ticketCategories[i].name;

    // ticketCategoryContainer.appendChild(ticketCategoryTitle);

    // ticketCategoriesContainer.appendChild(ticketCategoryContainer);
}
