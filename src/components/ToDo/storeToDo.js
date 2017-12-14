import { ToDo } from './ToDoClass';

export function storeToDo(newLI_id, days) {
    var todo = new ToDo();
    todo.title = document.getElementById("ToDoTitle" + newLI_id).textContent;
    todo.desc = document.getElementById("ToDoDesc" + newLI_id).textContent;
    todo.dueDate = document.getElementById("ToDoDate").value;
    todo.days = days;
    localStorage.setItem(newLI_id, JSON.stringify(todo));
}