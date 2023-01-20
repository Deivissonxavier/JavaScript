function contar(){
	var inicio = document.getElementById('inicio')
	var fim = document.getElementById('fim')
	var pular = document.getElementById('pular')
	var res = document.getElementById('res')

	if(inicio.value.length == 0 || fim.value.length == 0 || pular.value.length == 0){
		res.innerHTML = "Impossivel contar!"
		alert("[ERRO] faltam dados!")
	} else{
		res.innerHTML = `Contando: <br>`
		var i = Number(inicio.value)
		var f = Number(fim.value)
		var p = Number(pular.value)
		if (p <= 0) {
			alert("Intervalo invalido! considerando intervalo com o valor 1")
			p = 1
		}
		if (i < f) {
			//contagem crescente
			for (var c = i; c <= f; c += p) {
				res.innerHTML += `${c} 👉 `
			}
		} else{
			//contagem decrescente
			for (var c = i; c >= f; c -= p) {
				res.innerHTML += `${c} 👉 `
			}
		}

		res.innerHTML += ` 🏁 `
	}

}