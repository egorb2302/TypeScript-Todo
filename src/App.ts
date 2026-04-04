import './style.css'; 

document.body.innerHTML = 
`
<div class="todo-container">
    <div class="title-btn_cont">
        <h1>ToDo List</h1>
        <div class="todo-mainbtns_cont">
            <button class="clear-all_btn">Clear all</button>
            <button class="add-task_btn">+ Add task</button>
        </div>
    </div>
</div>
<div class="task-creator_cont">
    <h1>Write your task</h1>
    <textarea class="task-textarea" id="create-task-text"></textarea>
</div>
`