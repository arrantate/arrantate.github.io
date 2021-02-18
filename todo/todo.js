
const form = document.querySelector("#new-todo")
const todoList = document.querySelector("#todo-list")
const todoText = document.querySelector("#todo-text")


// Listeners
window.addEventListener("DOMContentLoaded", loadTodos)
form.addEventListener("submit", addTodo)


// render all todo items from localStorage
function loadTodos() {
    if (localStorage.getItem("todos") !== null) {
        const todos = JSON.parse(localStorage.getItem("todos"))
        todos.forEach(todo => {
            const todoLi = document.createElement("Li")
            todoLi.classList = "list-group-item text-left"
            todoLi.innerHTML = todo
            todoList.appendChild(todoLi)
        })
    } else {
        localStorage.setItem("todos", JSON.stringify([]))
    }
}

// Add new todo
function addTodo(event) {
    event.preventDefault()

    const todoLi = document.createElement("Li")
    todoLi.classList = "list-group-item text-left"
    todoLi.innerHTML = todoText.value
    todoList.appendChild(todoLi)

    saveTodo(todoText.value)

    todoText.value = ''
}

// Save input to local storage todos
function saveTodo(todo) {
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos.push(todo)
    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos))
}
