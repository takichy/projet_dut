<?php
		if (empty($_GET["action"])) $action = "A";
        else $action = $_GET["action"]; 

	    include("actions/a$action.php");
ob_start();
			if(!empty($vue))

			include("Views/".$vue);
$page=ob_get_clean();

		include ("Views/defaultGabbarit.php");

?>