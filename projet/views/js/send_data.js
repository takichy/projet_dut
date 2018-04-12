function send_user(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: `http://localhost:1337/insertUser/${localStorage.getItem("userId")}`,
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#user_message_error').removeClass("d-block");
            $('#user_message_error').addClass("d-none");
            $('#user_message_success').html("votre message bien envoyer");
            $('#user_message_success').addClass("d-block");
            $('#user_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#user_message_success').addClass("d-none");
            $('#user_message_success').removeClass("d-block");
            $('#user_message_error').html("erreur!! ");
            $('#user_message_error').addClass("d-block");
            $('#user_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_nettoyage(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: `http://localhost:1337/insertNettoyage/${localStorage.getItem("userId")}`,
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#nettoyage_message_error').removeClass("d-block");
            $('#nettoyage_message_error').addClass("d-none");
            $('#nettoyage_message_success').html("votre message bien envoyer");
            $('#nettoyage_message_success').addClass("d-block");
            $('#nettoyage_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#nettoyage_message_success').addClass("d-none");
            $('#nettoyage_message_success').removeClass("d-block");
            $('#nettoyage_message_error').html("erreur!! ");
            $('#nettoyage_message_error').addClass("d-block");
            $('#nettoyage_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_Traitement(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: `http://localhost:1337/insertTraitement/${localStorage.getItem("userId")}`,
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#traitement_message_error').removeClass("d-block");
            $('#traitement_message_error').addClass("d-none");
            $('#traitement_message_success').html("votre message bien envoyer");
            $('#traitement_message_success').addClass("d-block");
            $('#traitement_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#traitement_message_success').addClass("d-none");
            $('#traitement_message_success').removeClass("d-block");
            $('#traitement_message_error').html("erreur!! ");
            $('#traitement_message_error').addClass("d-block");
            $('#traitement_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_nvaqui(e) {
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: `http://localhost:1337/insertPigeon/${localStorage.getItem("userId")}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            console.log(data);
            $('#nvaqui_message_error').removeClass("d-block");
            $('#nvaqui_message_error').addClass("d-none");
            $('#nvaqui_message_success').html("votre message bien envoyer");
            $('#nvaqui_message_success').addClass("d-block");
            $('#nvaqui_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#nvaqui_message_success').addClass("d-none");
            $('#nvaqui_message_success').removeClass("d-block");
            $('#nvaqui_message_error').html("erreur!! ");
            $('#nvaqui_message_error').addClass("d-block");
            $('#nvaqui_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_eclos(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: `http://localhost:1337/insertEclos/${localStorage.getItem("userId")}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#eclosion_message_error').removeClass("d-block");
            $('#eclosion_message_error').addClass("d-none");
            $('#eclosion_message_success').html("votre message bien envoyer");
            $('#eclosion_message_success').addClass("d-block");
            $('#eclosion_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#eclosion_message_success').addClass("d-none");
            $('#eclosion_message_success').removeClass("d-block");
            $('#eclosion_message_error').html("erreur!! ");
            $('#eclosion_message_error').addClass("d-block");
            $('#eclosion_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_pondaison(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: `http://localhost:1337/updatePondaison/${localStorage.getItem("userId")}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            console.log(data);
            $('#pondaison_message_error').removeClass("d-block");
            $('#pondaison_message_error').addClass("d-none");
            $('#pondaison_message_success').html("votre message bien envoyer");
            $('#pondaison_message_success').addClass("d-block");
            $('#pondaison_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#pondaison_message_success').addClass("d-none");
            $('#pondaison_message_success').removeClass("d-block");
            $('#pondaison_message_error').html("erreur!! ");
            $('#pondaison_message_error').addClass("d-block");
            $('#pondaison_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_accouplement(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: `http://localhost:1337/insertAccouplement/${localStorage.getItem("userId")}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#pondaison_message_error').removeClass("d-block");
            $('#pondaison_message_error').addClass("d-none");
            $('#pondaison_message_success').html("votre message bien envoyer");
            $('#pondaison_message_success').addClass("d-block");
            $('#pondaison_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#pondaison_message_success').addClass("d-none");
            $('#pondaison_message_success').removeClass("d-block");
            $('#pondaison_message_error').html("erreur!! ");
            $('#pondaison_message_error').addClass("d-block");
            $('#pondaison_message_error').removeClass("d-none");
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
            $('#contact_message_error').removeClass("d-block");
            $('#contact_message_error').addClass("d-none");
            $('#contact_message_success').html("votre message bien envoyer");
            $('#contact_message_success').addClass("d-block");
            $('#contact_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#contact_message_success').addClass("d-none");
            $('#contact_message_success').removeClass("d-block");
            $('#contact_message_error').html("erreur!! ");
            $('#contact_message_error').addClass("d-block");
            $('#contact_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_vaccination(e) { 
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: `http://localhost:1337/insertVaccination/${localStorage.getItem("userId")}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#vaccination_message_error').removeClass("d-block");
            $('#vaccination_message_error').addClass("d-none");
            $('#vaccination_message_success').html("votre message bien envoyer");
            $('#vaccination_message_success').addClass("d-block");
            $('#vaccination_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#vaccination_message_success').addClass("d-none");
            $('#vaccination_message_success').removeClass("d-block");
            $('#vaccination_message_error').html("erreur!! ");
            $('#vaccination_message_error').addClass("d-block");
            $('#vaccination_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_update(e) { 
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: `http://localhost:1337/updatePigeon/${localStorage.getItem("userId")}`,
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#update_message_error').removeClass("d-block");
            $('#update_message_error').addClass("d-none");
            $('#update_message_success').html("votre message bien envoyer");
            $('#update_message_success').addClass("d-block");
            $('#update_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#update_message_success').addClass("d-none");
            $('#update_message_success').removeClass("d-block");
            $('#update_message_error').html("erreur!! ");
            $('#update_message_error').addClass("d-block");
            $('#update_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_eclos_update(e) {
    e.preventDefault();
    console.log($(`form#${e.target.id}`).serialize())
    $.ajax({
        type: 'POST',
        url: `http://localhost:1337/updateEclos/${localStorage.getItem("userId")}`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            console.log(data);
            $('#ecloUp_message_error').removeClass("d-block");
            $('#ecloUp_message_error').addClass("d-none");
            $('#ecloUp_message_success').html("votre message bien envoyer");
            $('#ecloUp_message_success').addClass("d-block");
            $('#ecloUp_message_success').removeClass("d-none");
            window.location.replace("../projet/index.php?action=C");
        },
        error : function (error) {
            $('#ecloUp_message_success').addClass("d-none");
            $('#ecloUp_message_success').removeClass("d-block");
            $('#ecloUp_message_error').html("erreur!! ");
            $('#ecloUp_message_error').addClass("d-block");
            $('#ecloUp_message_error').removeClass("d-none");
        },
    });
    return false;
};

function send_registor(e) { 
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'http://localhost:1337/insertNvUser/',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            window.location.replace("../projet/index.php"); 
        },
        error : function (error) {
            $('#registor_message_error').html("erreur!! ");
            $('#registor_message_error').addClass("d-block");
            $('#registor_message_error').removeClass("d-none");
        },
    });
    return false;
};