<?php

$post = $_POST;


// Names for the form objects need to be what is in the quotes here
$name = $post['name']; // ex: <input tupe="text" name="name"/>
$usr_subj = $post['subject'];
$usr_msg = $post['message'];

$recip = 'benjcape@gmail.com';
$msg_subj = 'DSP Contact-Us form submission';

$msg_body = "<html><body>";

$msg_body .= "Here is the information submited by the user:<br><br>";
$msg_body .= "Users Name: " . $name . "<br>";
$msg_body .= "Users Subject: " . $usr_subj . "<br>";
$msg_body .= "Message: " . $usr_msg;

$msg_body .= "</body></html>";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// Specify who the email should show that it is coming from 
$headers .= 'From: DSP WebSite <admin@DSP.com>' . "\r\n";

// create a variable that triggers the email function  
$mailsent = mail($recip,$msg_subj,$msg_body, $headers);

// now put text on screen that site visitor will see after submitting form 
// if the variable that contains the email function exists, show this on the screen
if ($mailsent) {
	echo "<p>Thanks for submitting your information. We will be in touch with you once it has been reviewed by our staff.</p>";

// since the variable exists, the function gets executed
// if for whatever reason, it doesn't work, show this on the screen
} else {
	echo "<p>For some reason, that did not work, please try again!</p>"; 
// maybe add a "warn" class to the <p> element which displays red text
}

?>