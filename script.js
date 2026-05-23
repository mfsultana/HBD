// Mengambil elemen dari HTML
const introScreen = document.getElementById('intro-screen');
const rundownScreen = document.getElementById('rundown-screen');
const btnMasuk = document.getElementById('btn-masuk');

// Menambahkan aksi ketika tombol diklik
btnMasuk.addEventListener('click', function() {
    // Sembunyikan layar intro
    introScreen.classList.add('hidden');
    
    // Tampilkan layar rundown
    rundownScreen.classList.remove('hidden');
});
