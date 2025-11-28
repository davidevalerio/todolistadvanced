// =================================================================
// 0. VARIABILI GLOBALI E SETUP INIZIALE
// =================================================================

// Chiave utilizzata per salvare e recuperare i dati da localStorage
const STORAGE_KEY = 'todoListAdvancedTasks';

// Array principale che contiene tutti gli oggetti Task
let tasks = [];

// Selezione degli elementi DOM principali
const newTaskForm = document.getElementById('new-task-form');
const taskTitleInput = document.getElementById('task-title-input');
const taskDueDateInput = document.getElementById('task-due-date');
const taskPrioritySelect = document.getElementById('task-priority-select');
const taskList = document.getElementById('task-list');

// =================================================================
// 1. STRUTTURA DATI: OGGETTO TASK
// =================================================================

/**
 * Costruttore per creare un nuovo oggetto Task.
 * @param {string} title - Titolo dell'attività.
 * @param {string} priority - Priorità (low, medium, high).
 * @param {string} dueDate - Data di scadenza (formato YYYY-MM-DD).
 * @param {string} projectId - ID del progetto a cui appartiene (default per ora).
 */
class Task {
    constructor(title, priority, dueDate = 'default') {
        this.id = Date.now();
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.isCompleted = false;
    }
    
    // Con la classe, è facile aggiungere metodi futuri!
    // isOverdue() {
    //     return new Date() > new Date(this.dueDate);
    // }
}

// =================================================================
// 2. FUNZIONI DI PERSISTENZA (localStorage)
// =================================================================

/**
 * Salva l'array 'tasks' in localStorage.
 * Gli oggetti JavaScript vengono convertiti in una stringa JSON.
 */
function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Carica l'array 'tasks' da localStorage all'avvio dell'applicazione.
 * La stringa JSON viene riconvertita in oggetti JavaScript.
 */
function loadTasks() {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
        // Usa una ricreazione dell'array per evitare bug se la struttura Task cambia
        tasks = JSON.parse(storedTasks);
    }
}

// =================================================================
// 3. LOGICA DI GESTIONE DEI TASK (CRUD)
// =================================================================

// --- Aggiunta (Create) ---
/**
 * Gestisce la sottomissione del form per aggiungere un nuovo task.
 */
function addTask(event) {
    event.preventDefault(); // Impedisce il ricaricamento della pagina

    const title = taskTitleInput.value.trim();
    const dueDate = taskDueDateInput.value;
    const priority = taskPrioritySelect.value;

    if (title === "") {
        alert("Il titolo dell'attività non può essere vuoto!");
        return;
    }

    const newTask = new Task(title, priority, dueDate);
    tasks.push(newTask);

    saveTasks();
    renderTasks();

    newTaskForm.reset(); // Svuota i campi del form
}

// --- Eliminazione (Delete) ---
/**
 * Rimuove un task dall'array tramite il suo ID.
 * @param {number} taskId - ID univoco del task da eliminare.
 */
function deleteTask(taskId) {
    // Filtra l'array mantenendo solo i task con ID diverso da quello da eliminare
    tasks = tasks.filter(task => task.id !== taskId);

    saveTasks();
    renderTasks();
}

// --- Completamento (Update Status) ---
/**
 * Toggla lo stato 'isCompleted' di un task.
 * @param {number} taskId - ID univoco del task.
 */
function toggleTaskCompletion(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex > -1) {
        // Inverte il valore booleano della proprietà 'isCompleted'
        tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;

        saveTasks();
        renderTasks();
    }
}

// --- Modifica (Update Details - Inizia) ---
/**
 * Converte l'elemento <li> del task dalla modalità visualizzazione alla modalità modifica (input).
 * @param {number} taskId - ID univoco del task da modificare.
 */
function startEdit(taskId) {
    const task = tasks.find(t => t.id === taskId);
    const li = document.querySelector(`[data-task-id="${taskId}"]`);

    if (!task || !li) return;

    // Sostituisce il contenuto con i campi input per la modifica
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
    // Aggiunge una classe per stilizzare la modalità modifica, se necessario
    li.classList.add('editing');
}

