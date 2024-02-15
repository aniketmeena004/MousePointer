let inc = document.getElementById("incrementer");



let count = 0;
inc.onclick = function(){
    count++;
    document.getElementById("display").textContent = count;
}
reset.onclick = function(){
    count = 0;
    document.getElementById("display").textContent = count;
}
