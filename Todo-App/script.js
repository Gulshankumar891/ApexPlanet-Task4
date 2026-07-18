const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filters = document.querySelectorAll(".filter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Save Tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render Tasks
function renderTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        if (currentFilter === "pending") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `<p class="empty">No Tasks Found</p>`;
        return;
    }

    filteredTasks.forEach((task, index) => {

        const li = document.createElement("li");
        li.className = task.completed ? "task completed" : "task";

        li.innerHTML = `
            <span>${task.text}</span>

            <div class="actions">

                <button class="complete-btn" onclick="toggleTask(${index})">
                    <i class="fa-solid fa-check"></i>
                </button>

                <button class="edit-btn" onclick="editTask(${index})">
                    <i class="fa-solid fa-pen"></i>
                </button>

                <button class="delete-btn" onclick="deleteTask(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>
        `;

        taskList.appendChild(li);

    });

}

// Add Task
addBtn.addEventListener("click", () => {

    let text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    taskInput.value = "";

    saveTasks();

    renderTasks();

});

// Enter Key Support
taskInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        addBtn.click();

    }

});

// Complete Task
function toggleTask(index){

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    renderTasks();

}

// Delete Task
function deleteTask(index){

    if(confirm("Delete this task?")){

        tasks.splice(index,1);

        saveTasks();

        renderTasks();

    }

}

// Edit Task
function editTask(index){

    let updated = prompt("Edit Task", tasks[index].text);

    if(updated !== null && updated.trim() !== ""){

        tasks[index].text = updated.trim();

        saveTasks();

        renderTasks();

    }

}

// Filter
filters.forEach(btn=>{

    btn.addEventListener("click",()=>{

        filters.forEach(b=>b.classList.remove("active"));

        btn.classList.add("active");

        currentFilter = btn.dataset.filter;

        renderTasks();

    });

});

// Initial Load
renderTasks();