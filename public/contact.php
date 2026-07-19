<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $raw_input = file_get_contents("php://input");
    $data = json_decode($raw_input, true);

    $name = strip_tags(trim($data["name"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($data["message"]));

    // Set client's destination email address here
    $to = "info@benevolencehomeservices.com"; 
    $subject = "New Contact Form Submission from " . $name;
    
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($to, $subject, $email_content, $email_headers)) {
        echo json_encode(["success" => true, "message" => "Email sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Server failed to send email."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
}
?>