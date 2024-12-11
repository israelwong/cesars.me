<?php

$to = 'ing.israel.wong@gmail.com';
$subject = 'Test Email';
$message = 'This is a test email sent from PHP script.';
$headers = 'From: noreply@example.com' . "\r\n" .
    'Reply-To: noreply@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'Email sent successfully.';
} else {
    echo 'Failed to send email.';
}