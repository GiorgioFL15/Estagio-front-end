var submit = document.getElementById("submit");

submit.addEventListener("click", function() {


    var ajax = new XMLHttpRequest();

    ajax.open("GET", "localhost:8080/carro");

  ajax.responseType = "json";

  ajax.send();

  ajax.addEventListener("readystatechange", function () {
    
        


        if (ajax.readyState === 4 && ajax.status === 200) {
           alert("Conectado")

            console.log(ajax);

            console.log(ajax.response);
            var resposta = ajax.response;
           
            
          var lista = document.querySelector(".list");


            for (var i=0; i < resposta.length; i++) {
                    console.log(respota[i]);
                    lista.innerHTML += "<li>"+resposta[i]+"</li>";
                    


            }
        
        }
    
   });
 })