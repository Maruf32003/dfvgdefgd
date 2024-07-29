document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    fetch('https://script.google.com/macros/s/AKfycbyvRMl3ERN9mNANl0EaJamZeqqBXjBQpC8iba2xcbd8U7_pC5w5vaPNF2wSTRF6-Ma8AQ/exec', { // Replace with your Web App URL
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('contact-form').reset();
        
        // Format date and time in 24-hour format
        var now = new Date();
        var formattedDate = now.toISOString().split('T')[0]; // YYYY-MM-DD
        var formattedTime = now.toTimeString().split(' ')[0]; // HH:MM:SS
        
        document.getElementById('submission-date').innerText = formattedDate + ' ' + formattedTime;
        document.getElementById('confirmation-message').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
});
