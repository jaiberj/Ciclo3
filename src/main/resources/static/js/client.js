//Variables globales
let url_base="http://localhost:8080/api/Client";
let cliente= null;

//Se ejecuta al cargar la página
$(document).ready(function(){
    $("#modalCliente").hide();

})

function open(id){
    console.log("si")
    if(id==-1){
        $("#addMod").show();
        $("#actMod").hide();
        $("#txtId").val(-1);
        $("#txtName").val("");
        $("#txtEmail").val("");
        $("#txtPassword").val("");
        $("#txtAge").val("");
    }

    else{
        $("#addMod").hide();
        $("#actMod").show();
        cliente=getClient(id);
        $("#txtName").val(client.idClient);
        $("#txtEmail").val(client.email);
        $("#txtPassword").val(client.password);
        $("#txtAge").val(client.age);
    }
    $("#modalCliente").show();
}

function getAllCluient(){
        $.ajax ({
        url: url_base +"/all",
        type: "GET",
        dataType: "JSON"
        });
        $.done( function(response){
            console.log(response);
            updateTable(response);
        })
        .fail(function(jqXHR, textStatus, errorThrown){
            alert("Lo siento, algo salió mal");
        });
}




function getClient(id){
    $.ajax ({
            async: false,
            url: url_base +idClient,
            type: "GET",
            dataType: "JSON"
        });
    $.done(function(response){
        console.log(response);
        updateTable(response);
        client= response;
    })
    .fail(function(jqXHR, textStatus, errorThrown){
        alert("Lo siento, algo salió mal")
    });

    return client;

}


function insertClient(){
    cliente={
        name: $("#txtName").val(),
        email:  $("#txtEmail").val(),
        password: $("#txtPassword").val(),
        age: $("#txtAge").val(),
    }
    let body= JASON.stringify(cliente);
    $.ajax ({
        url: url_base +"/save",
        type: "POST",
        dataType: "JSON",
        data: body,
        contentType:"application/jason; charset= UTF8"

    });

    $.done(function(response){
        console.log(response);
        updateTable(response);
        alert("Cliente guardado");
        getAllClient();
    });
    $.fail(function(jqXHR, textStatus, errorThrown){
        alert("Lo siento, algo salió mal")
    });


}

function editClient(){
    cliente={
            name: $("#txtName").val()
            email:  $("#txtEmail").val()
            password: $("#txtPassword").val()
            age: $("#txtAge").val()
            }
    let body= JASON.stringify(clinte);
        $.ajax ({
            url: url_base +"/update",
            type: "PUT",
            dataType: "JSON",
            data: body,
            contentType:"application/jason; charset= UTF8"

        });
        
        $.done(function(response){
            console.log(response);
            updateTable(response);
            alert("Cliente actualizado");
            getAllClient();
        });
        .fail(function(jqXHR, textStatus, errorThrown){
            alert("Lo siento, algo salió mal")
        });


}

function deleteClient(id){
    $.ajax ({
        url: url_base +idClient,
        type: "DELETE",
        dataType: "JSON"
    });
    $.done(function(response){
        console.log(response);
        updateTable(response);
        alert("Cliente eliminado");
        getAllClient();

    })
    .fail(function(jqXHR, textStatus, errorThrown){
        alert("Lo siento, algo salió mal")
    });

}

function updateTable(){
    $("#tblClient").find("tr:gt:0").remove();
    let data = "";
    for(i=0; i <items.length; i++){
    data += "<tr>";
    data += "<td>" + item[i].name +"</td>";
    data += "<td>" + item[i].email +"</td>";
    data += "<td>" + item[i].password +"</td>";
    data += "<td>" + item[i].age +"</td>";
    data += "<td><span onlclick=\"openmodal();"+ item[i].id +")\">A</span></td>";
    data += "<td><span onlclick=\"deleteClient();"+ item[i].id +")\">E</span></td>";
    data +="</tr>";
    }
    $("#tblClient > tbody:last-child").append(data);

}

function closeModal(){
$("#modalClient").hide();
}




