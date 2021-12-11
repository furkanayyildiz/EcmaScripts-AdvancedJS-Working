const todos = [
  { title: "Todo 1", description: "temizlik" },
  { title: "Todo 2", description: "yemek" },
  { title: "Todo 3", description: "ütü" },
];

let todoListElements = document.getElementById("todoList");

function todoPrint() {
  setTimeout(() => {
    let todoItems = "";
    todos.forEach((item) => {
      todoItems += `<li>
                <b>${item.title}</b>
                <p>${item.description}</p>
             </li>`;
    });
    todoListElements.innerHTML = todoItems;
  }, 1000);
}

function newTodo(todo, callback) {
  setTimeout(() => {
    todos.push(todo);
    callback();
  }, 2000);
}

newTodo({ title: "Todo 4", description: "çamaşır" }, todoPrint);
newTodo({ title: "Todo 5", description: "uyumak" }, todoPrint);
// todoPrint();
