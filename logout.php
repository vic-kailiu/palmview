<?php
session_start();
if(session_destroy()) // Destroying All Sessions
{
header("Location: http://dip.net63.net/dip/theme/DIPlogin.html"); // Redirecting To Home Page
}
?>