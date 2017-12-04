import { ToDo } from './ToDoClass';

export function storeToDo(newLI_id) {
    var todo = new ToDo();
    todo.title = document.getElementById("ToDoTitle" + newLI_id).textContent;
    todo.desc = document.getElementById("ToDoDesc" + newLI_id).textContent;
    todo.days = document.getElementById("ToDoBadge" + newLI_id).textContent;
    localStorage.setItem(newLI_id, JSON.stringify(todo));
}