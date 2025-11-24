// =================================================================
// 0. VARIABILI GLOBALI E SETUP INIZIALE
// =================================================================

const STORAGE_KEY = 'todoListAdvancedTasks';

let tasks = [];

const newTaskForm = document.getElementById('new-task-form');
const taskTitleInput = document.getElementById('task-title-input');
const taskDueDateInput = document.getElementById('task-due-date');
const taskPrioritySelect = document.getElementById('task-priority-select');
const taskList = document.getElementById('task-list');

// =================================================================
// 1. STRUTTURA DATI: OGGETTO TASK
// =================================================================

class Task {
    constructor(title, priority, dueDate = 'default') {
        this.id = Date.now();
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.isCompleted = false;
    }
}

// =================================================================
// 2. FUNZIONI DI PERSISTENZA (localStorage)
// =================================================================

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    tasks = JSON.parse(storedTasks);
}

// =================================================================
// 3. LOGICA DI GESTIONE DEI TASK (CRUD)
// =================================================================

// --- Aggiunta (Create) ---

function addTask(event) {

    event.preventDefault();

    const title = taskTitleInput.value.trim();
    const dueDate = taskDueDateInput.value;
    const priority = taskPrioritySelect.value;

    if (title === "") {
        alert("Il titolo dell'attività non può essere vuoto!");
        return;
    }

    const newTask = new Task(title, dueDate, priority);
    tasks.push(newTask);

    saveTasks();
    renderTasks();

    newTaskForm.reset();
}

// --- Eliminazione (Delete) ---

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);

    saveTasks();
    renderTasks();
}

// --- Completamento (Update Status) ---
