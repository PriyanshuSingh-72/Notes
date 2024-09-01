let button = document.querySelector("#btn")
let notesContainer = document.querySelector(".notesContainer");




function updateStroage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}


button.addEventListener("click",()=>{
    let input = document.createElement("p");
    input.className = "inputbox";
    input.setAttribute("contenteditable","true");
    let img = document.createElement("img");
    img.src ="4.jpg"
    notesContainer.appendChild(input);
    input.appendChild(img);
    
    input.addEventListener("click",(e)=>{
        if(e.target.tagName ==="IMG"){
            img.parentElement.remove();
            updateStroage();
        }
    })
})