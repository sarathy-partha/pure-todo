import { ToDoCard } from './toDoCard';
import { deleteToDo } from './deleteToDo';
import { updateToDo } from './updateToDo';
import { ToDoBadge } from './ToDoBadge';

export function LoadToDo() {
    let ul = document.getElementById("ToDoList");
    Array.apply(0, new Array(localStorage.length)).map(function (o, i) {
        let newLI_id = localStorage.key(i);
        if (newLI_id.substr(0, 8) == 'todoItem') {
            let newLI = document.createElement("LI");
            ul.appendChild(newLI);
            newLI.id = newLI_id;
            newLI.innerHTML = ToDoCard;
            document.getElementById("UpdateToDo").id = "UpdateToDo" + newLI_id;
            document.getElementById("DeleteToDo").id = "DeleteToDo" + newLI_id;
            document.getElementById("ToDoTitle").id = "ToDoTitle" + newLI_id;
            document.getElementById("ToDoDesc").id = "ToDoDesc" + newLI_id;
            document.getElementById("ToDoBadge").id = "ToDoBadge" + newLI_id;

            let currentToDo = JSON.parse(localStorage.getItem(newLI_id));

            document.getElementById("ToDoTitle" + newLI_id).textContent = currentToDo.title;
            document.getElementById("ToDoDesc" + newLI_id).textContent = currentToDo.desc;
            ToDoBadge(newLI_id, currentToDo.days);

            updateToDo(newLI_id);

            deleteToDo(newLI_id);
        }
    })
};