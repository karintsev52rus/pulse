<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer\PHPMailer\src\Exception.php';
require 'PHPMailer\PHPMailer\src\PHPMailer.php';
require 'PHPMailer\PHPMailer\src\SMTP.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
/* $filePath = __DIR__ . "/attachments/" . $_FILES['image']['name']; */

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output
try{
    $mail->isHTML(TRUE);
    $mail->setFrom('karintsevp@gmail.com', 'Pulse');   // От кого письмо 
    $mail->addAddress('karintsevpv@yandex.ru');     // Add a recipient
    $mail->Subject = 'Данные';
    $mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '<br>
     '

    

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Username = 'karintsevp@gmail.com';                 // Наш логин
    $mail->Password = '727vrb456';                           // Наш пароль от ящика
    $mail->Port = 587;                                    // TCP port to connect to
    $mail->send();
}
catch (Exception $e){
    echo $e->errorMessage();
}
catch (\Exception $e)
{
   /* PHP exception (note the backslash to select the global namespace Exception class). */
   echo $e->getMessage();
}




 


//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML




if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>