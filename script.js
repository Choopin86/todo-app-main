const title = document.querySelector('h1');
const list = document.querySelector('ul')

//Mock data to populate the todo list
const todos = [
    {
        title:"Do the dishes",
        isCompleted: false
    },
    {
        title:"Buy groceries",
        isCompleted: false
    },
    {
        title:"Cook lunch",
        isCompleted: false
    }
]

const createButton = (text, onEvent) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.margin = '10px';
    button.addEventListener("click", onEvent);

    return button;
}

const createTodoElement = (todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.title;

        const doneButton = createButton("Done", (event) => {
            const newState = !todos[index].isCompleted;
            todos[index].isCompleted = newState;

            if(newState) {
                event.target.parentElement.style.textDecoration = "line-through";
            } else {event.target.parentElement.style.textDecoration = "none";}

        });

        const deletButton = createButton("Delete", () => {
            todos.splice(index, 1);
            updateTodoList();
        });

        if (todo.isCompleted) {
            li.style.textDecoration = "line-through";
        }

        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        return li;
}

function updateTodoList() {
    list.innerHTML = '';

    const todoElements = todos.map((todo, index) => {
        createTodoElement(todo, index);
    });

    list.append(...todoElements);

    let numOfTasks = todos.length;
    title.textContent = (numOfTasks === 0 ? `You have 0 to-dos`: `You have ${numOfTasks} to-dos`)
}

//Initial call to populate the list
updateTodoList();

//Handle new todos
const form = document.querySelector('#todo-form')
const newItem = document.querySelector('input')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTodoTitle = newItem.value.trim();

    if (newTodoTitle) {
        const newTodo = { 
            title: newTodoTitle,
            isCompleted: false};
        todos.push(newTodo);

        newItem.value = "";

        const newTodoElement = createTodoElement(newTodo, todos.length -1);
        list.append(newTodoElement);
    }
})


