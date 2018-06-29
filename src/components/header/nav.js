export const nav = `
    <nav class="nav-extended">
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">
                <div id="ProfilePicture"></div>
            </a>
            <a href="#" data-activates="mobile" class="button-collapse">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li class="center">
                    <div id="Header"></div>
                </li>
            <li>
                <a class="waves-effect teal btn waves-teal" target="_blank" href="https://github.com/partha360/pure-todo">Source</a>
            </li>
            <li>
                <a id="btnHardRefresh" class="waves-effect blue btn waves-red">REFRESH</a>
            </li>
            <li>
                <a href="#">Email me</a>
            </li>
            <li>
                <a href="#">Help</a>
            </li>
        </ul>
        <ul class="side-nav" id="mobile">
            <li>
                <a class="waves-effect teal btn waves-teal" target="_blank" href="https://github.com/partha360/pure-todo">Source</a>
            </li>
            <li>
                <a id="btnHardRefresh" class="waves-effect blue btn waves-red">REFRESH</a>
            </li>
            <li>
                <a href="#">Email me</a>
            </li>
            <li>
                <a href="#">Help</a>
            </li>
        </ul>
        </div>
    </nav>
<!-- Tap Target Structure -->
<div class="tap-target" data-activates="btnAddToDo">
  <div class="tap-target-content">
    <h5>Add To Do</h5>
    <p>I am here in case you have to add any.....</p>
  </div>
</div>
    `;
