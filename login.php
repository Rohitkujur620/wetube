<?php
    $login = false;
    $showAlert = false;
    $showError = false;
    $server = "localhost";
	$username = "root";
	$password = "";

	
	$con = mysqli_connect($server, $username, $password, "wetube");
	if(!$con)
	{
		die("Connection failed due to ". mysqli_connect_error());
	}
    $email_address =  $_POST['email'];
	$password =  $_POST['password'];

    $password = hash("adler32", $password);

    $sql = "Select * from registeres_users where email_address='$email_address' AND password='$password';";
    $result = mysqli_query($con, $sql);
    $num = mysqli_num_rows($result);
    if($num==1) {
        $login = true;
        session_start();
        header("Location: index.html");
        $_SESSION['loggedin'] = true;
        $_SESSION['email'] = true;
        die();
    }
    else {
        echo "Invalid Credentials";
    }
?>