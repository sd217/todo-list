const addTaskText = document.querySelector('.addTaskTextBox');
const addTaskBtn = document.querySelector('.addTaskBtn');
const clearBtn = document.querySelector('.complateTaskbtn');
const taskTemplate = document.querySelector('.task-template');
const taskListUl = document.querySelector('.task-list');
let id =1 ;

addTaskText.addEventListener('keyup',(e)=>{
    if(e.keyCode==13 && validInput())
    {
        addTask();
    }
});
addTaskBtn.addEventListener('click',()=>{
    if(validInput())
    {
        addTask();
    }
});
clearBtn.addEventListener('click',()=>{
    const tasks = document.querySelectorAll('#task');
    tasks.forEach(task=>{

        const checked1 = task.querySelector('input').checked;
        if(checked1){
            task.remove();
        }
    })
    
});
function addTask(){
    const templateContent = document.importNode(taskTemplate.content,true);
    const checkBox = templateContent.querySelector('input');
    checkBox.id =id;
    const lable = templateContent.querySelector('lable');
    lable.htmlFor = id;
    lable.append(addTaskText.value);
    var br = document.createElement("hr");
lable.appendChild(br);
    taskListUl.appendChild(templateContent);
    addTaskText.value = '';
    id++;
}
function validInput(){
    return addTaskText.value != '';
}