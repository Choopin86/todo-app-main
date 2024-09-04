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

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        list.appendChild(li);
    })
    let numOfTasks = todos.length;
    title.textContent = (numOfTasks === 0 ? `You have 0 to-dos`: `You have ${numOfTasks} to-dos`)
}

//Initial call to populate the list
updateTodoList();

//Handle new todos
const newItem = document.querySelector('input')
const submit = document.querySelector('button')

submit.addEventListener('click', () => {
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


