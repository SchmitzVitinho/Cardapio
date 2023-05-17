let um = document.getElementById('inpUm')
let dois = document.getElementById('inpDois')
let tres = document.getElementById('inpTres')
let quatro = document.getElementById('inpQuatro')
let cinco = document.getElementById('inpCinco')
let seis = document.getElementById('inpSeis')
let total

function calcular(){
    total = (um.value * 1.70) + (dois.value * 2.30) + (tres.value * 2.60) + (quatro.value * 2.40) + (cinco.value * 2.50) + (seis.value * 1.00) 

    alert('O total a pagar ficou: ' + total + ' R$')
}