<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

import "PHPMailer/src/Exception.php"
import "PHPMailer/src/PHPMailer.php"

$mail = new PHPMailer(true);
$mail->new CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer/language/');
$mail->IsHTML(true);

$mail->setForm("от меня");
$mail->addAdress("1primo1@mail.ru");
$mail->Subject("1primo1@mail.ru");

$body = '<h1> какой-то текст</h1>';
$body.='<p>'.$-POST[name]'</p>'
$body.='<p>'.$-POST[email]'</p>'
$body.='<p>'.$-POST[phone]'</p>'
$body.='<p>'.$-POST[story]'</p>'

$mail->Body = $body;
if(!$mail->send()) {
    $message = 'ошибка'
} else {
    $message = 'данные отправлены'
}
$response = ['message' => $message];
hesder('Content-type: application/json');
echo json_encode($response);
?>
