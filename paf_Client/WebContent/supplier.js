function getDetails() {
	jQuery
			.ajax({
				url : "http://localhost:8080/Supplier/Suppliers/" + $("#id").val(),
				type : "GET",
				contentType : "application/json",
				dataType : 'json',
				success : function(data, textStatus, errorThrown) {
					// here is your json.
					// process it
					$("#name").text(data.name);
					$("#designation").text(data.designation);
					$("#expertise").text(data.expertise);

				},
				error : function(jqXHR, textStatus, errorThrown) {
					$("#title").text("Sorry! Supplier not found!");
					$("#price").text("");
				},
				timeout : 170000,
			});
};


function addsupplier() {
	jQuery.ajax({
		url : "http://localhost:8080/Supplier/Suppliers/{id}" + $("#newname").val() + "/" + $("#newdesignation").val() + "/"+$("#newdesignation").val(),
		type : "POST",
		contentType : "application/json",
		dataType : 'json',
		success : function(data, textStatus, errorThrown) {
			// here is your json.
			// process it
			$("#addResult").text("Book added sucessfully");
		},
		error : function(jqXHR, textStatus, errorThrown) {
			$("#addResult").text("Supplier not added!");
		},
		timeout : 120000,
	});
};