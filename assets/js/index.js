//Elements
let addButton = document.getElementById("add")
let searchButton = document.getElementById("search")

// Storage
let get = () => {
    if (localStorage.todos) {
        return JSON.parse(localStorage.todos);
    } else {
        localStorage.todos = "[]";
        return [];
    }
};

let save = list => {
    localStorage.todos = JSON.stringify(list);
}

//Display
let showList = (list = get()) => {
    let screen = document.getElementById("screen")
    if (list.length != 0) {
        screen.innerHTML = "";
        for (let index = 0; index < list.length; index++) {
            screen.innerHTML +=
                `<li id="todo-${index}" class="todo d-flex justify-content-between align-items-center mt-1">
                <span>${list[index]}</span> 
                <span> <i id="edit-${index}" class="fa fa-pencil btn-sm btn-info edit" aria-hidden="true" onclick="editButton(this)"></i>
                <i id="del-${index}" class="fa fa-trash btn-danger btn-sm ml-2 del" aria-hidden="true" onclick="deleteButton(this)"></i></span></li>`
        }
    }
}

//Features
let add = event => {
    event.preventDefault();
    let todos = get()
    let inputTodo = document.getElementById("todo").value
    if (inputTodo) {
        todos.push(inputTodo)
        save(todos)
        showList()
    } else {
        alert("text can't be empty")
    }
}

let editButton = temp => {
    let todos = get()
    const id = temp.id.replace("edit-", "")
    const text = prompt(`update ${todos[id]}:`)

    if (text) {
        todos[id] = text
        save(todos)
        showList()
    } else {
        alert("text can't be empty")
    }
}

let deleteButton = (temp) => {
    let todos = get()
    let id = temp.id.replace("del-", "")
    todos.splice(id, 1)
    save(todos)
    showList()
}

let search = event => {
    event.preventDefault()
    let todos = get()
    let inputSearch = document.getElementById("searchForm").value.toLowerCase()
    const filtered = todos.filter(todo =>
        todo.toLowerCase().includes(inputSearch)
    )
    console.log(filtered);
    
    if (filtered.length > 0){
        showList(filtered)
    } else alert("Item not found")
}

//Initialization
showList()

//Listeners
addButton.addEventListener("click", add)
searchButton.addEventListener("click", search)