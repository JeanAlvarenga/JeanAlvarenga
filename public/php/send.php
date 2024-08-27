// enviar.php
<?php
$to = "jaielectronike@gmail.com";
$subject = "Novo contato do site";
$message = "Nome: " . $_POST['name'] . "\nEmail: " . $_POST['email'] . "\nMensagem: " . $_POST['message'];

mail($to, $subject, $message);
?>