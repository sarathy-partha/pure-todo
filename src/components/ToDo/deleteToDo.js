export function deleteToDo(newLI_id) {
    var selectedToDo;

    document.getElementById("DeleteToDo" + newLI_id).addEventListener("click", function () {
        const selectedToDo = $(this).closest("li").attr('id');
        document.getElementById(selectedToDo).classList.add("scale-transition");
        document.getElementById(selectedToDo).classList.add("scale-out");
        setTimeout(() => {
            document.getElementById(selectedToDo).remove();
        }, 600);
        showToastDeleteToDo(newLI_id);
    });
}