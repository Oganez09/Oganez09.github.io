<?php
	
	$email = "test@mail.ru";
	$theme = "Персональная скидка";
	$message = "Имя: ".$_POST['name'].", Телефон: ".$_POST['phone'].", email: ".$_POST['email'];

	mail($email, $theme, $message);

?>