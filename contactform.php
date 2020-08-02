

<?php
    $name = $_POST['name'];
    $visitor_email = $POST['email'];
    $message = $_POST['message'];

    $email_from = 'kylewang122205@gmail.com';
    $email_subject = 'Inquiry, Submission, or Comment for Blog';
    $email_body = "Name: $name.\n".
                    "Email: $visitor_email.\n".
                        "Message: $message.\n";

    $to = "kylewang1222@outlook.com";
    $headers = "From: $email_from \r\n";
    mail($to, $email_subject, $email_body, $headers);
    header ("Location: contact.html");



?>