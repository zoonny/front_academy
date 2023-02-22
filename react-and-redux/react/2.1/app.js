
const list = document.querySelector('.list-group');
const todoContainer = document.createElement('li');
const todoItem = document.createElement('div');
const todoStatus = document.createElement('input');
const todoLabel = document.createElement('label');
const deleteButton = document.createElement('button');

todoContainer.classList.add('list-group-item', 'list-group-flat');

todoContainer.appendChild(todoItem);

todoItem.appendChild(todoStatus);
todoItem.appendChild(todoLabel);
todoItem.appendChild(deleteButton);

todoItem.classList.add('checkbox');

todoStatus.setAttribute('id', 'checkbox');
todoStatus.setAttribute('type', 'checkbox');

todoLabel.setAttribute('for', 'checkbox');
todoLabel.textContent = '첫 번째 할 일'

deleteButton.classList.add('btn', 'btn-outline-secondary', 'btn-sm');
deleteButton.textContent = 'X';

list.appendChild(todoContainer);
