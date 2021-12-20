window.addEventListener('load',()=>{
    const form=document.querySelector('#tasks');
    const input=document.querySelector('#input-box');
    const element=document.querySelector('#task');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        // console.log("submit");
        const task=input.value;
         if(!task){
             alert("Add Task First");
             return;
         }

         const t_element=document.createElement("div");
         t_element.classList.add("task");
    })

})