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
            $('#user_message_error').removeClass("d-block");
            $('#user_message_error').addClass("d-none");
            $('#user_message_success').html("votre message bien envoyer");
            $('#user_message_success').addClass("d-block");
            $('#user_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#user_message_success').addClass("d-none");
            $('#user_message_success').removeClass("d-block");
            $('#user_message_error').html("erreur!! ");
            $('#user_message_error').addClass("d-block");
            $('#user_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_nvaqui(e) {
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())



    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/insertPigeon/1',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            console.log(data);
            $('#nvaqui_message_error').removeClass("d-block");
            $('#nvaqui_message_error').addClass("d-none");
            $('#nvaqui_message_success').html("votre message bien envoyer");
            $('#nvaqui_message_success').addClass("d-block");
            $('#nvaqui_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#nvaqui_message_success').addClass("d-none");
            $('#nvaqui_message_success').removeClass("d-block");
            $('#nvaqui_message_error').html("erreur!! ");
            $('#nvaqui_message_error').addClass("d-block");
            $('#nvaqui_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_naissance(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/insertNaissance/1',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#nv_naissance_message_error').removeClass("d-block");
            $('#nv_naissance_message_error').addClass("d-none");
            $('#nv_naissance_message_success').html("votre message bien envoyer");
            $('#nv_naissance_message_success').addClass("d-block");
            $('#nv_naissance_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#nv_naissance_message_success').addClass("d-none");
            $('#nv_naissance_message_success').removeClass("d-block");
            $('#nv_naissance_message_error').html("erreur!! ");
            $('#nv_naissance_message_error').addClass("d-block");
            $('#nv_naissance_message_error').removeClass("d-none");
        },
    });
    return false;
};
     
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
            $('#contact_message_error').removeClass("d-block");
            $('#contact_message_error').addClass("d-none");
            $('#contact_message_success').html("votre message bien envoyer");
            $('#contact_message_success').addClass("d-block");
            $('#contact_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#contact_message_success').addClass("d-none");
            $('#contact_message_success').removeClass("d-block");
            $('#contact_message_error').html("erreur!! ");
            $('#contact_message_error').addClass("d-block");
            $('#contact_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_vaccination(e) { 
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/updateVaccination/55',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#vaccination_message_error').removeClass("d-block");
            $('#vaccination_message_error').addClass("d-none");
            $('#vaccination_message_success').html("votre message bien envoyer");
            $('#vaccination_message_success').addClass("d-block");
            $('#vaccination_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#vaccination_message_success').addClass("d-none");
            $('#vaccination_message_success').removeClass("d-block");
            $('#vaccination_message_error').html("erreur!! ");
            $('#vaccination_message_error').addClass("d-block");
            $('#vaccination_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_update(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/updatePigeon/1',
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#update_message_error').removeClass("d-block");
            $('#update_message_error').addClass("d-none");
            $('#update_message_success').html("votre message bien envoyer");
            $('#update_message_success').addClass("d-block");
            $('#update_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#update_message_success').addClass("d-none");
            $('#update_message_success').removeClass("d-block");
            $('#update_message_error').html("erreur!! ");
            $('#update_message_error').addClass("d-block");
            $('#update_message_error').removeClass("d-none");
        },
    });
    return false;
};