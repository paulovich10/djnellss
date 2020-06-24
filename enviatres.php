
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings                                    // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'adjnellss@gmail.com';                     // SMTP username
    $mail->Password   = 'beleza47';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('adjnellss@gmail.com', 'Mailer');
    $mail->addAddress('adjnellss@gmail.com');     // Add a recipient
   
  

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = "Nombre:".$nombre."\r\n Email: ".$email."\r\n Telefono: ".$telefono."\r\n Mensaje:".$mensaje;
 

    $mail->send();
    echo "<script>alert('Email enviado con éxito!');</script>";
    echo "<script>document.location.href='index.html'</script>";
} catch (Exception $e) {
    echo "<h1> El mensaje no ha podido ser enviado</h1>. Mailer Error: {$mail->ErrorInfo}";
}

?>