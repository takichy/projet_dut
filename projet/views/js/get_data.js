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