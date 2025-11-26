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

    event.preventDefault(); // Blocca il comportamento predefinito del browser, che per un form sarebbe ricaricare l'intera pagina.

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

function toggleTaskCompletion(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex > -1) {
        tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;

        saveTasks();
        renderTasks();
    }
}

// --- Modifica (Update Details - Inizia) ---

function startEdit(taskId) {
    const task = tasks.find(t => t.id === taskId);
    const li = document.querySelector(`[data-task-id="${taskId}"]`);

    if (!task || !li) return;

    li.innerHTML = `
        <div class="edit-form">
            <input type="text" id="edit-title-${taskId}" value="${task.title}" required>
            <input type="date" id="edit-date-${taskId}" value="${task.dueDate}">
            <select id="edit-priority-${taskId}">
                <option value="low" ${task.priority === 'low' ? 'selected' : ''}>Bassa</option>
                <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>Media</option>
                <option value="high" ${task.priority === 'high' ? 'selected' : ''}>Alta</option>
            </select>
        </div>
        <div class="task-actions">
            <button class="save-btn" data-action="save-edit">Salva</button>
            <button class="cancel-btn" data-action="cancel-edit">Annulla</button>
        </div>
    `;

    li.classList.add('editing');
}

// --- Modifica (Update Details - Salva) ---

function saveEdit(taskId) {
    const taskIndex = task.findIndex(t => t.id === taskId);

    if (taskIndex > -1) {
        const newTitle = document.getElementById(`edit-title-${taskId}`).value.trim();
        const newDate = document.getElementById(`edit-date-${taskId}`).value;
        const newPriority = document.getElementById(`edit-priority-${taskId}`).value;

        if (newTitle === "") {
            alert("Il titolo non puo essere vuoto!");
            return;
        }

        tasks[taskIndex].title = newTitle;
        tasks[taskIndex].date = newDate;
        tasks[taskIndex].priority = newPriority;

        saveTasks();
        renderTasks();
    }
}

// =================================================================
// 4. DELEGAZIONE DI EVENTI PER LE AZIONI
// =================================================================

function handleTaskActions(event) {
    const target = event.target;

    const taskItem = target.closest('.task-item');

    if(!taskItem) return;
}