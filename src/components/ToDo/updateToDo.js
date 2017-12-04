var selectedToDo;

export function updateToDo(newLI_id) {

  document.getElementById("UpdateToDo" + newLI_id).addEventListener("click", function () {
    selectedToDo = this.id.substr(10, 9);
    import(/* webpackChunkName: "updateForm" */ './updateForm')
      .then(module => {
        var updateForm = module.default;
        updateForm(selectedToDo);
      });
  });
}
