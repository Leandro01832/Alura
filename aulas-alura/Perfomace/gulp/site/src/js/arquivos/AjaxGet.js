var items = $(".imagem");
var numero = $(".Topo")[0].baseURI.replace(/[^0-9]/g, '');
numero = numero.replace('5001', '');

$(".pastas").empty();
$(".pastas").append('<option value="">Escolher pasta para as imagens</option>');

$.ajax({
    type: 'POST',
    url: '/AjaxGet/GetPastas',
    dataType: 'json',
    data: { Pagina: numero }
})
    .done(function (response) {

        $.each(response, function (i, response) {
            $(".pastas").append('<option  value="' +
                response.idPastaImagem + '">' + response.nome + '</option>');
        });
    });


$.ajax({
    type: 'POST',
    url: '/AjaxGet/GetBackgrounds',
    dataType: 'json',
    data: { PaginaId: numero }
})
    .done(function (response) {
        var obj = response;
        $(".background").empty();
        $.each(obj, function (i, obj) {            
            $(".background").append('<option value="'
                + obj.idBackground + '">'
                + obj.nome + '</option>');

        });

    });


$.ajax({
    type: 'POST',
    url: '/AjaxGet/GetBackgroundsGradiente',
    dataType: 'json',
    data: { PaginaId: numero }
})
    .done(function (response) {
        var obj = response;
        $(".backgroundGradiente").empty();
        $.each(obj, function (i, obj) {
            $(".backgroundGradiente").append('<option value="'
                + obj.idBackground + '">'
                + obj.nome + '</option>');

        });

    });


$.ajax({
    type: 'POST',
    url: '/AjaxGet/GetDivs',
    dataType: 'json',
    data: { PaginaId: numero },
    success: function (data) {
        $.each(data, function (i, data) {
            $(".div").append('<option value="'
                + data.idDiv + '">'
                + data.nome + ' - ' + data.idDiv + '</option>');
        });
    },
    error: function (ex) {
        alert('Falha ao buscar blocos.' + ex);
    }
});


$(".backgroundGradiente").click(function () {

    $.ajax({
        type: 'POST',
        url: '/AjaxGet/GetCores',
        dataType: 'json',
        data: { Background: $(this).val() },
        success: function (data) {
            $(".CoresBackground").empty();
            $.each(data, function (i, data) {                
                $(".CoresBackground").append('<option value="'
                    + data.idCor + '">'
                    + data.corBackground + '</option>');
            });
        },
        error: function (ex) {
            alert('Falha ao buscar cores.' + ex);
        }
    });
    return false;
});


$(".pastas").change(function () {

    $.ajax({
        type: 'POST',
        url: '/AjaxGet/GetImagens',
        dataType: 'json',
        data: { Pasta: $(this).val() },
        success: function (data) {
            $(".imagem").empty();
            $.each(data, function (i, data) {                
                $(".imagem").append('<option class="' + data.arquivo +'" value="'
                    + data.idImagem + '">'
                    + data.arquivo + '</option>');
            });
        },
        error: function (ex) {
            alert('Falha ao buscar imagens.' + ex);
        }
    });
    return false;
});




$(".site").click(function () {    

    $.ajax({
        type: 'POST',
        url: '/AjaxGet/GetPaginas',
        dataType: 'json',
        data: { PedidoId: $(this).val() },
        success: function (data) {
            $(".pagina").empty();
            $.each(data, function (i, data) {                
                $(".pagina").append('<option value="">[Selecione  uma pagina..]</option>');
                $(".pagina").append('<option value="'
                    + data.idPagina + '">'
                    + data.titulo + '</option>');
            });
        },
        error: function (ex) {
            alert('Falha ao buscar paginas.' + ex);
        }
    });
    return false;
});

$(".pagina").change(function () {   

    $.ajax({
        type: 'POST',
        url: '/AjaxGet/GetDivs',
        dataType: 'json',
        data: { PaginaId: $(this).val() },
        success: function (data) {
            $(".div").empty();
            $.each(data, function (i, data) {                
                $(".div").append('<option value="0">[Selecione  um bloco..]</option>');
                $(".div").append('<option value="'
                    + data.idDiv + '">'
                    + data.nome + ' - ' + data.idDiv + '</option>');
            });
        },
        error: function (ex) {
            alert('Falha ao buscar blocos.' + ex);
        }
    });
    return false;
});

