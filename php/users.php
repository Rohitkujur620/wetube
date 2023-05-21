<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    
    $con = mysqli_connect($server, $username, $password);
    if(!$con)
    {
        die("Connection failed due to ". mysqli_connect_error());
    }

    $name =  $_POST['name'];
    $email_address =  $_POST['email'];
    $password =  $_POST['password'];
    $password =  password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO `wetube`.`registeres_users` (`name`, `email_address`, `password`, `date`) 
    VALUES ('$name', '$email_address', '$password', current_timestamp());";
    
    if($con->query($sql)==false)
    {
        echo "Error: $sql <br> $con->error";
    }
?>