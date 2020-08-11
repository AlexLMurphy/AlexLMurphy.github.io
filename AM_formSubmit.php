<?php
header("Location: contact.html?mailnotsend");
if (isset($_POST['submit'])) {
	$cFirstName = $_POST['cFirstName'];
	$cLastName = $_POST['cLastName'];
	$cEmail = $_POST['cEmail'];
	$cSubject = $_POST['cSubject'];
	$cMessage = $_POST['cMessage'];
	
	$mailTo = "alexlmurphy@yahoo.com";
	$header = "From: ".$cEmail;
	$text = "You have received an email from alexlmurphy.com!\n\n".$cMessage
	
	mail($mailTo, $cSubject, $cMessage, $header);
	header("Location: index.html?mailsend");
}
