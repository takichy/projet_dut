function getListProduitUrgent() { 
    $.ajax({
        url: `http://localhost:1337/selectListProUrgent`,
        success: function (data) {
            var pro = '';
            data.forEach(function (d) {
                pro += `<tr>
                                <td>${d.code_MABEC}</td>
                                <td>${moment(d.date_entree).format('DD-MM-YYYY')}</td>
                                <td>${moment(d.date_peremption).format('DD-MM-YYYY')}</td>
                                <td>${d.quantite_physique}</td>
                                <td>${d.emplacement}</td>
                            </tr>`;
            });
            $('#tableProduitUrgent').html(pro)
        }
    });
    return false;
};

function getCodeMabec() { 
    $.ajax({
        url: `http://localhost:1337/selectCodeMabec`,
        success: function (data) {
            var pro = '';
            data.forEach(function (d) {
                pro += `<option>${d.code_MABEC}</option>`;
            });
            $('#code_mabec').html(pro);
            $('#code_mab').html(pro);
            $('#code_m').html(pro);
        }
    });
    return false;
};

function getCode(id){
    $.ajax({
        url: `http://localhost:1337/selectCodeMa/${id}`,
        success: function (data) {
            var d = data[0];
            $('#date_perem').val(`kaybano 3la 7sab les lots makayan lach tkoun hadi`);
            $('#emplac').val(`${d.emplacement}`);
            $('#quantite_phy').val(`${d.quantite_physique}`);
        }
    });
    return false;
};

//==============================================================================================================================================
    function getNvProduit(){
        console.log('je suis sur getNvProduit');

        var vacc = document.getElementById("produit_form");
        var rapp = document.getElementById("livraison_form");
        var listVacc = document.getElementById("information_form");
        var info = document.getElementById("stock_form");

        vacc.classList.add("d-block");
        vacc.classList.remove("d-none");

        rapp.classList.add("d-none");
        rapp.classList.remove("d-block");

        listVacc.classList.add("d-none");
        listVacc.classList.remove("d-block");

        info.classList.add("d-none");
        info.classList.remove("d-block");
    };

    function getlivraison(){
        console.log('je suis sur getlivraison');
        getListProduitUrgent();

        var rapp = document.getElementById("livraison_form");
        var vacc = document.getElementById("produit_form");
        var listVacc = document.getElementById("information_form");
        var info = document.getElementById("stock_form");

        rapp.classList.add("d-block");
        rapp.classList.remove("d-none");

        vacc.classList.add("d-none");
        vacc.classList.remove("d-block");

        listVacc.classList.add("d-none");
        listVacc.classList.remove("d-block");

        info.classList.add("d-none");
        info.classList.remove("d-block");

        var mess = document.getElementById("produit_message_success");
        mess.classList.add("d-none");
        mess.classList.remove("d-block");

        var message = document.getElementById("produit_message_error");
        message.classList.add("d-none");
        message.classList.remove("d-block");
    };

    function getInfoProduit(){
        console.log('je suis sur getInfoProduit');
        getCodeMabec();

        var vacc = document.getElementById("produit_form");
        var rapp = document.getElementById("livraison_form");
        var listVacc = document.getElementById("information_form");
        var info = document.getElementById("stock_form");

        listVacc.classList.add("d-block");
        listVacc.classList.remove("d-none");

        rapp.classList.add("d-none");
        rapp.classList.remove("d-block");

        vacc.classList.add("d-none");
        vacc.classList.remove("d-block");

        info.classList.add("d-none");
        info.classList.remove("d-block");

        var mess = document.getElementById("produit_message_success");
        mess.classList.add("d-none");
        mess.classList.remove("d-block");

        var message = document.getElementById("produit_message_error");
        message.classList.add("d-none");
        message.classList.remove("d-block");
    };

    function getMouvementStock(){
        console.log('je suis sur getMouvementStock');
        getCodeMabec();
        
        var vacc = document.getElementById("produit_form");
        var rapp = document.getElementById("livraison_form");
        var listVacc = document.getElementById("information_form");
        var info = document.getElementById("stock_form");

        listVacc.classList.add("d-none");
        listVacc.classList.remove("d-block");

        rapp.classList.add("d-none");
        rapp.classList.remove("d-block");

        vacc.classList.add("d-none");
        vacc.classList.remove("d-block");

        info.classList.add("d-block");
        info.classList.remove("d-none");

        var mess = document.getElementById("produit_message_success");
        mess.classList.add("d-none");
        mess.classList.remove("d-block");

        var message = document.getElementById("produit_message_error");
        message.classList.add("d-none");
        message.classList.remove("d-block");
    }

    function getCodeMa(sel){
        console.log(sel.value);
        getCode(sel.value);
    };

    //=========================================
    $(document).ready(function() {
        $('.nav-trigger').click(function() {
            $('.side-nav').toggleClass('visible');
        });
    });

    //=========================================
    $(function() {
        $('.close').click(function() {
            $('.ad').css('display', 'none');
        })
    })

    //=========================================
    function myTrigger(e) {
        console.log("tata", e);
    }
//==================================================================================================================================================