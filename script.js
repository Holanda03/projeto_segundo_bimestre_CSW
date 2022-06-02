let email = document.getElementById("email");
let nome = document.getElementById("firstname");
let sobrenome = document.getElementById("lastname");
let senha = document.getElementById("password");
let senhaConfir = document.getElementById("passvalidation");
let dataNasci = document.getElementById("datenasc");
let nacionalidade = document.getElementById("nacionality");
let cadonu = document.getElementById('cadonu');
let checkbox = document.getElementById("agreement");
let submitbtn = document.getElementById("btnsubmit");

// Os "eventListener's" abaixo foram criados para previnir que o usuário digite um número/letra onde não deve
nome.addEventListener("keydown", function(e) {  
  if (e.key > "0" && e.key < "9") {
    e.preventDefault();
  }
});

sobrenome.addEventListener("keydown", function(e) {  
  if (e.key > "0" && e.key < "9") {
    e.preventDefault();
  }
});

nacionalidade.addEventListener("keydown", function(e) {  
  if (e.key > "0" && e.key < "9") {
    e.preventDefault();
  }
});

cadonu.addEventListener("keydown", function(e) {
   if (e.key >= "a" && e.key <= "z") {
     e.preventDefault();
   }
});


// Criando as funções de validação de dados
function checkEmail () {
  if (email.value == "") {
    alert("O email não pode ficar em branco");
  }
}

function checkName () {
  if (nome.value == "") {
    alert("O nome não pode ficar em branco");
  }
}

function checkSurname () {
  if (sobrenome.value == "") {
    alert("O sobrenome não pode ficar em branco");
  }
}

function checkPasswords () {
  if (senha.value != senhaConfir.value) {
    alert("Suas senhas não são iguais");
  }
  if (senha.value == "" || senhaConfir.value == "") {
    alert("As senhas não podem ficar em branco");
  }
}

function checkDataNasc () {
  if (dataNasci.value == "") {
    alert("A data de nascimento não pode ficar em branco");
  }
}

function checkNacionalidade () {
  if (nacionalidade.value == "") {
    alert("A nacionalidade não pode ficar em branco");
  }
}

function checkCadonu () {
  if (cadonu.value == "") {
    alert("O cadastro da ONU não pode ficar em branco");
  }
}

function checkCheckbox () {
  if (checkbox.checked == false) {
    alert("É necessário aceitar os termos de uso")
  }
}

// Criando e chamando a função que irá validar os dados
function checkAll () {
  submitbtn.addEventListener("click", function() {
    checkEmail();
    checkName();
    checkSurname();
    checkPasswords();
    checkDataNasc();
    checkNacionalidade();
    checkCadonu();
    checkCheckbox();
  })
}

checkAll();