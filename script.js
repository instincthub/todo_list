const form = document.querySelector('form');
const inputTask = document.querySelector('#input-task');
const taskList = document.querySelector('#task-list');

/*
    1. Target all required elements 
    2. Create a function that generates new item
    3. Handle submit button to create new list item
*/

const createTask = (task) =>{
    const newTask = document.createElement('li');
    newTask.innerText = task

    taskList.append(newTask)

}

// createTask('I want to visit a friend.')
// createTask('I would like to make fried rice.')


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    createTask(inputTask.value);
    inputTask.value = ''
})