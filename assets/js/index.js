//Elements
let addButton = document.getElementById("add")
let editButton
let deleteButton
let searchForm = document.getElementById("")

// Storage
let get = () => {
    if (localStorage.todos) {
        return JSON.parse(localStorage.todos); // parse from string to object
    } else {
        localStorage.todos = "[]"; // set the initial data string if not found
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
                <span> <i id="edit" class="fa fa-pencil btn-sm btn-info edit-${index}" aria-hidden="true"></i>
                <i id="del" class="fa fa-trash btn-danger btn-sm ml-2 del-${index}" aria-hidden="true"></i></span></li>`
        }
    }
    editButton = document.getElementById("edit")
    deleteButton = document.getElementById("del")
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

/*let edit = event => {
    if (event.target.matches("#edit")) {
        let todos = get()
        const id = event.target.class.replace("todo-", "")
        const text = prompt(`update ${todos[id]}:`)

        if (text) {
            todos[id] = text
            save(todos)
            showList()
        } else {
            alert("text can't be empty")
        }
    }
}*/

let del = event => {
        console.log("in");
        let todos = get()
        
        
        
        //todos.splice(id, 1)
        //save(todos)
        //showList()
}

/*let search = event => {
    const value = event.target.value.toLowerCase()
    const todos = get()
    const filtered = todos.filter(todo =>
        todo.text.toLowerCase().includes(value)
    )
    showList(filtered)
}*/

//Initialization
showList()

//Listeners
addButton.addEventListener("click", add)
//editButton.addEventListener("click", edit)
deleteButton.addEventListener("click", del)
//searchForm.addEventListener("keyup", search)