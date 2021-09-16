// Buscando dentro da Div app a UL 

var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector("#app input");

var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("lista_todos")) || [];

function renderTodos() {
    listElement.innerHTML = "";
    for (const todo of todos) {
        console.log(todo);


        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        var posicao = todos.indexOf(todo);
        linkElement.setAttribute("onclick", "deletarTodo(" + posicao + ")");
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
    salvarDados();

}

buttonElement.onclick = adicionarTodo;

function deletarTodo(posicao) {
    // Splice remove algo da lista passando a posicao e o item do array
    todos.splice(posicao, 1);
    renderTodos();
    salvarDados();

}

function salvarDados() {
    localStorage.setItem("lista_todos", JSON.stringify(todos));

}