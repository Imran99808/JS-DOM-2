let newTask =document.querySelector('#new-task');
 let form =document.querySelector('form');
 
let todoUl =document.querySelector("#items");
let completeul = document.querySelector('.compelete-list ul');




 let createTask=function(task){
    let lisItem=document.createElement('li');     let checkBox=document.createElement('input');
     let label=document.createElement('label');
    label.innerText = task;
    checkBox.type='checkbox';
     lisItem.appendChild(checkBox);
     lisItem.appendChild(label);
     return lisItem;
}
  let addTask=function(event){
    
    event.preventDefault();
     let listadd=createTask(newTask.value);
     todoUl.appendChild(listadd);
     newTask.value = "";
     bindInCompleteItems(listadd,completeTask);
 }
 let completeTask=function(){
  let completeUl=this.parentNode;
   console.log(completeUl);
  // let completeUl=listadd;
  let deleteBtn=document.createElement('button');
  deleteBtn.innerText='Delete';
  deleteBtn.className='delete';
  completeUl.appendChild(deleteBtn);
  
   let checkBox=completeUl.querySelector('input[type="checkbox"]');
   checkBox.remove();
   completeul.appendChild(completeUl);
   bindCompleteItems(completeUl,deleteTask);

 }
 let bindInCompleteItems=function(taskItem,checkboxClick){
          let checkbox=taskItem.querySelector('input[type="checkbox"]');
          checkbox.onchange=checkboxClick;
 }
 for(let i=0;i<todoUl.children.length;i++){
  bindInCompleteItems(todoUl.children[i],completeTask)
 }
 let deleteTask=function(){
  let del=this.parentNode;
  console.log(del);

  let ul=del.parentNode;
  console.log(ul);
  ul.removeChild(del);
  
 }
 let bindCompleteItems=function(taskItem,deleteClick){
    let deleteBtn=taskItem.querySelector('.delete');
    deleteBtn.onclick=deleteClick;
 }
 for(let i=0;i<completeul.children.length;i++){
  bindCompleteItems(completeul.children[i],deleteTask);
 }
  form.addEventListener('submit', addTask);