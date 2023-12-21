document.addEventListener('DOMContentLoaded', function() {
    displayRandomContact();
});

// Hardcoded list of contacts
const contacts = [
    { name: "Rev. Rubens", contato: "+55 65 9906-5900", Pix: "57220840187" },
    { name: "Rev. Terena", contato: "+55 67 8190-2539", Pix: "hterena@gmail.com" },
    { name: "Rev. Jorge Libano", contato: "+961 81 797 073", Pix: "64999102304" },
    { name: "Rev. Marcos NV", contato: "+64 22 103 8126", Pix: "621309781-34" },
    { name: "Rev. Basilio APMT", contato: "+221 77 187 21 43", Pix: "56971192168" },
    { name: "Rev. Bira kulina", contato: "+55 68 9959-2530", Pix: "068999592530" },
    { name: "Rev. Luiz Henrique", contato: "+55 13 99775-0512", Pix: "50.917.306/0001-85" }
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
    document.getElementById('contact-email').textContent = "Contato: " + selectedContact.contato;
    document.getElementById('contact-phone').textContent = "Pix: " + selectedContact.Pix;
}

