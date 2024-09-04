let title = document.querySelector('h1');
let list = document.querySelector('ul')

//Mock data
let todos = [
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

function updateTodoList() {
    list.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo.title;

        const doneButton = document.createElement('button')
        doneButton.textContent = 'Done';
        doneButton.style.margin = "10px";
        doneButton.addEventListener('click', () => {
            todos[index].isCompleted = !todos[index].isCompleted;
            updateTodoList();
        })
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.margin = '10px';
        deleteButton.addEventListener('click', () => {
            todos.splice(index, 1);
            updateTodoList();
        })

        if (todo.isCompleted) {
            li.style.textDecoration = 'line-through';
        }

        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        list.appendChild(li);
    
    })

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

        updateTodoList();
    }
})


