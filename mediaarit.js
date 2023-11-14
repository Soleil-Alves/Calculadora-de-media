function calculo(){
var nm1 = document.getElementById("nm1").value
var nm2 = document.getElementById("nm2").value
var nm3 = document.getElementById("nm3").value
var nm4 = document.getElementById("nm4").value
var nm5 = document.getElementById("nm5").value

var media = (Number(nm1) + Number(nm2) + Number(nm3) + Number(nm4) + Number(nm5)) / 5

alert (`A media dos númeors é de: ${media}`)
}