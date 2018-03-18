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
            $('#message').html("message sent successful");
            console.log(data);
        }
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

