const container: HTMLElement | null = document.querySelector('.title-btn_cont');

function showTasksFn(): void {
    fetch('http://localhost:3000/tasks', {
        method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
        for (const data of json) {
            const newTask = document.createElement('div');
            newTask.innerHTML = 
            `
            <div class="task-container" data-ts-id="${data.id}">
                <div class="input-checkbox_cont">
                    <div class="checkbox_cont">
                        <input type="checkbox" name="complete">
                    </div>
                    <p>${data.task}</p>
                </div>
                <button class="remove-task_btn">—</button>
            </div>
            `
            if (!container) {
                return 
            }

            container.after(newTask);
        }
    })
}

showTasksFn();