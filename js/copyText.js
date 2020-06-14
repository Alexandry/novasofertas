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
}