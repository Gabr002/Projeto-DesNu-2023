// Nomenclatura
function getValue(){
    var value = document.getElementById("name").value;
    console.log(value);
    document.getElementById("result").innerHTML = "Bem vindo, " + value + "!";
}