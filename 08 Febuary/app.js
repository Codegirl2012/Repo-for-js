//variables
let birinci_eded=25
let ikinci_eded=5
let toplam_sonrasi=30
let çixma_sonrasi=20
let vurma_sonrasi=125
let bölmə_sonrasi=5

// funcion for sum+
function sum(){
    toplam_sonrasi=birinci_eded+ikinci_eded
document.getElementById("netice").innerHTML="Neticemiz: "+toplam_sonrasi
}
// funcion for subtract-
function subtract(){
    toplam_sonrasi=birinci_eded-ikinci_eded
document.getElementById("netice").innerHTML="Neticemiz: "+çixma_sonrasi
}
// funcion for devide:
function devide(){
    toplam_sonrasi=birinci_eded*ikinci_eded
document.getElementById("netice").innerHTML="Neticemiz: "+vurma_sonrasi
}
// funcion for multiple*
function multiple(){
    toplam_sonrasi=birinci_eded / ikinci_eded
document.getElementById("netice").innerHTML="Neticemiz: "+bölmə_sonrasi
}