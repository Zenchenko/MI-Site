<?php

$recepient = "zenchenko.michail@gmail.com";
$sitename = "-Z-";//имя сайта

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["message"]);
$message = "Name: $name \nEmail: $email \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");