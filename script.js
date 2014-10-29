function bloquearTipoPedras(){
	alert("passou");
	var valorRadio = $("#tipo_pedra_sortida").val();
	if(valorRadio == "Sim"){
			$("tipo_pedras").attr("disabled","disabled")
	}
	else{
		$("tipo_pedras").removeAttr("disabled")
	}
}