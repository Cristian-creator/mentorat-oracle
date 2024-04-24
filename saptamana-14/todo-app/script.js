const addTodoButton = document.querySelector('.add-todo-button');
const newTodoInput = document.querySelector('.add-todo-input');
const todosList = document.querySelector('.todos-list');
const addTodoError = document.querySelector('.add-todo-error');

const addTodo = () => {
    // luam textul din input
    const newTodo = newTodoInput.value.trim();

    // reset input
    newTodoInput.value = '';

    if (newTodo.length === 0) {
        // afisam mesajul de eroare
        addTodoError.style.display = 'block';
    } else {
        // ascundem mesajul de eroare
        addTodoError.style.display = 'none';

        // cream noul list item
        const newTodoContainer = document.createElement('li');
    
        newTodoContainer.innerHTML = `
            <p> ${newTodo} </p>
            <button class="delete-todo"> Delete </button>
        `;
    
        // adaugam list item-ul in lista de todo-uri
        todosList.appendChild(newTodoContainer);
    
        // delete button
        const deleteButton = newTodoContainer.querySelector('.delete-todo');
    
        const deleteTodo = () => {
            todosList.removeChild(newTodoContainer);
        };
    
        deleteButton.addEventListener('click', deleteTodo);
    }
    
};

addTodoButton.addEventListener('click', addTodo);

// sa se creeze o functie care primeste ca parametru un string
// functia sa returneze true daca string-ul este format doar din spatii
// in caz contrar false

// const checkIfStringContainsOnlyWhiteSpaces = (inputValue) => {
//     let numberOfWhiteSpaces = 0;

//     for (let i = 0;i < inputValue.length;i++) {
//         if (inputValue[i] === ' ') {
//             numberOfWhiteSpaces++;
//         }
//     }

//     if (numberOfWhiteSpaces === inputValue.length) {
//         return true;
//     } else {
//         return false;
//     }
// }

const checkIfStringContainsOnlyWhiteSpaces = (inputValue) => {
    for (let i = 0;i < inputValue.length;i++) {
        if (inputValue[i] !== ' ') {
            return false;
        }
    }

    return true;
}