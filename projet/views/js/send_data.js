function send_user(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())

    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/insertUser/1',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
<<<<<<< HEAD
            $('#user_message_success').html("votre message bien envoyer");
            $('#user_message_success').addClass("d-block");
            $('#user_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#user_message_error').html("erreur!! ");
            $('#user_message_error').addClass("d-block");
            $('#user_message_error').removeClass("d-none");
=======
            $('#message_success').html("votre message a été bien envoyer");
            $("#message_success").addClass("d-block");
            $("#message_success").removeClass("d-none");
        },
         error : function (error) {
            $('#message_error').html("votre message n'a pas envoyer");
            $("#message_error").addClass("d-block");
            $("#message_error").removeClass("d-none");
>>>>>>> 4522bbe1379d04fecacdd3578f707aa4e139f2b0
        },
    });
    return false;
};

function send_nvaqui(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/insertPigeon',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#nvaqui_message_success').html("votre message bien envoyer");
            $("#nvaqui_message_success").addClass("d-block");
            $("#nvaqui_message_success").removeClass("d-none");
        },
        error : function (error) {
            $('#nvaqui_message_error').html("erreur!! ");
            $("#nvaqui_message_error").addClass("d-block");
            $("#nvaqui_message_error").removeClass("d-none");
        },
    });
    return false;
};

<<<<<<< HEAD
function send_naissance(e) { 
    console.log('je suis sur send naissance');
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/insertNaissance',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#nv_naissance_message_success').html("votre message bien envoyer");
            $('#nv_naissance_message_success').addClass("d-block");
            $('#nv_naissance_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#nv_naissance_message_error').html("erreur!! ");
            $('#nv_naissance_message_error').addClass("d-block");
            $('#nv_naissance_message_error').removeClass("d-none");
        },
    });
    return false;
};
     
=======

>>>>>>> 4522bbe1379d04fecacdd3578f707aa4e139f2b0
function send_message(e) { 
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/insertMessage',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#contact_message_success').html("message sent successful");
            $("#contact_message_success").addClass("d-block");
            $("#contact_message_success").removeClass("d-none");
        },
        error : function (error) {
            $('#contact_message_error').html("message error");
            $("#contact_message_error").addClass("d-block");
            $("#contact_message_error").removeClass("d-none");
        },
    });
    return false;
<<<<<<< HEAD
};
=======
};


>>>>>>> 4522bbe1379d04fecacdd3578f707aa4e139f2b0
