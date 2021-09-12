// Buscando dentro da Div app a UL 

var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector("#app input");

var buttonElement = document.querySelector("#app button");

var todos = ["Levar o cachorro pra passear"];

function renderTodos() {
    listElement.innerHTML = "";
    for (const todo of todos) {
        console.log(todo);


        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        var linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText)



        todoElement.appendChild(todoText); // AppendChild para referenciar 
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);



    }
}

renderTodos();

function adicionarTodo() {

    const todoText = inputElement.value;

    if (todoText.length == 0) {
        alert("Digite uma tarefa!");
        return false;
    }

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();

}

buttonElement.onclick = adicionarTodo;

function deletarTodo() {

}