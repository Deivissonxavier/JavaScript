function verificar(){
	var data = new Date()
	var ano = data.getFullYear()
	var fano = document.getElementById('txtano')
	var res = document.getElementById('res')

	if (fano.value.length == 0 || fano.value > ano) {
		alert("[ERRO] Verifique os seus dados e tente novamente!")

	} else{
		var fsex = document.getElementsByName('radsex')
		var idade = ano - Number(fano.value)
		var genero = ''
		var img = document.createElement('img') ///adiciona uma imagem no js para o HTML
		img.setAttribute('id', 'foto')
		if (fsex[0].checked) {
			genero = 'Homem'
			if (idade >= 0 && idade < 10) {
				//criança
				img.setAttribute('src', 'bebe-homen.png')
			} else if (idade < 21) {
				///jovem
				img.setAttribute('src','jovem-homen.png')
			} else if (idade < 50) {
				///adulto
				img.setAttribute('src', 'adulto-homen.png')
			} else{
				//idoso
				img.setAttribute('src', 'idoso-homen.png')
			}
		} else{
			genero = 'Mulher'
			if (idade >= 0 && idade < 10) {
				///criança
				img.setAttribute('src', 'bebe-mulher.png')
			} else if (idade < 21) {
				///jovem
				img.setAttribute('src', 'jovem-mulher.png')
			} else if (idade < 50) {
				///adulto
				img.setAttribute('src', 'adulta-mulher.png')
			} else{
				///idoso
				img.setAttribute('src', 'idosa-mulher.png')
			}
		}
		res.style.textAlign = 'center'
		res.innerHTML = `Detectamos ${genero} com ${idade} anos`
		res.appendChild(img)
	}
}