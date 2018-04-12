<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>PFE</title>
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:700, 600,500,400,300' rel='stylesheet' type='text/css'>
		<link href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker.css' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
		<script src="https://code.highcharts.com/highcharts.js"></script>
		<script src="https://code.highcharts.com/modules/data.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/js/bootstrap-datepicker.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.0/moment.min.js"></script>
		<script src="../projet/views/js/send_data.js"></script>
		<script src="../projet/views/js/get_data.js"></script>
		<style>

    		.input{
				z-index: 0;
			}

			.footer-bottom {
				bottom: 0;
				/*position: fixed;*/
				margin-top: 90px;
			    background-color: #233245;
			    min-height: 30px;
			    width: 100%;
			}
			.container{
				width: 900px;
			}
			.copyright {
			    color: #fff;
			    line-height: 30px;
			    min-height: 30px;
			    padding: 7px 0;
			}
			.design {
			    color: #fff;
			    line-height: 30px;
			    min-height: 30px;
			    padding: 7px 0;
			    text-align: right;
			}
			.design a {
			    color: #fff;
			}

		    * {
				box-sizing: border-box;
			}
			body {
				margin: 0;
				padding: 0;
				font-family: 'Source Sans Pro', sans-serif;
				background-color: #d5dae5;
				-webkit-font-smoothing: antialiased;
			  	-moz-osx-font-smoothing: grayscale;
			}
			.header {
				position: absolute;
				/*position: absolute;*/
				width: 100%;
				z-index: 8;
				height: 44px;
				background-color: #fff;
				border-bottom: 3px solid #2d3d51;
			}
			/* logo in header(mobile version) and side-nav (tablet & desktop) */
			.logo {
				height: 44px;
				padding: 10px;
				font-weight: 700;
			}
			.header .logo {
				color: #233245;
			}
			.header .logo {
				float: left;
			}
			.header .logo {
				height: 44px;
				z-index: 1;
				padding: 10px;
				font-weight: 700;
				color: #233245;
			}
			.logo  i {
				font-size: 22px;
			}
			.logo span {
				margin-left: 5px;
				text-transform: uppercase;
			}
			.side-nav .logo {
				background-color: #233245;
				color: #fff;
			}

			.nav-trigger {
				position: relative;
				float: right;
				width: 20px;
				height: 44px;
				right: 30px;
				display: block;	
			}
			.nav-trigger span, .nav-trigger span:before, span:after {
				width: 20px;
				height: 2px;
				background-color: #35475e;
			    position: absolute;
			}
			.nav-trigger span {
				top: 50%;
			}
			.nav-trigger span:before, .nav-trigger span:after {
				content: '';
			}
			.nav-trigger span:before {
				top: -6px;
			}
			.nav-trigger span:after {
				top: 6px;
			}
			/* side navigation styles */
			.side-nav {
				position: fixed;
				width: 100%;
    			height: 1100px;
				background-color: #35475e;
				z-index: 1;
				display: none;
			}
			.side-nav.visible {
				z-index: 4;
				display: block;
			}
			.side-nav ul {
				margin: 0;
				padding: 0;
			}
			.side-nav ul li {
				padding: 16px 16px;
				border-bottom: 1px solid #3c506a;
				position: relative;
			}
			.side-nav ul li.active:before {
				content: '';
				position: absolute;
				width: 4px;
				height: 100%;
				top: 0;
				left: 0;
				background-color: #fff;
			}
			.side-nav ul li a {
				color: #fff;
				display: block;
				text-decoration: none;
			}
			.side-nav ul li i {
				color: #0497df;
				min-width: 20px;
				text-align: center;
			}
			.side-nav ul li span:nth-child(2) {
				margin-left: 10px;
				font-size: 14px;
				font-weight: 600;
			}
			/* main content styles */
			.main-content {
				padding: 40px;
				margin-top: 0;
				padding: 0;
				padding-top: 44px;
				height: 100%;
				
			}
			.main-content .title {
				background-color: #eef1f7;
				border-bottom: 1px solid #b8bec9;
				padding: 10px 20px;
				font-weight: 700;
				color: #333;
				font-size: 18px;
			}

			/* main box container */
			.main {
				display: flex;
				flex-flow: row wrap;
			}
			.widget {
				flex-basis: 300px;
				flex-grow: 10;
				height: 300px;
				margin: 15px;
				border-radius: 6px;
				background-color: #ffffff;
				position: relative;
			}
			.widget .title {
				background-color: #eef1f7;
				border-bottom: 1px solid #dfe4ec;
				padding: 10px;
				border-top-left-radius: 6px;
				border-top-right-radius: 6px;
				color: #617085;
				font-weight: 600;
			}
			.ad {
				width: 350px;
				height: 300px;
				border: 1px solid #ddd;
			}
			.ad {
				position: absolute;
				width: 300px;
				height: 250px;
				border: 1px solid #ddd;
				left: 50%;
				transform: translateX(-50%);
				top: 250px;
				z-index: 10;
			}
			.ad .close {
				position: absolute;
				font-family: 'ionicons';
				width: 20px;
				height: 20px;
				color: #fff;
				background-color: #999;
				font-size: 20px;
				left: -20px;
				top: -1px;
				display: table-cell;
				vertical-align: middle;
				cursor: pointer;
				text-align: center;
			}

			/* set element styles to fit tablet and higher(desktop) */
			@media screen and (min-width: 600px) {
				.header {
					background-color: #35475e;
					z-index: 1;
				}
				.header .logo {
					display: none;
				}
				.nav-trigger {
					display: none;
				}
				.nav-trigger span, .nav-trigger span:before, span:after {
					background-color: #fff;
				}
				.side-nav {
					display: block;
					width: 70px;
					z-index: 2;
				}
				.side-nav ul li span:nth-child(2) {
					display: none;
				}
				.side-nav .logo i {
					padding-left: 12px;
				}
				.side-nav .logo span {
					display: none;
				}
				.side-nav ul li i {
					font-size: 26px;
				}
				.side-nav ul li a {
					text-align: center;
				}
				.main-content {
					margin-left: 70px;
				}
			}
			/* set element styles for desktop */
			@media screen and (min-width: 800px) {
				.side-nav {
					width: 200px;
				}
				.side-nav ul li span:nth-child(2) {
					display: inline-block;
				}
				.side-nav ul li i {
					font-size: 16px;
				}
				.side-nav ul li a {
					text-align: left;
				}
				.side-nav .logo i {
					padding-left: 0;
				}
				.side-nav .logo span {
					display: inline-block;
				}
				.main-content {
					margin-left: 200px;
				}
			}

			.currentClass {
				color: red !important;
			}
		</style>

		<script>
			$(document).ready(function() {
				const id = window.location.search.substring(8, window.location.search.length);

				$(`.myNavTrigger${id}`).children('a:first-of-type').addClass('currentClass');
			});
		</script>
		
		<script type="text/javascript">
			$(function() {
				$('.close').click(function() {
					$('.ad').css('display', 'none');
				})
			})
		</script>

		<script type="text/javascript">
			function myTrigger(e) {
				console.log("tata", e);
			}
		</script>
	</head>
	<body>

		<div class="header">
		        <div class="logo myNavTriggerA">
					<a  href = "?action=A">
						<i class="fas fa-user"></i>
						<span>USER</span>
				    </a>
				</div>
			   <a href="#" class="nav-trigger"><span></span></a>
			<div id="logout" style="margin-left: 90%;">
				<a href="../login/login.html" ><button style="height:44px; width:133px;  background-color: Transparent; color:white;  outline:none; border: none; " type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-log-out"></span>Déconnexion</button></a>
			</div>
		</div>

		<div class="side-nav">
			<div class="logo myNavTriggerA">
				<a  href = "?action=A">
					<i class="fas fa-user"></i>
					<span>USER</span>
			    </a>
			</div>

			<nav>
				<ul>
					<li class="myNavTriggerA1">
						<a  href = "?action=A1">
							<span><i class="fab fa-themeisle"></i></span>
							<span>Nouvelle acquisition</span>
						</a>
					</li>

					<li class="myNavTriggerD">
						<a  href = "?action=D">
							<span><i class="fab fa-telegram-plane"></i></span>
							<span>Nouvelle pondaison</span>
						</a>
					</li>

					<li class="myNavTriggerC">
						<a  href = "?action=C">
							<span><i class="fas fa-plus"></i></span>
							<span>Nouvelle Eclosion</span>
						</a>
					</li>

					<li class="myNavTriggerB">
						<a  href = "?action=B">
							<span><i class="fas fa-eye"></i></span>
				            <span>Mes Pigeons</span>
						</a>
					</li>

					<li class="myNavTriggerE">
						<a  href = "?action=E">
							<span><i class="fas fa-align-justify"></i></span>
							<span>Nettoyage</span>
						</a>
					</li>

					<li class="myNavTriggerF">
						<a  href = "?action=F">
							<span><i class="fas fa-align-justify"></i></span>
							<span>Vaccination</span>
						</a>
					</li>

					<li class="myNavTriggerG">
						<a  href = "?action=G">
							<span><i class="fas fa-align-justify"></i></span>
							<span>Traitement</span>
						</a>
					</li>

					<li class="myNavTriggerI">
						<a  href = "?action=I">
							<span><i class="fas fa-envelope"></i></span>
							<span>Contact</span>
						</a>
					</li>

				</ul>
			</nav>
		</div>

		<div class="main-content">
			<div class="main">
				<?php echo $page; ?>
			</div>
		</div>

		<div class="footer-bottom" id="footer-bottom">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
						<div class="copyright">
							© 2018, webpigeon, All rights reserved
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>