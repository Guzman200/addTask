function validarTask(){
    const tarea = document.getElementById("txt_tarea").value;
    if(tarea == ""){
        const div_task = document.createElement("div");
        div_task.className = "alert alert-danger alert-dismissible fade show";
        div_task.appendChild(document.createTextNode("Campo de tarea vacio"));

        const container = document.querySelector(".container");
        const app = document.querySelector("#app"); 
        container.insertBefore(div_task, app);

        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 3000);
        
    }else{
        const div_task = document.createElement("p");
        div_task.className = "card card-body hver";
        div_task.setAttribute("id", "eliminar");

        div_task.textContent = tarea;
        //div_task.appendChild(document.createTextNode(tarea));

        const task_card = document.getElementById("card-task");
        task_card.appendChild(div_task);
        
        resetForm();
    }
    
}

function eliminarTask(element){
    if(element.id === "eliminar"){
        element.remove();
    }
}

function resetForm(){
    document.getElementById("form-task").reset();
}


/* Eventos del DOM */

/* Escuchando evento submit al agregar una tarea */
document.getElementById("form-task").addEventListener("submit", function(e){
    validarTask();
    e.preventDefault();
});


document.getElementById("card-task").addEventListener("click", function(e){
    eliminarTask(e.target);
})