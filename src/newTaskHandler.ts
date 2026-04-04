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

// document.addEventListener('click', (event) => {
//     const targetEl = (event.target as HTMLElement).closest('.checkbox_cont');

//     if (!targetEl) {
//         return
//     }

//     const checkbox = (targetEl.children[0]) as HTMLInputElement;

//     if (checkbox) {
//         if (checkbox.checked) {
//             checkbox.setAttribute('checked', '');
//             localStorage.setItem('cbState', 'true')
//         }
//     }

//     const savedState = localStorage.getItem('cbState');
//     if (savedState === 'true') {
//         checkbox.checked = true;
//     } else {
//         checkbox.checked = false;
//     }
// })

// console.log(localStorage)