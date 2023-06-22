const inputBox = document.getElementById ("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("Please write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Script for Click Function




listContainer.addEventListener("click", function clickTaskElement(clickTask){
    if(clickTask.target.tagName === "LI"){
        clickTask.target.classList.toggle("checked");
        saveData();
    }
    else if(clickTask.target.tagName === "SPAN"){
        clickTask.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();