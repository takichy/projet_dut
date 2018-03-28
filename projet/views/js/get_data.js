function getPigeonById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectPigeon/${id}`,
        success: function (data) {
            data.forEach(function (d) {
                console.log(d)
                $('#tablePigeons').html(`<td>${d.numero_bague}</td><td>${d.annee_naissance}</td><td>${d.nom_pigeon}</td><td>${d.couleur}</td><td>${d.sexe}</td><td>${d.pigeonnier}</td><td>${d.souche}</td><td>${d.etat}</td><td>${d.num_bague_pere}</td><td>${d.num_bague_mere}</td><td>${d.supplement}</td>`);
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

function getTotalFemaleById(id) { 

    $.ajax({
        url: `http://localhost:1337/selectFemales/${id}`,
        success: function (data) {
            console.log(data);
            $('#totalFemales').html(`${data.rows}`);
        }
    });
    return false;
};

function getTotalMalesById(id) { 

    $.ajax({
        url: `http://localhost:1337/selectMales/${id}`,
        success: function (data) {
            console.log(data);
            $('#totalMales').html(`${data}`);
        }
    });
    return false;
};

function getTotalJeunesById(id) { 

    $.ajax({
        url: `http://localhost:1337/selectJeunes/${id}`,
        success: function (data) {
            console.log(data);
            $('#totalJeunes').html(`${data}`);
        }
    });
    return false;
};