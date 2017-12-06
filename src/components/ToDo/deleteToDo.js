import { showToastDeleteToDo } from './toastToDo';

export function deleteToDo(newLI_id) {
    var selectedToDo;

    document.getElementById("DeleteToDo" + newLI_id).addEventListener("click", function () {
        selectedToDo = this.id.substr(10, 18);
        document.getElementById(selectedToDo).classList.add("scale-transition");
        document.getElementById(selectedToDo).classList.add("scale-out");
        let deletedToDoItem = document.getElementById(selectedToDo).innerHTML;
        setTimeout(() => {
            document.getElementById(selectedToDo).remove();
        }, 500);
        localStorage.removeItem(selectedToDo);
        showToastDeleteToDo(newLI_id, deletedToDoItem);
    });
}