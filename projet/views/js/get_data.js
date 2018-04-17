function getPigeonById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectPigeon/${id}`,
        success: function (data) {
            console.log(data);
            var pigeons = '';
            data.forEach(function (d) {
                pigeons += `<tr data-toggle="modal" data-target="#myModal" onClick="getvalue(${d.numero_bague})">
                                <td>${d.numero_bague}</td>
                                <td>${d.annee_naissance}</td>
                                <td>${d.nom_pigeon}</td>
                                <td>${d.couleur}</td>
                                <td>${d.sexe}</td>
                                <td>${d.source}</td>
                                <td>${d.famille}</td>
                                <td>${d.race}</td>
                                <td>${d.etat}</td>
                                <td>${d.num_bague_pere}</td>
                                <td>${d.num_bague_mere}</td>
                                <td>${d.supplement}</td>
                                <td style="width:15%;" ><img style ="width: 100%; height: 100px;" src="${d.image}" /></td>
                            </tr>`;
            });
            $('#tablePigeons').html(pigeons)
        }
    });
    return false;
};

function getListVaccinById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectListVaccin/${id}`,
        success: function (data) {
            var pigeons = '';
            data.forEach(function (d) {
                pigeons += `<tr>
                                <td>${d.numero_bague}</td>
                                <td>${moment(d.date_vaccination).format('DD-MM-YYYY')}</td>
                                <td>${moment(d.date_prochaine_vaccination).format('DD-MM-YYYY')}</td>
                                <td>${d.commentaire_vaccination}</td>
                            </tr>`;
            });
            $('#tableVaccin').html(pigeons)
        }
    });
    return false;
};

function getTraitementById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectListTrait/${id}`,
        success: function (data) {
            var pigeons = '';
            data.forEach(function (d) {
                pigeons += `<tr>
                                <td>${d.numero_traitement}</td>
                                <td>${moment(d.date_traitement).format('DD-MM-YYYY')}</td>
                                <td>${d.traitement_concerne}</td>
                                <td>${d.commentaire_traitement}</td>
                            </tr>`;
            });
            $('#tableTrait').html(pigeons)
        }
    });
    return false;
};

function getListVaccinUrgentById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectListVaccinUrgent/${id}`,
        success: function (data) {
            console.log(data);
            var pigeons = '';
            data.forEach(function (d) {
                pigeons += `<tr>
                                <td>${d.numero_bague}</td>
                                <td>${moment(d.date_vaccination).format('DD-MM-YYYY')}</td>
                                <td>${moment(d.date_prochaine_vaccination).format('DD-MM-YYYY')}</td>
                                <td>${d.commentaire_vaccination}</td>
                            </tr>`;
            });
            $('#tableVaccinUrgent').html(pigeons)
        }
    });
    return false;
};

function getEclosionById(id_use) { 
    $.ajax({
        url: `http://localhost:1337/selectEclosion/${id_use}`,
        success: function (data) {
            var pigeons = '';
            data.forEach(function (d) {
                pigeons += `<tr data-toggle="modal" data-target="#eclosionModal" onClick="getEclos(${d.id_eclosion})">
                                <td>${moment(d.date).format('DD-MM-YYYY')}</td>
                                <td>${d.serie}</td>
                                <td>${d.commentaire}</td>
                            </tr>`;
            });
            $('#tableAffectation').html(pigeons)
        }
    });
    return false;
};

function getNettoyageById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectNettoyage/${id}`,
        success: function (data) {
            var pigeons = '';
            data.forEach(function (d) {
                pigeons += `<tr>
                                <td>${moment(d.date_nettoyage).format('DD-MM-YYYY')}</td>
                                <td>${d.cause_nettoyage}</td>
                            </tr>`;
            });
            $('#tableListNettoyage').html(pigeons)
        }
    });
    return false;
};

function getvalue(id){
     console.log(id);
     getPigeonUp(id);
};

function getEclos(id){
    console.log(id);
    $('#id_eclosion').val(`${id}`);
};

function getFemalePigeonById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectPigeonFemale/${id}`,
        success: function (data) {
            console.log(data);
            var pigeons = '';
            data.forEach(function (d) {
                pigeons += `<option>${d.numero_bague}</option>`;
            });
            $('#female').html(pigeons);
            $('#female_acco').html(pigeons);
        }
    });
    return false;
};

function getNumBagById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectNumBag/${id}`,
        success: function (data) {
            console.log(data);
            var pigeons = '';
            data.forEach(function (d) {
                pigeons += `<option>${d.numero_bague}</option>`;
            });
            $('#numero_bague').html(pigeons);
        }
    });
    return false;
};

function getTraitementPigeonById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectNumBag/${id}`,
        success: function (data) {
            console.log(data);
            var pig = 'Tous';
            var pigeons = '';
            pigeons += `<option>${pig}</option>`;
            $('#traitement_concerne').html(pigeons);
            data.forEach(function (d) {
                pigeons += `<option>${d.numero_bague}</option>`;
            });
            $('#traitement_concerne').html(pigeons);
        }
    });
    return false;
};

function getMalePigeonById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectPigeonMale/${id}`,
        success: function (data) {
            console.log(data);
            var pigeons = '';
            data.forEach(function (d) {
                pigeons += `<option>${d.numero_bague}</option>`;
            });
            $('#male').html(pigeons);
            $('#male_acco').html(pigeons);
        }
    });
    return false;
};

function getNumeroCoupleById(id) { 
    $.ajax({
        url: `http://localhost:1337/selectNumeroCouple/${id}`,
        success: function (data) {
            console.log(data);
            var pigeons = '';
            data.forEach(function (d) {
                console.log(d);
                pigeons += `<option>${d.numero_couple}</option>`;
            });
            $('#numero_couple').html(pigeons);
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

function getPigeonUp(id) { 
    $.ajax({
        url: `http://localhost:1337/selectPigeonUpdate/${id}`,
        success: function (data) {
            var d = data[0];
            console.log(d);
            $('#couleur').val(`${d.couleur}`);
            $('#numero_bague').val(`${d.numero_bague}`);
            $('#annee_naissance').val(`${d.annee_naissance}`);
            $('#sexe').val(`${d.sexe}`);
            $('#etat').val(`${d.etat}`);
            $('#famille').val(`${d.famille}`);
            $('#race').val(`${d.race}`);
            $('#nom_pigeon').val(`${d.nom_pigeon}`);
            $('#source').val(`${d.source}`);
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

function getCoupleById(id,id_use) {
    $.ajax({
        url: `http://localhost:1337/selectCouple/${id}/${id_use}`,
        success: function (data) {
            var d = data[0];
            console.log(d);
            $('#female').val(`${d.female}`);
            $('#male').val(`${d.male}`);
        }
    });
    return false;
};

function getUserLogin(username,password) {
    $.ajax({
        url: `http://localhost:1337/selectLogin/${username}/${password}`,
                success: function (data) {
                    if(data.id_user){
                        console.log(data);
                        localStorage.setItem("userId", data.id_user);
                        window.location.replace("../projet/index.php"); 
                    }else{
                        $("#login_message_error").html("Le mot de passe entré est incorrect.");
                        $("#login_message_error").addClass("d-block");
                        $("#login_message_error").removeClass("d-none");
                    }  
                },
                error : function (e) {
                    $("#login_message_error").html("Le mot de passe entré est incorrect.");
                    $("#login_message_error").addClass("d-block");
                    $("#login_message_error").removeClass("d-none");
                },
     });
};