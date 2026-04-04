document.addEventListener('click', (event) => {
    const targetEl = (event.target as HTMLElement).closest('.remove-task_btn');

    if (!targetEl) {
        return
    }

    const currentId = targetEl.parentElement?.getAttribute('data-ts-id');

    if (!currentId) {
        return
    }

    fetch(`http://localhost:3000/tasks/${currentId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            id: currentId
        })
    })

    location.reload()
})