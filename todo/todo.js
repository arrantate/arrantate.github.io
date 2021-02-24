
const form = document.querySelector("#new-todo")
const todoList = document.querySelector("#todo-list")
const todoText = document.querySelector("#todo-text")


// Listeners
window.addEventListener("DOMContentLoaded", loadTodos)
form.addEventListener("submit", addTodo)


// Create todo List Element
function newListItem(todo) {
    const todoLi = document.createElement("Li")
    todoLi.classList = "d-flex todoListItem"
    todoList.appendChild(todoLi)

    const todoText = document.createElement('p')
    todoText.classList = "list-group-item text-left w-100 m-1"
    todoText.innerText = todo
    todoLi.appendChild(todoText)

    const deleteBtn = document.createElement("Button")
    deleteBtn.classList = "btn btn-danger w-20 ml-auto h-100 my-auto"
    deleteBtn.onclick = deleteTodo
    todoLi.appendChild(deleteBtn)

    const btnIcon = document.createElement("i")
    btnIcon.classList = "fas fa-trash"
    deleteBtn.appendChild(btnIcon)
}

// render all todo items from localStorage
function loadTodos() {
    if (localStorage.getItem("todos") !== null) {
        const todos = JSON.parse(localStorage.getItem("todos"))
        todos.forEach(todo => {
            newListItem(todo)
        })
    } else {
        localStorage.setItem("todos", JSON.stringify([]))
    }
}

// Add new todo
function addTodo(event) {
    if (todoText.value.length === 0) return null
    event.preventDefault()
    newListItem(todoText.value)
    saveTodo(todoText.value)
    todoText.value = ''
}

// Delete Todo
function deleteTodo() {
    const todoText = this.parentElement.querySelector('p').innerText
    const todoListElements = [...document.querySelectorAll(".todoListItem")]
    todoListElements.filter(element => element.querySelector('p').innerText === todoText)
        .forEach(element => element.remove())
    removeTodo(todoText)
}

// Save input to local storage todos
function saveTodo(todo) {
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

// Remove input from local storage todos
function removeTodo(toRemove) {
    const todos = JSON.parse(localStorage.getItem("todos"))
    const newTodos = todos.filter(todo => todo != toRemove)
    localStorage.setItem("todos", JSON.stringify(newTodos))
}