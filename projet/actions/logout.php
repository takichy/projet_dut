<?php  
session_start();
// unset($_SESSION['username']);
session_destroy();
header('location: ../../../projet_dut/login/index.php');
exit();
?>