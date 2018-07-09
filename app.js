// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBTn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')

// Load all event Listners

loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // /remove task event
  taskList.addEventListener('click', removeTask);
  // CLEAR TASK EVENT
  clearBTn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks)
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element 
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"</li>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);
  
  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

// Remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
    
  }
}

// Clear Tasks
function clearTasks() {
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // https://jsperf.com/innerhtml-vs-removechild

}

// filter Tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.dispaly = 'block';

      }else{
        task.style.display = 'none';
      }
    });

}