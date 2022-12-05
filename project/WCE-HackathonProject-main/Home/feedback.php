<?php
Error_reporting(0);
$servername='localhost';
$username='root';
$password='';
$dbname = "Hackathon";
$conn=mysqli_connect($servername,$username,$password,"$dbname");
if(!$conn){
   die('Could not Connect My Sql:');
}


$name = $_GET['name'];
$email =$_GET['email'];
$campany =$_GET['campany'];
$phone =$_GET['phone'];
$message=$_GET['message'];

	 $sql = "INSERT INTO `fb` (`name`, `email`, `campany`, `phone`, `message`) VALUES ('$name', '$email', '$campany', '$phone', '$message')";
	 if (mysqli_query($conn, $sql)) {
		echo "New record created successfully !";
	 } else {
		echo "Error: " . $sql . "
"  .mysqli_error($conn);
	 }
	 mysqli_close($conn);

?>