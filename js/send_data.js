function send_produit(e) { 
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: `http://localhost:1337/insertProduit`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: $(`form#${e.target.id}`).serialize(),
        success: function (data) {
            $('#produit_message_error').removeClass("d-block");
            $('#produit_message_error').addClass("d-none");
            $('#produit_message_success').html("succés");
            $('#produit_message_success').addClass("d-block");
            $('#produit_message_success').removeClass("d-none");
        },
        error : function (error) {
            $('#produit_message_success').addClass("d-none");
            $('#produit_message_success').removeClass("d-block");
            $('#produit_message_error').html("erreur ");
            $('#produit_message_error').addClass("d-block");
            $('#produit_message_error').removeClass("d-none");
        },
    });
    return false;
};