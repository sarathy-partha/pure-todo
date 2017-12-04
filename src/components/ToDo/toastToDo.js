export function showToastToDo(newLI_id) {
    Materialize.Toast.removeAll();
    var $toastContent = $('<span>You have added a ToDo</span>').add($('<button id="undoToDo" class="btn-flat toast-action">Undo</button>'));
    Materialize.toast($toastContent, 4000);
    document.getElementById("undoToDo").addEventListener("click", function () {
        document.getElementById(newLI_id).remove();
        Materialize.Toast.removeAll();
    }, false)
}

export function showToastDeleteToDo(newLI_id) {
    Materialize.Toast.removeAll();
    var $toastContent = $('<span>You have delete this ToDo</span>').add($('<button id="undoToDo" class="btn-flat toast-action">Undo</button>'));
    Materialize.toast($toastContent, 4000);
    document.getElementById("undoToDo").addEventListener("click", function () {
        document.getElementById(newLI_id).remove();
        Materialize.Toast.removeAll();
    }, false)
}