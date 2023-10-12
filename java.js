function jumlahkan() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    var hasil = bilangan1 + bilangan2;

    alert("Hasil Penjumlahan: " + hasil);
}
function ulang() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value="");
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value="");
}
function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    var namaError = document.getElementById("namaError");
    var emailError = document.getElementById("emailError");
    var alamatError = document.getElementById("alamatError");
    var isValid = true;

    if (nama.trim() === "") {
        namaError.innerHTML = "Nama harus diisi.";
        isValid = false;
    } else {
        namaError.innerHTML = "";
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        emailError.innerHTML = "Email tidak valid.";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }
yy
    if (alamat.trim() === "") {
        alamatError.innerHTML = "Alamat harus diisi.";
        isValid = false;
    } else {
        alamatError.innerHTML = "";
    }

    if (!isValid) {
        alert("Harap isi semua field yang diperlukan.");
    }

    return isValid;
}
