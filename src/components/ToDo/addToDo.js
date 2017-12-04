import { ToDoCard } from './toDoCard';
import { showToastToDo } from './toastToDo';
import { deleteToDo } from './deleteToDo';
import { updateToDo } from './updateToDo';

export default function addToDo()  {
    let selectedToDo, daysToGo;

    let ul = document.getElementById("ToDoList");
    let newLI = document.createElement("LI");
    ul.appendChild(newLI);
    let newLI_id = "todoItem" + (ul.childNodes.length - 1);
    newLI.id = newLI_id;
    newLI.innerHTML = ToDoCard;
    document.getElementById("UpdateToDo").id = "UpdateToDo" + newLI_id;
    document.getElementById("DeleteToDo").id = "DeleteToDo" + newLI_id;
    document.getElementById("ToDoTitle").id = "ToDoTitle" + newLI_id;
    document.getElementById("ToDoDesc").id = "ToDoDesc" + newLI_id;
    document.getElementById("ToDoBadge").id = "ToDoBadge" + newLI_id;
    Materialize.fadeInImage('#' + newLI_id);

    showToastToDo(newLI_id);

    updateToDo(newLI_id);
    
    deleteToDo(newLI_id);
}
