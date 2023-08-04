function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "frmsrciiser@gmail.com",
        Password : "aman@2223",
        To : 'singhmanpreet10918@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}