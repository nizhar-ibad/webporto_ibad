let angka1 = document.getElementById("angka1");
let angka2 = document.getElementById("angka2");
let penjumlahan = document.getElementById("penjumlahan");
let pengurangan = document.getElementById("pengurangan")
let pembagian = document.getElementById("pembagian")
let perkalian = document.getElementById("perkalian")
let hasil = document.getElementById("hasil");

function tambah(){
    let a = parseInt(angka1.value); 
    let b = parseInt(angka2.value); 
    
    let texthasil = a+b;
    hasil.innerHTML="hasil:"+ texthasil;
}
function kurang(){
    let a = parseInt(angka1.value); 
    let b = parseInt(angka2.value); 
    
    let texthasil = a-b;
    hasil.innerHTML="hasil:"+ texthasil;
}

function bagi(){
    let a = parseInt(angka1.value); 
    let b= parseInt(angka2.value); 
    
    let texthasil = a/b;
    hasil.innerHTML="hasil:"+ texthasil;
}
function kali(){
    let a = parseInt(angka1.value); 
    let b= parseInt(angka2.value); 
    
    let texthasil = a*b;
    hasil.innerHTML="hasil:"+ texthasil;
}

penjumlahan.onclick = tambah;
pengurangan.onclick = kurang;
pembagian.onclick = bagi;
perkalian.onclick = kali;