// --- Modifica (Update Details - Salva) ---
/**
 * Salva le modifiche apportate a un task.
 * @param {number} taskId - ID univoco del task.
 */
function saveEdit(taskId) {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex > -1) {
        // Recupera i nuovi valori dai campi input temporanei
        const newTitle = document.getElementById(`edit-title-${taskId}`).value.trim();
        const newDate = document.getElementById(`edit-date-${taskId}`).value;
        const newPriority = document.getElementById(`edit-priority-${taskId}`).value;

        if (newTitle === "") {
            alert("Il titolo non può essere vuoto!");
            return;
        }

        // Aggiorna l'oggetto task nell'array
        tasks[taskIndex].title = newTitle;
        tasks[taskIndex].dueDate = newDate;
        tasks[taskIndex].priority = newPriority;
        
        saveTasks();
        renderTasks(); // Torna alla modalità visualizzazione
    }
}

// =================================================================
// 4. DELEGAZIONE DI EVENTI PER LE AZIONI
// =================================================================

/**
 * Gestisce tutti i click all'interno della taskList (Event Delegation).
 * @param {Event} event - L'evento click.
 */
function handleTaskActions(event) {
    const target = event.target;
    // Risale al genitore più vicino con la classe '.task-item'
    const taskItem = target.closest('.task-item');

    if (!taskItem) return;

    // Recupera l'ID del task dal DOM e lo converte in numero
    const taskId = parseInt(taskItem.getAttribute('data-task-id'));
    const action = target.getAttribute('data-action');

    switch (action) {
        case 'delete':
            deleteTask(taskId);
            break;
        case 'edit':
            startEdit(taskId); // Inizia la modifica
            break;
        case 'save-edit':
            saveEdit(taskId); // Salva le modifiche
            break;
        case 'cancel-edit':
            renderTasks(); // Annulla la modifica e ripristina la visualizzazione
            break;
        case 'toggle-complete':
            // Gestisce il click sulla checkbox
            toggleTaskCompletion(taskId);
            break;
    }
}

// =================================================================
// 5. RENDERING DEL DOM
// =================================================================

/**
 * Crea l'elemento HTML (<li>) per un singolo task in modalità visualizzazione.
 * @param {Task} task - L'oggetto Task da renderizzare.
 * @returns {HTMLLIElement} L'elemento <li> creato.
 */
function createTaskElement(task) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.setAttribute('data-task-id', task.id);
    // Aggiunge la classe CSS per lo stile della priorità
    li.classList.add(`priority-${task.priority}`);

    // Costruisce la struttura interna (modalità visualizzazione)
    li.innerHTML = `
        <div class="task-details ${task.isCompleted ? 'completed' : ''}">
            <input type="checkbox" ${task.isCompleted ? 'checked' : ''} data-action="toggle-complete">
            <span class="task-title">${task.title}</span>
            <span class="task-priority">Priorità: ${task.priority.toUpperCase()}</span>
            <span class="task-date">Scadenza: ${task.dueDate || 'N/A'}</span>
        </div>
        <div class="task-actions">
            <button class="edit-btn" data-action="edit">Modifica</button>
            <button class="delete-btn" data-action="delete">Elimina</button>
        </div>
    `;

    return li;
}

/**
 * Svuota la lista e rigenera tutti gli elementi <li> a partire dall'array 'tasks'.
 */
function renderTasks() {
    taskList.innerHTML = ''; // Svuota la lista

    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    });
}

// =================================================================
// 6. FUNZIONE DI INIZIALIZZAZIONE
// =================================================================

/**
 * Funzione di avvio dell'applicazione.
 * Carica i dati e imposta i listener principali.
 */
function initApp() {
    // 1. Carica i task salvati da localStorage
    loadTasks();

    // 2. Visualizza i task caricati
    renderTasks();

    // 3. Aggiunge i listener:
    // Listener per l'aggiunta di nuovi task
    newTaskForm.addEventListener('submit', addTask);
    // Listener per tutte le azioni su task esistenti
    taskList.addEventListener('click', handleTaskActions); 
}

// Avviamo l'applicazione quando il DOM è pronto
initApp();