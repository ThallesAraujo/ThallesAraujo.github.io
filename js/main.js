function openProjects(element){

    var embedded = document.getElementById("embedded")

    if (embedded.classList.contains("opened")){
        embedded.classList.remove("opened")
        embedded.classList.add("closed");
        setTimeout(function(){
            embedded.style.display = "none"
        }, 500)
        element.innerHTML = "Ver outros projetos"
        
    }else{
        embedded.style.display = "block"
        embedded.classList.remove("closed")
        embedded.classList.add("opened");
        element.innerHTML = "Ver menos projetos"
    }


    
}