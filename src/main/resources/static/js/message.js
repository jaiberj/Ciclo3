function traerDatosMensajes(){
    $.ajax({
        url: 'https://gbee5718478f365-reto1ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            pintarDatosGeneral(respuesta.items, "messagetext", "message");
        },
        error: function(respuesta, xhr){
            alert("Error de la peticion");
        }
    });
}

function actualizarMensaje(){
    let datosPorMandar = {
        'id': $("#id").val(),
        'messagetext': $("#messagetext").val(),
    };

    $.ajax({
        url: 'https://gbee5718478f365-reto1ciclo3.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(datosPorMandar),
        success: function(respuesta){
            alert("El producto ha sido agregado con exito");
            mostrarDetalle();
        },
        error: function(respuesta, xhr){
            alert("Error de la peticion");
        }
    });
}