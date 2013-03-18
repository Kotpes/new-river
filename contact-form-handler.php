<?php 
$errors = '';
$myemail = 'kotpes@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['number']))
{
    $errors .= "\n Пожалуйста, заполните все поля";
}

$name = $_POST['name']; 
$number = $_POST['number']; 
$date = $_POST['date']; 
$ship = $_POST['ship']; 
$message = $_POST['message']; 

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Бронирование теплохода от: $name";
	$email_body = "Поступила новая заявка на бронирование теплохода. ".
	"\n Имя: $name \n Номер телефона: $number \n На дату: \n $date \n Теплоход: \n $ship \n Пожелания: \n $message"; 
	
	$headers = "From: $myemail\n"; 
	
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: contact-form-thank-you.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>