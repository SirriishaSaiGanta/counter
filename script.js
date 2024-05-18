let count = document.getElementById("count");
let error = document.getElementById("error")

let button_dec = document.getElementById("button_dec");
let button_inc = document.getElementById("button_inc");
let button_clr = document.getElementById("button_clr");

button_inc.addEventListener("click", countAddision);
button_dec.addEventListener("click", countSubstraction);
button_clr.addEventListener("click", countReset);

let cnt = 0
function updateCount() {
     count.innerHTML = cnt;
     count.style.color= 'white';
}
function countAddision(){
    if(cnt>=0){
        error.innerText = ""; 
    }
    cnt++;
    updateCount();
}
function countSubstraction(){
    if(cnt===0){
     error.innerText = "Error: cannot go below 0";
     error.style.color = "red";
     error.style.fontSize = ".9em";
    }
    else{
    cnt--;
    error.innerText = "";
    }
    updateCount();
}
function countReset(){
    cnt = 0;
    updateCount();
    error.innerText = "";
}

