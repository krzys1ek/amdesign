
<?php
$to      = 'viprafal@interia.pl';
$subject = $_POST['firstName']." ".$_POST['subject'];
$message = $_POST['message'];
$headers = 'From: ' . $_POST['email'] . "\r\n" .
	'Content-type: text/html; charset=utf-8';

mail($to, $subject, $message, $headers);
echo "<p style='font-size:40px; text-align:center' >".'Wiadomość została wysłana';

header('Refresh: 1; url=http://localhost:3000/projekt/index.html');


?>