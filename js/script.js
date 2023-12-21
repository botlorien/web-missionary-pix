document.addEventListener('DOMContentLoaded', function() {
    displayRandomContact();
});

// Hardcoded list of contacts
const contacts = [
    { name: "Rev. Rubens", campo: "Argentina", contato: "+55 65 9906-5900", Pix: "57220840187", img:"assets/rubens.jpeg" },
    { name: "Rev. Terena", campo: "Campo Grande", contato: "+55 67 8190-2539", Pix: "hterena@gmail.com" , img:"assets/terena.jpeg"},
    { name: "Rev. Jorge", campo: "Libano", contato: "+961 81 797 073", Pix: "64999102304" , img:"assets/jorge.jpeg"},
    { name: "Rev. Marcos", campo: "Nova Zelândia", contato: "+64 22 103 8126", Pix: "621309781-34" , img:"assets/marcos.jpeg"},
    { name: "Rev. Basilio", campo: "Quilombolas SP", contato: "+221 77 187 21 43", Pix: "56971192168" , img:"assets/basilio.jpeg"},
    { name: "Rev. Bira kulina", campo: "Acre", contato: "+55 68 9959-2530", Pix: "068999592530" , img:"assets/bira.jpeg"},
    { name: "Rev. Luiz Henrique", campo: "Ruanda", contato: "+55 13 99775-0512", Pix: "50.917.306/0001-85", img:"assets/luiz.jpeg" }
];

function displayRandomContact() {
    let remainingContacts = JSON.parse(localStorage.getItem('remainingContacts'));

    if (!remainingContacts || remainingContacts.length === 0) {
        // Reset the array if all contacts have been displayed or if none are stored
        remainingContacts = contacts.map((_, index) => index);
    }

    // Select a random index and remove it from the remainingContacts array
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const selectedContactIndex = remainingContacts.splice(randomIndex, 1)[0];

    // Save the updated array back to localStorage
    localStorage.setItem('remainingContacts', JSON.stringify(remainingContacts));

    // Select the contact and display it
    const selectedContact = contacts[selectedContactIndex];
    document.getElementById('contact-name').textContent = "Nome: " + selectedContact.name;
    document.getElementById('contact-mission').textContent = "Campo: " + selectedContact.campo;
    document.getElementById('contact-phone').textContent = "Contato: " + selectedContact.contato;
    document.getElementById('contact-pix').textContent = "Pix: " + selectedContact.Pix;
    changeImage(selectedContact.img);
}

function changeImage(newImagePath) {
    var imgElement = document.getElementById('profile-image');
    imgElement.src = newImagePath;
}