
document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('button');
    const nameInput = document.getElementById('Name');
    const lastNameInput = document.getElementById('LastName');
    const emailInput = document.getElementById('Email');
    const subjectInput = document.getElementById('Subject');
    const messageTextarea = document.getElementById('message');

    sendButton.addEventListener('click', function(e) {
        e.preventDefault();

        const formData = {
            name: nameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageTextarea.value.trim()
        };

        const validationErrors = validateForm(formData);

        if (validationErrors.length === 0) {
            console.log('Sending data:', formData);
            alert('Message sent successfully!');
            clearForm();
        } else {
            alert('Please correct the following errors:\n' + validationErrors.join('\n'));
        }
    });

    function validateForm(data) {
        let errors = [];

        if (data.name.length < 2) errors.push("Name must be at least 2 characters long");
        if (data.lastName.length < 2) errors.push("Last name must be at least 2 characters long");
        if (!isValidEmail(data.email)) errors.push("Please enter a valid email address");
        if (data.subject.length < 5) errors.push("Subject must be at least 5 characters long");
        if (data.message.length < 10) errors.push("Message must be at least 10 characters long");

        return errors;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function clearForm() {
        nameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        subjectInput.value = '';
        messageTextarea.value = '';
    }
});
