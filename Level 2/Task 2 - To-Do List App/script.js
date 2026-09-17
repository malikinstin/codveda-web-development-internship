const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const tasks = [];
const taskList = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state")
const savedTasks = localStorage.getItem("tasks");
const tasksCount = document.getElementById("tasks-count");
const clearCompleted = document.getElementById("clear-completed");

const todayDate = document.getElementById("today-date");
const today = new Date();
todayDate.textContent = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
});

function updateTaskCount() {
    const remainingTasks = tasks.filter(function(task) {
    return task.completed === false 
})
tasksCount.textContent = remainingTasks.length + " tasks left"
}

if (savedTasks) {
    const loadedTasks = JSON.parse(savedTasks);
    tasks.push(...loadedTasks);
}

tasks.forEach(function(task) {
    renderTask(task);
});

updateTaskCount();



function renderTask(task){
    const taskItem = document.createElement("li");
    const taskTextElement = document.createElement("span")

    const completeBtn = document.createElement("button")
    completeBtn.setAttribute("aria-label", "Complete task")
    
    const editBtn = document.createElement("button")
    editBtn.setAttribute("aria-label", "Edit task")
    
    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("aria-label", "Remove task from list")

    taskItem.classList.add("task-item");
    taskTextElement.classList.add("task-text");
    completeBtn.classList.add("complete-btn");
    editBtn.classList.add("edit-btn")
    deleteBtn.classList.add("delete-btn")

    deleteBtn.textContent = "🗑"
    completeBtn.textContent ="✓";
    editBtn.textContent = "✏️"
    taskTextElement.textContent = task.text

    taskItem.appendChild(taskTextElement)
    taskItem.appendChild(completeBtn)
    taskItem.appendChild(editBtn)
    taskItem.appendChild(deleteBtn)
    taskList.appendChild(taskItem);



    if (task.completed === true) {
        taskItem.classList.add("completed");
    }

    completeBtn.addEventListener("click", function() {
        task.completed = true
        taskItem.classList.add("completed")
        
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
        updateTaskCount();
    });

    editBtn.addEventListener("click", function(){
        const newText = prompt("Enter changes");
        if (newText === null || newText.trim() === "") {
            return;
        }
        task.text = newText
        taskTextElement.textContent = newText
        

        localStorage.setItem("tasks", JSON.stringify(tasks))
    });

    deleteBtn.addEventListener("click", function() {
        const taskIndex = tasks.findIndex(function(item) {
            return item.id === task.id
        })

        tasks.splice(taskIndex, 1)
        taskItem.remove()
        localStorage.setItem("tasks", JSON.stringify(tasks));

        updateTaskCount();

        if (tasks.length === 0) {
            emptyState.hidden = false;
        }
    });

}


// Clear done event listener
clearCompleted.addEventListener("click", function() {
    const activeTasks = tasks.filter(function(task) {
        return task.completed === false;
    });

    const completedItems = Array.from(
    document.getElementsByClassName("completed")
)

    completedItems.forEach(function(item) {
    item.remove();
    });

    tasks.splice(0, tasks.length);
    tasks.push(...activeTasks);

    if (tasks.length === 0) {
    emptyState.hidden = false;
}

    localStorage.setItem("tasks", JSON.stringify(tasks));

    updateTaskCount();
});


if (tasks.length > 0) {
    emptyState.hidden = true;
}


// Event handler for submit
taskForm.addEventListener("submit", function(event){
    event.preventDefault()
    let taskText = taskInput.value.trim()

    if (taskText === ""){
        return
    }

    const task = {
        text : taskText,
        completed: false, 
        id : Date.now(),
    }

    tasks.push(task);

    emptyState.hidden = true;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTask(task);
    taskInput.value = "";
    updateTaskCount();
    
});
