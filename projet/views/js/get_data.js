function getPigeonById(id) { 

    $.ajax({
        url: `http://localhost:1337/select_pigeon/${id}`,
        success: function (data) {
            console.log(data);
        }
    });
    return false;
};