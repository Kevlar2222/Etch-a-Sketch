function createGrid (size) {
    document.documentElement.style.setProperty("--columns", size);
    let boxes = [];
    for (let i=1; i<=(size*size); i++){
        let box = document.createElement("div")
        box.className = "box";
        box.id = i;
        box.style.backgroundColor = "white";
        box.height = document.getElementById("container").offsetHeight / (size);
        box.width = box.height;
        box.addEventListener("mouseover", function changeColour(e){
            e.target.style.backgroundColor = "black";
        })
        document.getElementById("container").appendChild(box);      
    }
}

createGrid(16);