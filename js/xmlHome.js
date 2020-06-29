var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        setarValor(this.responseText);
    }
}
xhttp.open("GET", "../xml/ofertasHome.xml", true);
xhttp.send();

function setarValor(valor) {
    var xml = "<rss version='2.0'><channel><title>RSS Title</title></channel></rss>",
        xmlDoc = $.parseXML(valor),
        $xml = $(xmlDoc),
        $title = $xml.find("offer")[0];
    var total = 0;

    //console.log(valor);

    $title.childNodes.forEach(function(value) {
          console.log("-------------------------------------------------");

          console.log(value.getElementsByTagName("priceFrom")[0]);
        //  console.log(value.getElementsByTagName("offerName")[0]); //Codigo
        //  console.log(value.getElementsByTagName("endDate")[0]); //Data Vigente
        //  console.log(value.getElementsByTagName("link")[0]); // Link
        //  console.log(value.getElementsByTagName("discount")[0]); // Desconto
        //  console.log(value.getElementsByTagName("name")[0]); //Loja
        //  console.log(value.getElementsByTagName("image1")[0]); //Imagem
        //  console.log(value.getElementsByTagName("title")[0]); //Descrição
        //  console.log(value.getElementsByTagName("name")[1]); //categoria

        total++;
        if (total == 10){
       // let descricao = value.getElementsByTagName("offerName")[0].textContent;
        //let imagem = value.getElementsByTagName("offerThumbnail")[0].textContent;
       // let precoDe = value.getElementsByTagName("priceFrom")[0].textContent;
       // let precoPara = value.getElementsByTagName("priceTo")[0].textContent;
      //  let link = value.getElementsByTagName("offerLink")[0].textContent;

        //        adicionarHTML(descricao.textContent, imagem.textContent, dataFim.textContent, codigo.textContent, link.textContent);

         // console.log(txt)

   
        // console.log(txt);

       // adicionarLi(front, back);
       
           
        }

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



