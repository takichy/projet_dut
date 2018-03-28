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
            console.log("this is my value", data);
            $('#totalStatistique').html(`${data[0].totalStatique}`);
        },
        error: function (e) {
            console.log("this is an error", e);
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

function getVaccinationById(id) { 

    $.ajax({
        url: `http://localhost:1337/selectVaccination/${id}`,
        success: function (data) {
            var d = data[0];
            console.log(d);
            $('#pigeonnier').val(`${d.pigeonnier}`);
            $('#date_vaccination').val(`${new Da(d.date_vaccination)}`);
            $('#description').val(`${d.description}`);
            $('#termine_par').val(`${d.termine_par}`);
            $('#Medication').val(`${d.medication}`);
            $('#Dosage').val(`${d.dosage}`);
            $('#commentaire_vaccination').val(`${d.commentaire_vaccination}`);

        }
    });
    return false;
};