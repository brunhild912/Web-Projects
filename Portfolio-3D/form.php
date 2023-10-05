<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contactNo = $_POST['contactNo'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "aribaanjum9122002@gmail.com";  
    $subject = "New contact form submission";
    $body = "Name: $name\nEmail: $email\nContact No.: $contactNo\nSubject: $subject\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo "Thank you for your message. We will get back to you soon.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
