var selectedToDo;

export function updateToDo(newLI_id) {

  document.getElementById("UpdateToDo" + newLI_id).addEventListener("click", function () {
    selectedToDo = $(this).closest("li").attr('id');
    import(/* webpackChunkName: "updateForm" */ './updateForm')
      .then(module => {
        var updateForm = module.default;
        updateForm(selectedToDo);
      });

    document.getElementById("todo_title").value = document.getElementById("ToDoTitle" + selectedToDo).textContent;
    document.getElementById("todo_desc").value = document.getElementById("ToDoDesc" + selectedToDo).textContent;
  });
}
