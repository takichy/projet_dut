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
            $('#user_message_success').html("votre message bien envoyer");
            $('#user_message_success').addClass("d-block");
            $('#user_message_success').removeClass("d-none");
        },
        error : function (error) {
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
        url: 'http://localhost:1337/insertPigeon',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
            success: function (data) {
            console.log(data);
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

function send_naissance(e) { 
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
            console.log(data);
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
            console.log(data);
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
};

function send_vaccination(e) { 
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/updateVaccination/5557849',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            console.log(data);
            $('#vaccination_message_success').html("message sent successful");
            $("#vaccination_message_success").addClass("d-block");
            $("#vaccination_message_success").removeClass("d-none");
        },
        error : function (error) {
            $('#vaccination_message_error').html("message error");
            $("#vaccination_message_error").addClass("d-block");
            $("#vaccination_message_error").removeClass("d-none");
        },
    });
    return false;
};