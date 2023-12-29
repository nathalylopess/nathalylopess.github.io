const form = document.getElementById('#form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if(campos[0].value.length < 3) {
        setError(0);
    }

    else {
        removeError(0);
    }

}

function maisPasswordValidate() {
    if(campos[1].value.length < 8) {
        setError(1);
    }
    else {
        removeError(1);
    }
}

var acessar = document.getElementById("acessar");
acessar.addEventListener("click", function(){
    window.location.href = "https://nathalylopess.github.io/index.html"
})

var cadastro = document.getElementById("cadastro");
cadastro.addEventListener("click", function(){
    window.location.href = "https://nathalylopess.github.io/cadastro.html"
})
