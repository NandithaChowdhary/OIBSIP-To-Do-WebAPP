window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#Tasks");
    const empty_message = document.querySelector("#empty-message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const Task = input.value;

        if (!Task) {
            alert("Please fill out the Task");
            return;
        }
        const Task_el = document.createElement("div");
        Task_el.classList.add("Task");
        const Task_content_el = document.createElement("div");
        Task_content_el.classList.add("content");
        Task_el.appendChild(Task_content_el);
        const Task_input_el = document.createElement("input");
        Task_input_el.classList.add("text");
        Task_input_el.type = "text";
        Task_input_el.value = Task;
        Task_input_el.setAttribute("readonly", "readonly");
        Task_content_el.appendChild(Task_input_el);
        const Task_actions_el = document.createElement("div");
        Task_actions_el.classList.add("actions");
        const Task_edit_el = document.createElement("button");
        Task_edit_el.classList.add("edit");
        Task_edit_el.innerHTML = "Edit";
        const Task_delete_el = document.createElement("button");
        Task_delete_el.classList.add("delete");
        Task_delete_el.innerHTML = "Delete";
        Task_actions_el.appendChild(Task_edit_el);
        Task_actions_el.appendChild(Task_delete_el);
        Task_el.appendChild(Task_actions_el);

        list_el.appendChild(Task_el);
        input.value = "";

        Task_edit_el.addEventListener('click', () => {
            if (Task_edit_el.innerText.toLowerCase() == "edit") {
                Task_input_el.removeAttribute("readonly");
                Task_input_el.focus();
                Task_edit_el.innerText = "Save";
            } else {
                Task_input_el.setAttribute("readonly", "readonly");
                Task_edit_el.innerText = "Edit";
            }
            updateEmptyMessage();
        });

        Task_delete_el.addEventListener('click', () => {
            list_el.removeChild(Task_el);
            checkEmptyList();
        });
        checkEmptyList();
    });

    function checkEmptyList() {
        const tasks = document.querySelectorAll(".Task");
        if (tasks.length === 0) {
            empty_message.style.display = "block";
        } else {
            empty_message.style.display = "none"; // Hide the empty message if there are tasks
        }
    }

    function updateEmptyMessage() {
        if (list_el.children.length === 0) {
            empty_message.style.display = "block";
        } else {
            empty_message.style.display = "none";
        }
    }

    updateEmptyMessage();
});
