function send_value(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())

    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/insert',
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