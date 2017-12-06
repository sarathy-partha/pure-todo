import { ToDoCard } from './toDoCard';
import { showToastToDo } from './toastToDo';
import { deleteToDo } from './deleteToDo';
import { updateToDo } from './updateToDo';
import { storeToDo } from './storeToDo';
import { ToDoBadge } from './ToDoBadge';

export default function addToDo() {

    let ul = document.getElementById("ToDoList");
    let newLI = document.createElement("LI");
    ul.appendChild(newLI);
    let newLI_id = "todoItem" + randomID();
    newLI.id = newLI_id;
    newLI.innerHTML = ToDoCard;
    document.getElementById("UpdateToDo").id = "UpdateToDo" + newLI_id;
    document.getElementById("DeleteToDo").id = "DeleteToDo" + newLI_id;
    document.getElementById("ToDoTitle").id = "ToDoTitle" + newLI_id;
    document.getElementById("ToDoDesc").id = "ToDoDesc" + newLI_id;
    document.getElementById("ToDoBadge").id = "ToDoBadge" + newLI_id;
    ToDoBadge(newLI_id, 0);
    Materialize.fadeInImage('#' + newLI_id);

    showToastToDo(newLI_id);

    storeToDo(newLI_id, 0);

    updateToDo(newLI_id);

    deleteToDo(newLI_id);
}

var randomID = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};
