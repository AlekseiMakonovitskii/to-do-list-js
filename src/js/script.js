import '../css/style.css';
import { v4 as uuidv4 } from 'uuid';

const mainUl = document.querySelector(`.mainUl`);
const toDoInput = document.querySelector(`#toDoInput`);
const addBtn = document.querySelector(`.addBtn`);

let tasks = [

];

const renderTask = tasks => {
  tasks.forEach(element => {
    const html = `
			<li id="${element.id}">
				<div class="left-side">
					<input type="checkbox" class="checkedMark">
					<p>${element.body}</p>
				</div>
				<button class="close" id="${element.id}">X</button>
			</li>
		`;

    mainUl.insertAdjacentHTML(`beforeend`, html);
  });

  addDeleteEvents();
};

const clearFileds = () => {
  mainUl.innerHTML = ``;
  toDoInput.value = ``;
};

const createTask = () => {
  const task = {
    body: `${toDoInput.value.length > 0 ? toDoInput.value : 'Nothing'}`,
    date: Date.now(),
    id: uuidv4(),
  };

  tasks.push(task);
  clearFileds();
  renderTask(tasks);
  uploadLocalStorage();
};

const deleteTask = e => {
  e.preventDefault();
  const id = e.target.id;
  const element = tasks.find(element => element.id === id);
  const index = tasks.indexOf(element);

  tasks.splice(index, 1);
  clearFileds();
  renderTask(tasks);
  uploadLocalStorage();
};

const addDeleteEvents = () => {
  const elements = document.querySelectorAll(`.close`);
  elements.forEach(el => el.addEventListener(`click`, deleteTask));
};

const setDone = e => {
  if (!e.target.classList.contains('checkedMark')) return;
  e.target.parentElement.querySelector(`p`).classList.toggle(`done`);
};

const uploadLocalStorage = () => {
  localStorage.setItem(`tasks`, JSON.stringify(tasks));
};

const downloadLocalStorage = () => {
  const res = JSON.parse(localStorage.getItem('tasks'));
  if (res) {
    tasks = res;
  }
};

const init = () => {
  downloadLocalStorage();
  mainUl.addEventListener(`click`, setDone);
  addBtn.addEventListener(`click`, createTask);
  window.addEventListener(`keypress`, e => {
    if (e.key === 'Enter') createTask();
  });

  renderTask(tasks);
};

init();
