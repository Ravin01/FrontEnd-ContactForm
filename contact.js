function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ravinganapathi@gmail.com",
        Password : "Ravin001",
        To : 'ravinganapathi@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact from Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}