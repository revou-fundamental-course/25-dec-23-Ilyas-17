// ketika tombol hitung di klik
function luasSegitiga(){
    //get value from form input
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    // Check if the values are valid numbers
    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Tolong masukan angka yang benar!');
    }
    // formula for calculate area 
    const area = 0.5 * alas * tinggi;

    //display the result 
    document.getElementById("hasil").textContent = `Luas segitiga adalah : ${area}`;
};

function kelilingSegitiga(){
    // get value 
    const sisiAb = parseFloat(document.getElementById("ab").value);
    const sisiBc = parseFloat(document.getElementById("bc").value);
    const sisiCa = parseFloat(document.getElementById("ca").value);

    // Check if the values are valid numbers
    if (isNaN(sisiAb) || isNaN(sisiBc) || isNaN(sisiCa)) {
        alert('Tolong masukan angka yang benar!');
    }
    // formula 
    const result = sisiAb + sisiBc + sisiCa;
    console.log(result)
    // display result
    document.getElementById("hasil-keliling").textContent = `Keliling segitiga adalah : ${result}`
};

function reset(){
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasil").style.display = "none";
};
function reseta(){
    const sisiAb = document.getElementById("ab").value = "";
    const sisiBc = document.getElementById("bc").value = "";
    const sisiCa = document.getElementById("ca").value = "";
    document.getElementById("hasil-keliling").style.display = "none";
}