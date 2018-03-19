function send_user(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())

    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/insertUser',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#message_success').html("votre message a été bien envoyer");
            $("#message_success").addClass("d-block");
            $("#message_success").removeClass("d-none");
        },
         error : function (error) {
            $('#message_error').html("votre message n'a pas envoyer");
            $("#message_error").addClass("d-block");
            $("#message_error").removeClass("d-none");
        },
    });
    return false;
};

function send_pigeon(e) { 
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
        }
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


