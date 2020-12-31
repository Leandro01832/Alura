$("#Ferramenta").click(function () {
    $("#FormTexto").load("/Pagina/EmBranco/");
    $("#FormTexto, #estrutura, #Permissao").fadeOut("slow");
    $("#estrutura").fadeIn("slow");
});

$("#EditarCores").click(function () {    
    $("#conteudomodal").load("/EditTools/EditModalCor/");
});

$(".CriarPlano").click(function () {
    $("#conteudomodal").load("/CreateTools/CreateModalBackground/");
});

$(".CoresBack").click(function () {
    $("#conteudomodal").load("/CreateTools/CreateModalCor/");
});


$(".Salvar").click(function () {
    var valor = $(this).data("value").replace(/[^0-9]/g, '');
    $("#conteudomodal").load("/Pagina/Salvar/" + valor);
});


$("#EditToolsLink").click(function () {
    var id = $(this).data("value");
    $("#conteudomodal").load("/EditTools/EditModalLink/" + id);
});

$("#EditToolsForm").click(function () {

    var id = $(this).data("value");

    $("#conteudomodal").load("/EditTools/EditModalForm/" + id);
});

$("#EditToolsTable").click(function () {

    var id = $(this).data("value");
   

    $("#conteudomodal").load("/EditTools/EditModalTable/" + id);
});



$("#EditToolsImagem").click(function () {

    var id = $(this).data("value");

    $("#conteudomodal").load("/EditTools/EditModalImagem/" + id);
});

$("#EditToolsVideo").click(function () {

    var id = $(this).data("value");

    $("#conteudomodal").load("/EditTools/EditModalVideo/" + id);
});

$("#EscolherMusica").click(function () {
    $("#conteudoMusica").load("/CreateTools/CreateModalMusica");
});

$("#btnConfig").click(function () {
    $("#FormTexto, #estrutura, #Permissao").fadeOut("slow");
    $("#estrutura").fadeIn("slow");
});

$("#btnPermissao").click(function () {
    $("#FormTexto, #estrutura, #Permissao").fadeOut("slow");
    $("#Permissao").fadeIn("slow");
    $("#Permissao").load("/Admin/EditPermissao?id=" + numero);

});


$("#ApagarComId").click(function () {
    var numero = $("#IdApagar").val();

    $("#conteudomodal").load("/Pagina/ApagarElemento?id=" + numero);
});

$("#modo").click(function () {
    if ($("#modo").is(':checked')) {
        $(".content").css("width", "380px");
        $(".content").css("margin", "auto");
    }
    else {
        $(".content").css("width", "66%");
    }

});

$(".Configuracao").click(function () {

    $("#conteudomodal").load("/EditTools/EditModalPagina/" + numero);
    });



$("#Atualizar").click(function () {
    $(".content").load("/Pagina/GetView/" + numero);
});



////////////////////////////////////////////////////////////////////////////////////////






$("#CriaBloco").click(function () {

    $("#conteudomodal").load("/CreateTools/CreateModalDiv");
});

$("#CriaTexto").click(function () {

    $("#conteudomodal").load("/CreateTools/CreateModalTexto");
});

$("#CriaVideo").click(function () {

    $("#conteudoVideo").load("/CreateTools/CreateModalVideo");
});

$("#CriaLink").click(function () {

    $("#conteudomodal").load("/CreateTools/CreateModalLink");
});

$("#CriaTable").click(function () {

    $("#conteudomodal").load("/CreateTools/CreateModalTable");
});

$("#CriaImagem").click(function () {

    $("#conteudoImagem").load("/CreateTools/CreateModalImagem");
});

$("#CriaCarousel").click(function () {

    $("#conteudomodal").load("/CreateTools/CreateModalCarousel");
});

$("#CriaElemento").click(function () {
    $("#conteudomodal").load("/CreateTools/CreateModalElemento");
});