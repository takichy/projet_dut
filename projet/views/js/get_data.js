function getPigeonById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectPigeon/${id}`,
        success: function (data) {
            var pigeons = '';
            data.forEach(function (d) {
                pigeons += `<tr><td>${d.numero_bague}</td><td>${d.annee_naissance}</td><td><a data-toggle="modal" data-target="#myModal">${d.nom_pigeon}</a></td><td>${d.couleur}</td><td>${d.sexe}</td><td>${d.pigeonnier}</td><td>${d.souche}</td><td>${d.etat}</td><td>${d.num_bague_pere}</td><td>${d.num_bague_mere}</td><td>${d.supplement}</td></tr>`;
            });
            $('#tablePigeons').html(pigeons)
        }
    });
    return false;
};

/*function getAllPigeon() { 
    $.ajax({
        url: `http://localhost:1337/selectAllPigeon`,
        success: function (data) {
            var pigeons = '';
            data.forEach(function (d) {
                pigeons += `<tr><td>${d.numero_bague}</td><td>${d.annee_naissance}</td><td>${d.nom_pigeon}</td><td>${d.couleur}</td><td>${d.sexe}</td><td>${d.pigeonnier}</td><td>${d.souche}</td><td>${d.etat}</td><td>${d.num_bague_pere}</td><td>${d.num_bague_mere}</td><td>${d.supplement}</td></tr>`;
            });
            $('#tablePigeons').html(pigeons)
        }
    });
    return false;
};
*/
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

function getPigeonUp(id) { 
    $.ajax({
        url: `http://localhost:1337/selectPigeonUpdate/${id}`,
        success: function (data) {
            var d = data[0];
            console.log(d);
            $('#numero_bague').val(`${d.numero_bague}`);
            $('#annee_naissance').val(`${d.annee_naissance}`);
            $('#sexe').val(`${d.sexe}`);
            $('#etat').val(`${d.etat}`);
            $('#souche').val(`${d.souche}`);
            $('#nom_pigeon').val(`${d.nom_pigeon}`);
            $('#pigeonnier').val(`${d.pigeonnier}`);
            $('#num_bague_pere').val(`${d.num_bague_pere}`);
            $('#annee_naiss_pere').val(`${d.annee_naiss_pere}`);
            $('#num_bague_mere').val(`${d.num_bague_mere}`);
            $('#annee_naiss_mere').val(`${d.annee_naiss_mere}`);
            $('#supplement').val(`${d.supplement}`);
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

function getTotalMalesById(id) {
    $.ajax({
        url: `http://localhost:1337/selectMales/${id}`,
        success: function (data) {
            console.log("this is my value", data);
            $('#totalMales').html(`${data[0].totalMales}`);
        },
        error: function (e) {
            console.log("this is an error", e);
        }
    });
    return false;
};

function getTotalJeunesById(id) {
    $.ajax({
        url: `http://localhost:1337/selectJeunes/${id}`,
        success: function (data) {
            console.log("this is my value", data);
            $('#totalJeunes').html(`${data[0].totalJeunes}`);
        },
        error: function (e) {
            console.log("this is an error", e);
        }
    });
    return false;
};

function getTotalFemalesById(id) {
    $.ajax({
        url: `http://localhost:1337/selectFemales/${id}`,
        success: function (data) {
            console.log("this is my value", data);
            $('#totalFemales').html(`${data[0].totalFemales}`);
        },
        error: function (e) {
            console.log("this is an error", e);
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
            $('#date_vaccination').val(`${d.date_vaccination}`);
            $('#description').val(`${d.description}`);
            $('#termine_par').val(`${d.termine_par}`);
            $('#medication').val(`${d.medication}`);
            $('#dosage').val(`${d.dosage}`);
            $('#commentaire_vaccination').val(`${d.commentaire_vaccination}`);
        }
    });
    return false;
};