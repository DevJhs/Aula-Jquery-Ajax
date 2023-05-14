function consultacep(){
    var cep=document.getElementById("cep").value;
    $(".barra").show();
   $.ajax({
       
        url:"https://viacep.com.br/ws/"+cep+"/json/" ,
        type: "GET",
        success: function(response){
            
            console.log(response);
         /*   document.getElementById("info").innerHTML=" Cep: "+response.cep+" <br> Logradouro: "+response.logradouro+
            " <br> Complemento: "+response.complemento+" <br> Bairro: "+response.bairro+" <br> Localidade: "+
            response.localidade+" <br> Uf: "+response.uf+" <br> Ibge: "+response.ibge+"<br> Gia: "+response.gia+
            "<br> DDD: "+response.ddd+"<br> Siafi: "+response.siafi;*/
            $("#Ce").html("CEP: "+response.cep);
            $("#Cp").html("CEP: "+response.cep);
            $("#Lg").html("Logradouro: "+response.logradouro);
            $("#Cl").html("Complemento: "+response.complemento);
            $("#Br").html("Bairro: "+response.bairro);
            $("#Lc").html("Localidade: "+response.localidade);
            $("#Uf").html("UF: "+response.uf);
            $("#Ig").html("IBGE: "+response.ibge);
            $("#Ga").html("GIA: "+response.gia);
            $("#DDD").html("DDD: "+response.ddd);
            $("#Sf").html("SIAFI: "+response.siafi);
            $(".barra").hide();
      }
    });
};
$(function(){
    $(".barra").hide();
})