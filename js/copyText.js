function copyText() {
    var copyText = document.getElementById("meuInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    exibirAlerta();

}

function exibirAlerta() {
    const alerta = document.querySelector("#alertaTextoCopiado");
    alerta.classList.remove("containerAlertFalse");
    alerta.classList.add("containerAlertTrue");

    setInterval(function() {
        alerta.classList.add("containerAlertFalse");
        alerta.classList.remove("containerAlertTrue");
    }, 5000);


}