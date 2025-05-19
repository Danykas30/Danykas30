<?php
// send_mail.php

// Allow requests from your domain only (edit as needed)
header('Access-Control-Allow-Origin: https://danykas.vercel.app');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Fetch and sanitize input
$name    = strip_tags(trim($_POST['name'] ?? ''));
$email   = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$message = strip_tags(trim($_POST['message'] ?? ''));

// Basic validation
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please fill out all fields correctly.']);
    exit;
}

// Compose the email
$to      = 'parko20a@gmail.com';
$subject = "Contact Form Message from $name";
$body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: $name <$email>\r\nReply-To: $email\r\n";

// Send the email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
}
