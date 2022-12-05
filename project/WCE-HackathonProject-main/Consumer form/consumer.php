<?php 
	if(isset($_POST['submit'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$Address=$_POST['Address'];
		$msg=$_POST['msg'];

		$to='foodforgood00@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Form Submission';
		$message="Name :".$name."\n"."Address :".$Address."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;
        

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
// $to_email = "ritikaj088@gmail.com";
// $subject = "Simple Email Test via PHP";
// $body = "Hi, This is test email send by PHP Script";
//$name = "Name";
//$address = "Address";
//$msg = "Msg";
// $headers = "From: foodforgood00@gmail.com";

// if (mail($to_email, $subject, $body, $headers)) {
//     echo "Email successfully sent to $to_email...";
// } else {
//     echo "Email sending failed...";
// }
?>