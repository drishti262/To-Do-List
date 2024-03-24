document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const task = input.value.trim();
      if (task !== '') {
        addTask(task);
        input.value = '';
      }
    });
  
    function addTask(task) {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox">
        <span>${task}</span>
        <button class="delete-btn">Delete</button>
      `;
      todoList.appendChild(li);
    }
  
    todoList.addEventListener('click', function(e) {
      if (e.target.type === 'checkbox') {
        e.target.nextElementSibling.classList.toggle('completed');
      } else if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
      }
    });
  });
  