function addTodo() {
    // write the code that reads the contents of input box
    //can create a new todo 
    // clear the input box
    const element = document.getElementById("todoInput")
    const todo = element.value;

    const newDiv = document.createElement("div");
    newDiv.innerHTML = todo ;

    const parentDiv = document.getElementById("todos");
    parentDiv.appendChild(newDiv);
    
}