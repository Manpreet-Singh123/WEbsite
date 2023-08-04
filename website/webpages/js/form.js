function sendEmail(){
    Email.send({
        SecureToken: "edfb0654-1f7c-4184-b18e-0d7419ac0128" ,
        To : 'singhmanpreet10918@gmail.com',
        From : "frmsrciiser@gmail.com",
        Subject : "New Contact form Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfuly")
    );
}
