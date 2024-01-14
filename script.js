const todoList = [];
function renderTodoList(){
  let todoListHTML = '';
  todoList.forEach((todoObjects,index)=>{
    const {name,dueDate} = todoObjects
    const html = `
      <div class="input-cover">
      <div class="todo-name">${name}</div>
      <div class="todo-date">${dueDate}</div>
      <button class="todo-complete-btn"
        onclick="
          todoComplete(${index})
        "
      >Complete</button>
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
let iscompleted = false;
function todoComplete(index){
  if(!iscompleted){
    iscompleted = true;
    const todoName = document.querySelectorAll('.todo-name')
    todoName[index].style.textDecoration = 'line-through';

  }else{
    iscompleted = false;
    const todoName = document.querySelectorAll('.todo-name')
    todoName[index].style.textDecoration = 'none';
  }
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
