const addTaskBtn: HTMLElement | null = document.querySelector('.add-task_btn');
export const taskCreator: HTMLElement | null = document.querySelector('.task-creator_cont');

addTaskBtn?.addEventListener('click', () => {
    if (taskCreator) {
        if (taskCreator.style.display === '') {
            taskCreator.style.display = 'block';
        } else {
            taskCreator.style.display = '';
        }
    }
})