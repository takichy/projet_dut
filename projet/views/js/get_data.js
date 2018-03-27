function getPigeonById(id) { 

    $.ajax({
        url: `http://localhost:1337/selectPigeon/${id}`,
        success: function (data) {
            data.forEach(function (d ) {
                console.log(d)
                $('#tablePigeons').html(`<td>${d.nom}</td><td>${d.adresse}</td><td>${d.mail}</td>`);
            })
        }
    });
    return false;
};

function getUserById(id) { 

    $.ajax({
        url: `http://localhost:1337/selectUser/${id}`,
        success: function (data) {
            var d = data[0];
            console.log(d);
            $('#last_name').val(`${d.nom}`);
            $('#first_name').val(`${d.prenom}`);
            $('#email').val(`${d.mail}`);
            $('#phone').val(`${d.telephone}`);
            $('#address').val(`${d.adresse}`);
            $('#countries_states').val(`${d.pays}`);
            $('#countries_city').val(`${d.ville}`);
            $('#zip').val(`${d.code_postal}`);
        }
    });
    return false;
};

function getTotalById(id) { 

    $.ajax({
        url: `http://localhost:1337/selectTotal/${id}`,
        success: function (data) {
            console.log(data);
            $('#totalStatistique').html(`${data}`);
        }
    });
    return false;
};