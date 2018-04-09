<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="">
      <meta name="author" content="">
      <link rel="shortcut icon" href="http://getbootstrap.com/docs-assets/ico/favicon.png">
      <!-- <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script> -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <link rel='stylesheet prefetch' href='http://netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css'>
      <title> welcome</title>

      <!-- Bootstrap core CSS -->
      <link href="http://getbootstrap.com/dist/css/bootstrap.css" rel="stylesheet">
      <script src="../projet/views/js/send_data.js"></script>
      <script src="../projet/views/js/get_data.js"></script>
      <!-- Custom styles for this template -->
      <style>
      body {
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #eee;
      }
      .form-signin {
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
      }
      .form-signin .form-signin-heading,
      .form-signin .checkbox {
        margin-bottom: 10px;
      }
      .form-signin .checkbox {
        font-weight: normal;
      }
      .form-signin .form-control {
        position: relative;
        font-size: 16px;
        height: auto;
        padding: 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      .form-signin .form-control:focus {
        z-index: 2;
      }
      .form-signin input[type="text"] {
        margin-bottom: -1px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      </style>
      <script>
        function take_Data() {
          if (document.getElementById('username').value != undefined && document.getElementById('password').value != undefined ){
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var id;
            getUserLogin(username,password); 
          }
        }
      </script>
  </head>

  <body>
  <?php 
  if(isset($_POST['username']) &&isset($_POST['password']) ){
    session_start();
    $_SESSION['username'] = $_POST['username'];
    $_SESSION['password'] = $_POST['password'];
    $_SESSION['connect'] = "oui";
  }
  
   ?>

      <div class="container" style="background-color:#a6b4b6; width:350px; border-radius: 25px; margin-right:49px;">
        <form class="form-signin" onSubmit="return send_registor(event);" method="post"  id="registor_form" style="padding: 15px;">
                      <h2 class="form-signin-heading">Please sign up</h2>
                      <input type="text" class="form-control" name="nom" placeholder="Nom de famille" required autofocus>
                      <input type="text" class="form-control" name="prenom" placeholder="Prenom" required autofocus>
                      <input type="text" class="form-control" name="emaill" placeholder="votre E-Mail" required autofocus>
                      <input type="text" class="form-control" name="number" placeholder="Numéro de portable" required autofocus>
                      <input type="text" class="form-control" name="adresse" placeholder="Adresse" required autofocus>
                      <input type="text" class="form-control" name="pays" placeholder="Pays" required autofocus>
                      <input type="text" class="form-control" name="ville" placeholder="ville"  required autofocus>
                      <input type="text" class="form-control" name="postale" placeholder="code postale" required autofocus>
                      <input type="password" class="form-control" placeholder="Passwordd" required>
                      
                      <label class="checkbox"></label>
                      <input type="checkbox" value="remember-me"> Remember me
                      
                      <button style="width: 300px; height:60px;" class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                      <button style="width: 300px; " class="btn btn-lg btn-secondary btn-block" data-toggle="modal" data-target="#inscription" type="button">Sign in</button>
        </form>
      </div> 

      <div class="modal fade" id="inscription" role="dialog">
        <div class="modal-dialog"> 
            <!-- Modal content-->
            <div class="modal-content" style="margin-top:278px;">
              <!-- body modal -->
              <legend><h2>Sing in</h2></legend>
              <div id="login_message_success" class="alert alert-success d-none"></div>
              <div id="login_message_error" class="alert alert-danger d-none"></div>
                <!-- body modal -->
                <div class="modal-body">
                  <div class="modal-body">
                    <form class="form-signin"  method="post"  id="connexion_form"  style="margin-right:365px; margin-top:6px;" >
                        <input style="width: 420px; height:45px;" id="username" name="username" type="email" class="form-control" placeholder="Email address" required autofocuss>
                        <input style="width: 420px; height:45px;" id="password" name="password" type="password" class="form-control" placeholder="Password" required>
                        <button style="width: 420px; height:45px;" onclick="take_Data();" class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                    </form>
                  </div>
                </div>
            </div>
        </div>
      </div>
  </body>
</html>