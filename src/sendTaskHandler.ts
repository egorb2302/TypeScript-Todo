import { taskCreator } from "./newTaskHandler";

const textarea: HTMLTextAreaElement | null = document.querySelector('#create-task-text');

interface TodoTaskForm {
    task: string | null | undefined
}

function fetchAndClose(arg: TodoTaskForm): void {
    fetch('http://localhost:3000/tasks', {
        method: 'POST', 
        headers: {
                'Content-Type': 'application/json'
                },
        body: JSON.stringify(arg),
    })

    if (!taskCreator || !textarea) {
        return
    }
    
    textarea.value = ''
    taskCreator.style.display = 'none';

    location.reload()
}

if (taskCreator) {
    taskCreator.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();

            if (!textarea) {
                return
            }

            const taskText: string | undefined  = textarea.value

            const task: TodoTaskForm = {
                task: taskText
            }

            fetchAndClose(task);
        }
    })
}