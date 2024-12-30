let content = document.getElementById('content');
let downloads = document.getElementById('downloads');
let contact = document.getElementById('contact');
let keywords = document.getElementById('keywords');
let examples = document.getElementById('examples');

let open_downloads= document.getElementById('open_downloads');
let open_contact = document.getElementById('open_contact');
let open_keywords = document.getElementById('open_keywords');
let open_examples = document.getElementById('open_examples');

open_downloads.addEventListener('click', function (event) {
    if (downloads.style.display === 'flex') {
        downloads.style.display = 'none';
        content.style.display = 'flex';
    } 
    else {
        setDisplayNone();
        downloads.style.display = 'flex';
    }
});

open_contact.addEventListener('click', function () {
    if (contact.style.display === 'flex') {
        contact.style.display = 'none';
        content.style.display = 'flex';
    } 
    else {
        setDisplayNone();
        contact.style.display = 'flex';
    }
});

open_keywords.addEventListener('click', function () {
    if (keywords.style.display === 'flex') {
        keywords.style.display = 'none';
        content.style.display = 'flex';
    } 
    else {
        setDisplayNone();
        keywords.style.display = 'flex';
    }
});

open_examples.addEventListener('click', function () {
    if (examples.style.display === 'flex') {
        examples.style.display = 'none';
        content.style.display = 'flex';
    } 
    else {
        setDisplayNone();
        examples.style.display = 'flex';
    }
});

function setDisplayNone() {
    content.style.display = 'none';
    downloads.style.display = 'none';
    contact.style.display = 'none';
    keywords.style.display = 'none';
    examples.style.display = 'none';
}