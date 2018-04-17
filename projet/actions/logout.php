<?php  
session_start();
session_destroy();
unset($_SESSION['connect']);
header('location: ../../login/login1.php');
exit();
?>