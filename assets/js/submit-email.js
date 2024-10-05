document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = {
        firstname: document.getElementById('firstname').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        businessPhone: document.getElementById('businessPhone').value,
        message: document.getElementById('message').value,
    };

    try {
        const response = await axios.post("http://localhost:3001/send-email", formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log("Data from backend", response);

        if (response.status === 200) {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email.');
        }
    } catch (error) {
        console.error('Error sending email:', error);
    }
});
