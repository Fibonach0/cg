function sendEmail() {

    let name = valueById('name')
    let email = valueById('email')
    let subject = valueById('subject')
    let text = valueById('comments')

    Email.send({
            Host: "smtp.gmail.com",
            Username: "ignacio.antu@gmail.com",
            Password: "fqgowavhdwqkopuk",
            To: 'ignacio.antu@gmail.com',
            From: email,
            Subject: subject,
            Body: " Correo: " + email + "<br>" +
                " Nombre: " + name + "<br>" +
                "Consulta: " + text,
        })
        .then(function(message) {
            alert("El mensaje se envió correctamente. Muchas gracias! ")
        });
}

function valueById(element) {
    return document.getElementById(element).value
}