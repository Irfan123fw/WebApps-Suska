function gotoWhatsapp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var url = "https://wa.me/6282284417365?text=" +
    "Name: " + name + "%0a" +
    "Email: " + email + "%0a" +
    "subject: " + subject + "%0a" +
    "Pesan: " + message;

  window.open(url, '_blank').focus();
}