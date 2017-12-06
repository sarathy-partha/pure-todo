import { updateToDo } from "./updateToDo";
import { storeToDo } from "./storeToDo";
import { deleteToDo } from "./deleteToDo";

export function showToastToDo(newLI_id) {
    Materialize.Toast.removeAll();
    var $toastContent = $('<span>You have added a ToDo</span>').add($('<button id="undoToDo" class="btn-flat toast-action">Undo</button>'));
    Materialize.toast($toastContent, 4000);
    document.getElementById("undoToDo").addEventListener("click", function () {
        document.getElementById(newLI_id).remove();
        Materialize.Toast.removeAll();
    }, false)
}

export function showToastDeleteToDo(newLI_id, deletedToDoItem) {
    Materialize.Toast.removeAll();
    var $toastContent = $('<span>You have delete this ToDo</span>').add($('<button id="undoDeleteToDo" class="btn-flat toast-action">Undo</button>'));
    Materialize.toast($toastContent, 4000);
    document.getElementById("undoDeleteToDo").addEventListener("click", function () {
        let ul = document.getElementById("ToDoList");
        let newLI = document.createElement("LI");
        ul.appendChild(newLI);
        newLI.id = newLI_id;
        newLI.innerHTML = deletedToDoItem;
        document.getElementById(newLI_id).classList.add("scale-transition");
        document.getElementById(newLI_id).classList.add("scale-in");
        storeToDo(newLI_id, 0);

        updateToDo(newLI_id);

        deleteToDo(newLI_id);
        Materialize.Toast.removeAll();
    }, false)
}