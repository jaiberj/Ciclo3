let url_base ="http://localhost:8080";
let ortopedic= null;

$(document).ready(function(){
    getAllOrtopedic();

});


function getAllOrtopedic(){
    $.ajax({
        url: url_base +"/api/Ortopedic/all",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            pintarDatosGeneral(respuesta.items, "name", "ortopedic");
        },
        error: function(respuesta, xhr){
            alert("Error de la peticion");
        }
    });
}

function guardarOrtopedic(){
    url: url_base + "/api/Ortopedic/save",
    let datosPorMandar = {
        'id': $("#id").val(),
        'brand': $("#brand").val(),
        'year': $("#year").val(),
        'name': $("#name").val(),
        'category_id': $("#category_id").val(),
    };

    $.ajax({
        url: url_base + "/api/Ortopedic/save",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(datosPorMandar),
        success: function(respuesta){
            pintarDatosGeneral(respuesta.items, "name", "ortopedic");
        },
        error: function(respuesta, xhr){
            alert("Error de la peticion");
        }
    });
}

function actualizarOrtesis(){
    let datosPorMandar = {
        'id': $("#id").val(),
        'brand': $("#brand").val(),
        'year': $("#year").val(),
        'name': $("#name").val(),
        'category_id': $("#category_id").val()
    };

    $.ajax({
        url: url_base + "/api/Ortopedic/update",
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(datosPorMandar),
        success: function(respuesta){
            alert("El producto ha sido actualizado con exito");
            mostrarDetalle();
        },
        error: function(respuesta, xhr){
            alert("Error de la peticion");
        }
    });
}

function borrarOrtopedic(){
    let id = sessionStorage.getItem('id');
    let tipo = sessionStorage.getItem('tipo');
    let datosPorMandar = {
        'id': id
    }

    $.ajax({
        url: 'https://gbee5718478f365-reto1ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/'+tipo+'/'+tipo,
        type: 'DELETE',
        contentType: 'application/json',
        data: JSON.stringify(datosPorMandar),
        success: function(respuesta){
            alert("El elemento ha sido eliminado");
            location.href='ortopedic.html';
        },
        error: function(respuesta, xhr){
            alert("Error de la peticion");
        }
    });
}