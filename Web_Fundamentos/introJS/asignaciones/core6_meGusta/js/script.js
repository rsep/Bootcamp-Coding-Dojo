// part 1
function aumentar(num){
    var num = document.querySelector("span");
    num.innerText = parseInt(num.innerText)+1;
}


// part 2
function aumentar_diferido(elemento_btn){
    var btn = elemento_btn.value;
    console.log(btn);

    if (btn === "btn1"){
        var num = document.querySelector("#like1");
        num.innerText = parseInt(num.innerText)+1;
    } else if(btn === "btn2"){
        var num = document.querySelector("#like2");
        num.innerText = parseInt(num.innerText)+1;
    } else{
        var num = document.querySelector("#like3");
        num.innerText = parseInt(num.innerText)+1;
    }
}