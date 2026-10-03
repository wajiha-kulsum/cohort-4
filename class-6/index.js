let todoIndex = 1;
 
function addTodo() {
    // write the code that reads the contents of input box
    //can create a new todo 
    // clear the input box
    const element = document.getElementById("todoInput")
    const todo = element.value;

    
    const todoDiv = document.createElement("div")
    todoDiv.setAttribute("id", "todo" + todoIndex);
    
    const todoSpan = document.createElement("span")
    todoSpan.innerHTML = todo;
    
    todoDiv.appendChild(todoSpan)

    const todoButton = document.createElement("button")
    todoButton.innerHTML = " Delete Todo"
    todoButton.setAttribute("onclick" , "deleteTodo(" + todoIndex + ")")

    todoDiv.appendChild(todoButton)

   document.getElementById("todos").appendChild(todoDiv)
   todoIndex = todoIndex + 1; 

    
    
}

function deleteTodo(index){
    // alert("delet todo called " + index)
     const divElement = document.getElementById("todo" +  index)
    //  divElement.parentElement.removeChild(divElement);
    document.getElementById("todos").removeChild(divElement);
}
