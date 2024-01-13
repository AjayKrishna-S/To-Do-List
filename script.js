const todoList = [];
function renderTodoList(){

  let todoListHTML = '';
  todoList.forEach((todoObjects,index)=>{
    const {name,dueDate} = todoObjects
    const html = `
      <div class="input-cover">
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="todo-del-btn";
      onclick="
        todoList.splice(${index},1);
        renderTodoList();
        
      ">Delete</button> 
      </div>
    `;
    todoListHTML += html;

  });


      document.querySelector('.js-display-container')
      .innerHTML = todoListHTML;
      
}

function addToDo() {
  const inputElem = document.querySelector('.js-input');
    const name = inputElem.value;
  const dateElem = document.querySelector('.js-date-input');
    const dueDate = dateElem.value;
   todoList.push({
      name,
      dueDate
   });
      inputElem.value = '';
      renderTodoList ();
}
