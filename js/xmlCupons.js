var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        setarValor(this.responseText);
    }
}
xhttp.open("GET", "../xml/Cupons.xml", true);
xhttp.send();

function setarValor(valor) {
    var xml = "<rss version='2.0'><channel><title>RSS Title</title></channel></rss>",
        xmlDoc = $.parseXML(valor),
        $xml = $(xmlDoc),
        $title = $xml.find("coupons")[0];
    var total = 0;

    //console.log(valor);

    $title.childNodes.forEach(function(value) {
        //  console.log("-------------------------------------------------");
        //  console.log(value.getElementsByTagName("code")[0]); //Codigo
        //  console.log(value.getElementsByTagName("endDate")[0]); //Data Vigente
        //  console.log(value.getElementsByTagName("link")[0]); // Link
        //  console.log(value.getElementsByTagName("discount")[0]); // Desconto
        //  console.log(value.getElementsByTagName("name")[0]); //Loja
        //  console.log(value.getElementsByTagName("image1")[0]); //Imagem
        //  console.log(value.getElementsByTagName("title")[0]); //Descrição
        //  console.log(value.getElementsByTagName("name")[1]); //categoria

        total++;
        let descricao = value.getElementsByTagName("title")[0].textContent;
        let imagem = value.getElementsByTagName("image1")[0].textContent;
        let dataFim = value.getElementsByTagName("endDate")[0].textContent;
        let codigo = value.getElementsByTagName("code")[0].textContent;
        let link = value.getElementsByTagName("link")[0].textContent;

        //        adicionarHTML(descricao.textContent, imagem.textContent, dataFim.textContent, codigo.textContent, link.textContent);

        let front = adicionarFlipFront(descricao, imagem, dataFim);
        // console.log(txt)

        let back = adicionarFlipBack(codigo, link, total);
        // console.log(txt);

        adicionarLi(front, back, total);


    });

}

function adicionarLi(front, back) {
    let elementoLi = $("<li>");
    let elementoDivContainer = $("<div>");
    let elementoDivflipper = $("<div>");
    elementoDivflipper.append(front);
    elementoDivflipper.append(back);

    elementoDivflipper.addClass("flipper");
    elementoDivContainer.append(elementoDivflipper);
    elementoDivContainer.addClass("flip-container");
    elementoLi.append(elementoDivContainer);

    let listaOfertas = $("#lista");
    listaOfertas.append(elementoLi);

}

function adicionarFlipFront(descricao, imagem, dataFim) {

    let elementoDivFront = $("<div>");
    let elementoH2 = $("<h3>").text(descricao);
    let elementoImg = $("<img>").attr("src", imagem);
    let elementoDivData = $("<div>").addClass("datafinal").text("Válido até " + dataFim);

    elementoDivFront.append(elementoH2);
    elementoDivFront.append(elementoImg);
    elementoDivFront.append(elementoDivData);

    elementoDivFront.addClass("front");
    return elementoDivFront;

}

function adicionarFlipBack(codigo, link, total) {
    let infoAlert = codigo + total;
    let codigoTemp = `copyText('${codigo}','${infoAlert}')`;
    let elementoDivBack = $("<div>");
    let elementoDivBackConteudo = $("<div>").addClass("backConteudo");
    let elementoH2 = $("<h2>").text("Cupom de desconto");
    let elementoHr = $("<hr>").attr("width", "2").attr("size", "100").addClass("linhaHr");
    let elementoHrTwo = $("<hr>").attr("width", "2").attr("size", "100").addClass("linhaHr");

    let elementoH4 = $("<h4>").text("Copie e utilize o código abaixo:");
    let elementohInput = $("<input>").attr("type", "text").attr("value", codigo).addClass("meuInput");
    let elementoButton = $("<button>").attr("name", infoAlert).attr("onclick", codigoTemp).addClass("btnCopy");
    let elementoBtA = $("<a>").attr("href", link).attr("target", "_blank").addClass("badge").addClass("badge-warning").addClass("irParaOferta").text("Comprar Agora");

    let elementoDivMsg = $("<span>").attr("title", "msg").attr("id", infoAlert).addClass("tooltip");

    elementoDivBackConteudo.append(elementoH2);
    elementoDivBackConteudo.append(elementoHr);
    elementoDivBackConteudo.append(elementoH4);

    elementoDivBackConteudo.append(elementoDivMsg);
    elementoDivBackConteudo.append(elementohInput);
    elementoDivBackConteudo.append(elementoButton);
    elementoDivBackConteudo.append(elementoHrTwo);
    elementoDivBackConteudo.append(elementoBtA);
    elementoDivBack.append(elementoDivBackConteudo);
    elementoDivBack.addClass("back");

    return elementoDivBack;
}