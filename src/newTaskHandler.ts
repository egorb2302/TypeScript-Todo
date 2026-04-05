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

const STORAGE_KEY: string = 'todo_checkboxes_state';

function saveState(): void {
    const allCheckboxes = document.querySelectorAll('.checkbox_cont input[type="checkbox"]');
    const states: Record<string, boolean> = {};

    allCheckboxes.forEach((cb: Element) => {
        const inputEl = cb as HTMLInputElement
        let id = inputEl.id;

        if(!id) {
            const taskCont = inputEl.closest('.task_container');
            const taskId = taskCont?.getAttribute('data-ts-id');
            id = taskId ? `cb_${taskId}` : `cb_${Date.now()}_${Math.random().toString(36)}`;
            inputEl.id = id;
        }

        states[id] = inputEl.checked;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
}

export function loadState(): void {
    const savedStates = localStorage.getItem(STORAGE_KEY);
    if (!savedStates) return

    try {
        const states = JSON.parse(savedStates as string);

        Object.entries(states).forEach(([id, isChecked]) => {
            const checkbox = document.getElementById(id) as HTMLInputElement | null
            if (checkbox) {
                checkbox.checked = isChecked as boolean

                const inputCbCont = checkbox.closest('.input-checkbox_cont');
                if (!inputCbCont) return

                const targetNewP = inputCbCont.querySelector('p');
                if (!targetNewP) return

                if (isChecked) {
                    targetNewP.classList.add('comp')
                } else {
                    targetNewP.classList.remove('comp')
                }
            }
        })
    } catch (er) {
        console.log('ошибка')
    }
}

document.addEventListener('click', (event) => {
    const targetEl = (event.target as HTMLElement).closest('.checkbox_cont');

    if (!targetEl) {
        return
    }

    const targetParent: HTMLElement | null = targetEl.parentElement

    if (!targetParent) {
        return
    }

    const checkbox = (targetEl.children[0]) as HTMLInputElement;

    const targetP = (targetParent.children[1]) as HTMLParagraphElement

    if (checkbox) {
        if (checkbox.checked) {
            targetP.classList.add('comp')
        } else {
            targetP.classList.remove('comp')
            console.log('not req')
        }
    }

    saveState();
})