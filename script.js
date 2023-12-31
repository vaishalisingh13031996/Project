function validateRegisterForm() {
    var fullname = document.getElementById('fullname').value;
    var contact = document.getElementById('contact').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validate Full Name
    if (fullname.length < 2) {
        alert('Full name must be at least 2 characters long.');
        return false;
    }

    // Validate Contact 
    if (contact.length < 10 || isNaN(contact)) {
        alert('Please enter a valid contact number.');
        return false;
    }

    // Validate Date of Birth
    // Note: Further validation can be added based on specific requirements
    if (!dob) {
        alert('Please enter your date of birth.');
        return false;
    }

    // Validate Email
    if (!email.includes('@') || email.length < 5) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate Password 
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }

    return true; // Form is valid
}

function validateLoginForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validate Email
    if (!email.includes('@') || email.length < 5) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate Password 
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }

    return true; // Form is valid
}