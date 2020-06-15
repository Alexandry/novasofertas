function copyText(codigo, idinput) {

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(codigo).select();
    document.execCommand("copy");
    $temp.remove();

    console.log(codigo);
    console.log(idinput);

    exibirAlerta(idinput);

}

function exibirAlerta(idinput) {
    // $("#loading").slideToggle(1000);
    let textoTemp = `#${idinput}`;
    $(textoTemp).slideToggle(1000);


    $(document).ready(function() {
        $(textoTemp).tooltipster({
            animation: 'fade',
            delay: 200,
            theme: 'tooltipster-punk',
            trigger: 'click'
        }).tooltipster("open").tooltipster("content", "Copiado");

        setTimeout(function() {
            $(textoTemp).tooltipster("close");
        }, 2000);

    });



}