$(".div").change(function () {
    $.ajax({
        type: 'POST',
        url: '/AjaxGet/GetTexto',
        dataType: 'json',
        data: { DivId: $(this).val() },
        success: function (data) {
            $(".texto").empty();
            $.each(data, function (i, data) {
                
                $(".texto").append('<option value="0">[Selecione um texto..]</option>');
                $(".texto").append('<option value="'
                    + data.idTexto + '">'
                    + data.nome + '</option>');
            });
        },
        error: function (ex) {
            alert('Falha ao buscar textos.' + ex);
        }
    });

    $(".imagem").empty();
    $(".imagem").append('<option value="">[Selecione uma imagem..]</option>');


});

$(".div").click(function () {

    $(".table").empty();
    $(".table").append('<option value="0">[Selecione  uma tabela...]</option>');

    $.ajax({
        type: 'POST',
        url: '/AjaxGet/GetTable',
        dataType: 'json',
        data: { DivId: $(this).val() },
        success: function (data) {
            $.each(data, function (i, data) {
                $(".table").append('<option value="'
                    + data.idTable + '">'
                    + data.nome + '</option>');
            });
        },
        error: function (ex) {
            alert('Falha ao buscar tabelas.' + ex);
        }
    });
    return false;
});

$("#element").change(function () {

    $.ajax({
        type: 'POST',
        url: '/AjaxGet/GetElementos',
        dataType: 'json',
        data: { DivId: $("#div_51").val(), valor: $("#element").val(), pagina: numero },
        success: function (data) {


            if ($("#element").val() === "Texto") {
                $.each(data, function (i, data) {
                    $("#texto_").append('<option value="'
                        + data.idTexto + '">'
                        + data.nome + '</option>');
                });
                document.getElementById('texto_').disabled = false;
            }
            else {
                document.getElementById('texto_').disabled = true;
                $("#texto_").empty();
            }

            if ($("#element").val() === "Carrossel") {
                $.each(data, function (i, data) {
                    $("#carousel_").append('<option value="'
                        + data.idCarousel + '">'
                        + data.nome + '</option>');
                });
                document.getElementById('carousel_').disabled = false;
            }
            else {
                document.getElementById('carousel_').disabled = true;
                $("#carousel_").empty();

            }

            if ($("#element").val() === "Video") {
                $.each(data, function (i, data) {
                    $("#video_").append('<option value="'
                        + data.idVideo + '">'
                        + data.nome + '</option>');
                });
                document.getElementById('video_').disabled = false;
            }
            else {
                document.getElementById('video_').disabled = true;
                $("#video_").empty();
            }

            if ($("#element").val() === "Imagem") {
                $.each(data, function (i, data) {
                    $("#imagem_71").append('<option id=" ' + data.idImagem + ' " class="' + data.arquivo + '" value="'
                        + data.idImagem + '" data-value="' + data.arquivo + '" >'
                        + data.arquivo + '</option>');
                });
                document.getElementById('imagem_71').disabled = false;
            }
            else {
                document.getElementById('imagem_71').disabled = true;
                $("#imagem_71").empty();
            }

            if ($("#element").val() === "Link") {
                $.each(data, function (i, data) {
                    $("#link_").append('<option value="'
                        + data.idLink + '">'
                        + data.idLink + '</option>');
                });
                document.getElementById('link_').disabled = false;
            }
            else {
                document.getElementById('link_').disabled = true;
                $("#link_").empty();
            }

            if ($("#element").val() === "Form") {
                $.each(data, function (i, data) {
                    $("#form_").append('<option value="'
                        + data.idForm + '">'
                        + data.nome + '</option>');
                });
                document.getElementById('form_').disabled = false;
            }
            else {
                document.getElementById('form_').disabled = true;
                $("#form_").empty();
            }

            if ($("#element").val() === "Table") {
                $.each(data, function (i, data) {
                    $("#table_").append('<option value="'
                        + data.idTable + '">'
                        + data.nome + '</option>');
                });
                document.getElementById('table_').disabled = false;
            }
            else {
                document.getElementById('table_').disabled = true;
                $("#table_").empty();
            }

        },
        error: function (ex) {
            alert('Falha ao buscar elementos.' + ex);
        }
    });

});

