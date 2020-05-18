const inputArea = document.getElementById("inputArea");


let keyword = "";

function ramdomWord(){
    const randomNum = Math.floor(Math.random()*10);
    console.log(randomNum)
    const words = ["hostile", "shed", "vulnerable", "faint", "ignore", "powder", "bacteria",
    "expedition", "edit", "optical"];
    keyword = words[randomNum];
    console.log(keyword);
    
    for(let i = 0; i < keyword.length ; i++){
        const span = document.createElement("span");
        span.className = "keyword_area"
        span.innerHTML = "___";
        inputArea.appendChild(span);
    }
}

function handleTyping(e){
    console.log(e.key)
}


function init(){
    window.addEventListener("keydown", handleTyping);
    ramdomWord()
}

init();