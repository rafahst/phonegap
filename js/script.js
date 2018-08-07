function BuscaEndereco(){
	var cep = $("#cep").val();
	var passagem;
	$.getJSON("https://viacep.com.br/ws/"+ cep +"/json/", function(dados){
		console.log(dados.logradouro);
		
		passagem=dados.logradouro;
	
    $("#Logradouro").append("<h1>"+passagem + "</h1>");
		console.dir(dados);//traz todos os dados pertinente a tabela
		
	});
}

