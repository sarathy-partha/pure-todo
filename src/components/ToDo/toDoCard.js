export const ToDoCard =
    `
    <div id = "ToDoCard" class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span id="ToDoTitle" class="card-title">New ToDo</span>
          <p id="ToDoDesc">Add your To Do here......</p>
        </div>
        <div class="card-action">
          <a class="modal-trigger" href="#UpdateForm" id="UpdateToDo">UPDATE</a>
          <a id="DeleteToDo" href="#">DELETE</a>
          <span id="ToDoBadge" class="right new badge" data-badge-caption="days"></span>
        </div>
      </div>
    </div>
  `;