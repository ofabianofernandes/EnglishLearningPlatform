// Mensagem de boas-vindas
window.onload = function() {
    alert("Welcome to the English Learning Platform!");
}

// Validação simples de formulário (exemplo)
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
