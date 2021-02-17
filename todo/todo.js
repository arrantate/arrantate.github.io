
const form = document.querySelector("#new-todo")
const todoList = document.querySelector("#todo-list")
const todoText = document.querySelector("#todo-text")

form.addEventListener("submit", addTodo)
function addTodo(event) {
    event.preventDefault()

    const todoLi = document.createElement("Li")
    todoLi.classList = "list-group-item text-left"
    todoLi.innerHTML = todoText.value

    todoList.appendChild(todoLi)
    console.log(localStorage.getItem("todos"))

    todoText.value = ''
}
