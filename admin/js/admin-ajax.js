$(document).ready(function(){
    //GUARDAR UN REGISTRO
    $('#guardar-registro').on('submit', function(e) {
       e.preventDefault();

       var datos = $(this).serializeArray();

       $.ajax({
            type: $(this).attr('method'),
            data: datos,
            url: $(this).attr('action'),
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var resultado = data;
                if(resultado.respuesta == 'exito') {
                    Swal.fire(
                        'Correcto',
                        'Se guardó correctamente',
                        'success'
                      )
                } else {
                    Swal.fire(
                        'Error',
                        'Hubo un error',
                        'error',
                    )
                }
            }
        })
    }); 

    //ELIMINAR UN REGISTRO
    $('.borrar_registro').on('click', function(e) {
        e.preventDefault();

        var id = $(this).attr('data-id');
        var tipo = $(this).attr('data-tipo');

        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un registro eliminado no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            $.ajax({
                type:'post',
                data: {
                    id: id,
                    registro : 'eliminar'
                },
                url: 'modelo-' + tipo + '.php',
                success: function(data) {
                    console.log(data);
                    var resultado = JSON.parse(data);
                    if(resultado.respuesta == 'exito') {
                        Swal.fire(
                            'Eliminado!',
                            'Registro Eliminado.',
                            'success'
                        )
                        jQuery('[data-id="'+ resultado.id_eliminado + '"]').parents('tr').remove();
                    } else {
                        Swal.fire(
                            'Error!',
                            'No se pudo eliminar',
                            'error',
                        )
                    }
                }
            });
        });
    }); 
});