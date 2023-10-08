document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('./json/isiproposal.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const judulElement = document.getElementById("judul-proposal");
        const latarElement = document.getElementById("latar-belakang");
        const isiElement = document.getElementById("isi-proposal");
        const judul2Element = document.getElementById("judul2-proposal");
        const isi2Element = document.getElementById("isi2-proposal");
        const judul3Element = document.getElementById("judul3-proposal")
        const isi3Element = document.getElementById("isi3-proposal")
        const judul4Element = document.getElementById("judul4-proposal")
        const isi4Element = document.getElementById("isi4-proposal")


        // Populate HTML elements with user data
        judulElement.textContent = userData.Judul;
        latarElement.textContent = userData.Latar;
        isiElement.textContent = userData.Isi;
        judul2Element.textContent = userData.Judul2;
        isi2Element.innerHTML = userData.Isi2.replace(/\n/g, '<br>');
        judul3Element.textContent = userData.Judul3;
        isi3Element.innerHTML = userData.Isi3.replace(/\n/g, '<br>');
        judul4Element.textContent = userData.Judul4;
        isi4Element.innerHTML = userData.Isi4.replace(/\n/g, '<br>');

    } catch (error) {
        console.error('Error:', error);
    }
});