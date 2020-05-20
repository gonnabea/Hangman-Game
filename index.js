const inputArea = document.getElementById("inputArea"),
manPart = document.getElementsByClassName("man-part"),
modalContainer = document.getElementById("modalContainer"),
replayBtn = document.getElementById("replayBtn"),
loseModal = document.getElementById("loseModal"),
modalMsg = document.getElementById("modal-msg");

let keyword = "";
let j = 0;
let matchArr = [];
let typeRec = [];

function ramdomWord(){
    const randomNum = Math.floor(Math.random()*10);
    console.log(randomNum)
    const words = ["hostile", "shed", "vulnerable", "faint", "ignore", "powder", "bacteria",
    "expedition", "edit", "optical"];
    keyword = words[randomNum]; // 정답 생성
    console.log(keyword);
    const div = document.createElement("div");
    div.id = "wordArea";
    div.className = "word-area";
    inputArea.appendChild(div);
    
    for(let i = 0; i < keyword.length ; i++){
        const span = document.createElement("span");
        span.className = "keyword_area";
        span.innerHTML = "___";
        inputArea.appendChild(span);
        const span2 = document.createElement("span");
        span2.className = "show-words";
        span2.id = `showWord${i}`;
        span2.innerHTML = keyword[i];
        div.appendChild(span2);
    }
} // 정답 생성, 정답 글자 수 체크 후 밑줄 생성.

function handleTyping(e){
    typeRec.map(typing => {
        if(typing === e.key){
            console.log("이미 입력하신 키입니다");
        }
    })
    typeRec.push(e.key);
    console.log(e.key);
    let match = false;
    for(let i=0; i<keyword.length; i++){
        if(e.key === keyword[i]){
            const target = document.getElementById(`showWord${i}`);
            target.style.opacity = 1;
            match = true;
            matchArr.push(e.key);
            
        }
    } // 정답인 지 체크
    console.log(matchArr)
    
    console.log(typeRec)
    if(match === false && j < 6){
        manPart[j].style.opacity = 1;
        j++;
    } // 실패했을 경우, 아직 기회가 남아있음
    if(j === 6){
        window.removeEventListener("keydown", handleTyping);
        modalContainer.style.display = "flex";
        loseModal.style.display = "flex";
        replayBtn.addEventListener("click", restart);
        modalMsg.innerHTML = "아쉽게도, 실패하셨군요 😢"
    } // 패배
    if(matchArr.length == keyword.length){
        window.removeEventListener("keydown", handleTyping);
        modalContainer.style.display = "flex";
        loseModal.style.display = "flex";
        modalMsg.innerHTML = "축하합니다! 당신이 이겼습니다 😎";
        replayBtn.addEventListener("click", restart);
        
    } // 성공
    
}

function restart(){
    replayBtn.removeEventListener("click", restart);
    window.addEventListener("keydown", handleTyping);
    modalContainer.style.display = "none";
    const keywordArea = document.getElementsByClassName("keyword_area");
    for(let i=0; i<6; i++){
        manPart[i].style.opacity = 0;
    } // 행맨 초기화
    console.log(keywordArea)
    inputArea.innerHTML = "";
    j=0;
    matchNum = [];
    matchArr = [];
    typeRec = [];
    ramdomWord();
}


function init(){
    ramdomWord();
    window.addEventListener("keydown", handleTyping);
}

init();