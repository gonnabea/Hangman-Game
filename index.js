const inputArea = document.getElementById("inputArea"),
wordArea = document.getElementById("wordArea"),
manPart = document.getElementsByClassName("man-part");

let keyword = "";
let j = 0;

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
        const span2 = document.createElement("span");
        span2.className = "show-words";
        span2.id = `showWord${i}`;
        span2.innerHTML = keyword[i];
        wordArea.appendChild(span2);
    }
}

function handleTyping(e){
    console.log(e.key)
    let match = false;
    for(let i=0; i<keyword.length; i++){
        if(e.key === keyword[i]){
            const target = document.getElementById(`showWord${i}`);
            target.style.opacity = "1";
            match = true;
        }
        
    }
    if(match === false){
            manPart[j].style.opacity = 1;
        j++;
    }
}


function init(){
    ramdomWord();
    window.addEventListener("keydown", handleTyping);
}

init();