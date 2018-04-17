<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>App</title>
    <!-- Bootstrap core CSS-->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="css/sb-admin.css" rel="stylesheet">
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="../projet/views/js/send_data.js"></script>
    <script src="../projet/views/js/get_data.js"></script>

    <script>
      function take_Data() {
        if (document.getElementById('username').value != undefined && document.getElementById('password').value != undefined ){
          var username = document.getElementById('username').value;
          var password = document.getElementById('password').value;

          getUserLogin(username,password); 
          <?php
               php();
              ?>
        }
      }
    </script>
  </head>
  <body class="bg-dark">
    <div class="container">
        <div class="card card-login mx-auto mt-5">
          <div class="card-header">Connexion</div>
          <div id="login_message_error" class="alert alert-danger d-none"></div>
          <div class="card-body">
                <form method="POST" id="login_form">
                  <div class="form-group">
                    <label for="username">Adresse email</label>
                    <input class="form-control" id="username" name="username" type="email"  placeholder="adresse email">
                  </div>

                  <div class="form-group">
                    <label for="password">Mot de passe</label>
                    <input class="form-control" id="password" name="password" type="password" placeholder="mot de passe">
                  </div>
                  <button type="button"  class="btn btn-lg btn-primary btn-block"  onclick="take_Data();" >Connexion</button>
                </form>
                <div class="text-center">
                  <a class="d-block small mt-3" href="register/register.html">Crée un compte</a>
                  <a class="d-block small" href="forgot-password/forgot-password.html">Vous n'arrivez pas à vous connecter ?</a>
                </div>
          </div>
        </div>
    </div>
    <?php
        function php(){
          session_start();
          // if(isset($_POST['username'])){
          $_SESSION['connect']="oui";
        // }
        }
      ?>
  </body>
</html>