var url = 'http://localhost:3000/'

function cadastrar() {
	//validacao de alguns dos inputs

	if (!validaNome('nome-completo')) {
		return
	}

	if (!validaData('data-nascimento')) {
		return
	}

	if (!validaSenha('senha')) {
		return
	}

	if (!confirmaSenha('confirma-senha')) {
		return
	}

	//construcao do json que vai no body da criacao de usuario	

	let body =
	{
		'Cep': document.getElementById('cep').value,
		'Cpf': document.getElementById('cpf').value,
		'Complemento': document.getElementById('complemento').value,
		'Email': document.getElementById('email').value,
		'Logradouro': document.getElementById('logradouro').value,
		'Nascimento': document.getElementById('data-nascimento').value,
		'Nome': document.getElementById('nome-completo').value,
		'Numero': document.getElementById('numero').value,
		'Password': document.getElementById('senha').value
	};

	//envio da requisicao usando a FETCH API

	//configuracao e realizacao do POST no endpoint "usuarios"
	fetch(url + "usuarios",
		{
			'method': 'POST',
			'redirect': 'follow',
			'headers':
			{
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			'body': JSON.stringify(body)
		})
		//checa se requisicao deu certo
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		//trata resposta
		.then((output) => {
			console.log(output)
			alert('Cadastro efetuado! :D')
		})
		//trata erro
		.catch((error) => {
			console.log(error)
			alert('Não foi possível efetuar o cadastro! :(')
		})

	//solucao alternativa usando AJAX

	/*
	let request = new XMLHttpRequest()
	request.onreadystatechange = () =>
	{
		if(request.readyState === 4)
		{
			if(request.status === 200)
			{
				console.log(request.responseText)
				alert('Cadastro efetuado! :D')
			}
			else
			{
				console.log(request.responseText)
				alert('Não foi possível efetuar o cadastro! :(')
			}
		}
	}
	request.open("POST", url + "usuarios")
	request.setRequestHeader('Accept', 'application/json')
	request.setRequestHeader('Content-type', 'application/json')
	request.send(JSON.stringify(body))
	*/
}


function cadastrarCliente() {
	//validacao de alguns dos inputs

	if (!validaNome('nome-cliente')) {
		return
	}

	//construcao do json que vai no body da criacao de cliente	

	let body =
	{
		'nomeCliente': document.getElementById('nome-cliente').value,
		'cpfCnpjCliente': document.getElementById('cpfcnpj-cliente').value,
		'empresaCliente': document.getElementById('empresa-cliente').value
	};

	//envio da requisicao usando a FETCH API

	//configuracao e realizacao do POST no endpoint "clientes"
	fetch(url + "clientes",
		{
			'method': 'POST',
			'redirect': 'follow',
			'headers':
			{
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			'body': JSON.stringify(body)
		})
		//checa se requisicao deu certo
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		//trata resposta
		.then((output) => {
			console.log(output)
			alert('Cadastro do cliente efetuado! :D')
		})
		//trata erro
		.catch((error) => {
			console.log(error)
			alert('Não foi possível efetuar o cadastro do cliente! :(')
		})
}


function cadastrarFuncionario() {
	//validacao de alguns dos inputs

	if (!validaNome('nome-funcionario')) {
		return
	}

	//construcao do json que vai no body da criacao de funcionario	

	let body =
	{
		'nomeFuncionario': document.getElementById('nome-funcionario').value,
		'cpfCnpjFuncionario': document.getElementById('cpfcnpj-funcionario').value,
		'especializacaoFuncionario': document.getElementById('especializacao-funcionario').value
	};

	//envio da requisicao usando a FETCH API

	//configuracao e realizacao do POST no endpoint "clientes"
	fetch(url + "funcionarios",
		{
			'method': 'POST',
			'redirect': 'follow',
			'headers':
			{
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			'body': JSON.stringify(body)
		})
		//checa se requisicao deu certo
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		//trata resposta
		.then((output) => {
			console.log(output)
			alert('Cadastro do funcionario efetuado! :D')
		})
		//trata erro
		.catch((error) => {
			console.log(error)
			alert('Não foi possível efetuar o cadastro do funcionario! :(')
		})
}

function cadastrarChamado() {
	//validacao de alguns dos inputs

	// if(!validaNome('nome-funcionario'))
	// {
	// 	return
	// }

	//construcao do json que vai no body da criacao de chamado	

	let body =
	{
		'statusChamado': document.getElementById('status-chamado').value,
		'descricaoChamado': document.getElementById('descricao-chamado').value,
		'naturezaChamado': document.getElementById('natureza-chamado').value,
		'idClienteChamado': document.getElementById('id-cliente-chamado').value,
		'idFuncionarioChamado': document.getElementById('id-funcionario-chamado').value
	};

	//envio da requisicao usando a FETCH API

	//configuracao e realizacao do POST no endpoint "chamados"
	fetch(url + "chamados",
		{
			'method': 'POST',
			'redirect': 'follow',
			'headers':
			{
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			'body': JSON.stringify(body)
		})
		//checa se requisicao deu certo
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		//trata resposta
		.then((output) => {
			console.log(output)
			alert('Cadastro do chamado efetuado! :D')
		})
		//trata erro
		.catch((error) => {
			console.log(error)
			alert('Não foi possível efetuar o cadastro do chamado! :(')
		})
}

function validaNome(id) {
	let divNome = document.getElementById(id)
	if (divNome.value.trim().split(' ').length >= 2) {
		//divNome.style.border = 0
		divNome.classList.remove('erro-input')
		return true
	}
	else {
		//divNome.style.border = 'solid 1px red'
		if (!divNome.classList.contains('erro-input')) {
			divNome.classList.add('erro-input')
		}
		return false
	}
}

function validaData(id) {
	let divData = document.getElementById(id)
	if (divData.value.length > 0) {
		//divData.style.border = 0
		divData.classList.remove('erro-input')
		return true
	}
	else {
		//divData.style.border = 'solid 1px red'
		if (!divData.classList.contains('erro-input')) {
			divData.classList.add('erro-input')
		}
		return false
	}
}

function validaCPF(cpf) {
	var Soma = 0
	var Resto

	var strCPF = String(cpf).replace(/[^\d]/g, '')

	if (strCPF.length !== 11) {
		return false
	}
	if ([
		'00000000000',
		'11111111111',
		'22222222222',
		'33333333333',
		'44444444444',
		'55555555555',
		'66666666666',
		'77777777777',
		'88888888888',
		'99999999999',
	].indexOf(strCPF) !== -1) {
		return false
	}
	for (i = 1; i <= 9; i++)
		Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

	Resto = (Soma * 10) % 11

	if ((Resto == 10) || (Resto == 11)) {
		Resto = 0
	}
	if (Resto != parseInt(strCPF.substring(9, 10))) {
		return false
	}
	Soma = 0

	for (i = 1; i <= 10; i++)
		Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

	Resto = (Soma * 10) % 11

	if ((Resto == 10) || (Resto == 11))
		Resto = 0

	if (Resto != parseInt(strCPF.substring(10, 11)))
		return false

	return true
}

function validaSenha(id) {
	let divSenha = document.getElementById(id)

	let senha = divSenha.value

	let temTamanho = senha.length >= 8
	let temMaiuscula = (/[A-Z]/).test(senha)
	let temMinuscula = (/[a-z]/).test(senha)
	let temNumero = (/[0-9]/).test(senha)
	let temEspecial = (/[!@#$%&*?{}<>_]/).test(senha)

	if (temTamanho && temMaiuscula && temMinuscula && temNumero && temEspecial) {
		//divSenha.style.border = 0
		divSenha.classList.remove('erro-input')
		confirmaSenha('confirma-senha')
		return true
	}
	else {
		//divSenha.style.border = 'solid 1px red'
		if (!divSenha.classList.contains('erro-input')) {
			divSenha.classList.add('erro-input')
		}
		confirmaSenha('confirma-senha')
		return false
	}
}

function confirmaSenha(id) {
	let divConfirma = document.getElementById(id)
	let divSenha = document.getElementById('senha')

	if (divConfirma.value == divSenha.value) {
		//divConfirma.style.border = 0
		divConfirma.classList.remove('erro-input')
		return true
	}
	else {
		//divConfirma.style.border = 'solid 1px red'
		if (!divConfirma.classList.contains('erro-input')) {
			divConfirma.classList.add('erro-input')
		}
		return false
	}
}

function getLogradouro() {
	fetch('https://viacep.com.br/ws/' + document.getElementById('cep').value + '/json')
		.then(response => response.json())
		.then((output) => {
			document.getElementById('logradouro').value = output.logradouro
		})
		.catch(error => console.log(error))
}

function listar() {
	//da um GET no endpoint "usuarios"
	fetch(url + 'usuarios')
		.then(response => response.json())
		.then((usuarios) => {
			//pega div que vai conter a lista de usuarios
			let listaUsuarios = document.getElementById('lista-usuarios')

			//limpa div
			while (listaUsuarios.firstChild) {
				listaUsuarios.removeChild(listaUsuarios.firstChild)
			}

			//preenche div com usuarios recebidos do GET
			for (let usuario of usuarios) {
				//cria div para as informacoes de um usuario
				let divUsuario = document.createElement('div')
				divUsuario.setAttribute('class', 'form')

				//pega o nome do usuario
				let divNome = document.createElement('input')
				divNome.placeholder = 'Nome Completo'
				divNome.value = usuario.nome
				divUsuario.appendChild(divNome)

				//pega o email do usuario
				let divEmail = document.createElement('input')
				divEmail.placeholder = 'Email'
				divEmail.value = usuario.email
				divUsuario.appendChild(divEmail)

				//pega o cpf do usuario
				let divCpf = document.createElement('input')
				divCpf.placeholder = 'CPF'
				divCpf.value = usuario.cpf
				divUsuario.appendChild(divCpf)

				//cria o botao para remover o usuario
				let btnRemover = document.createElement('button')
				btnRemover.innerHTML = 'Remover'
				btnRemover.onclick = u => remover(usuario.id)
				btnRemover.style.marginRight = '5px'

				//cria o botao para atualizar o usuario
				let btnAtualizar = document.createElement('button')
				btnAtualizar.innerHTML = 'Atualizar'
				btnAtualizar.onclick = u => atualizar(usuario.id, divNome, divEmail, divCpf)
				btnAtualizar.style.marginLeft = '5px'

				//cria a div com os dois botoes
				let divBotoes = document.createElement('div')
				divBotoes.style.display = 'flex'
				divBotoes.appendChild(btnRemover)
				divBotoes.appendChild(btnAtualizar)
				divUsuario.appendChild(divBotoes)

				//insere a div do usuario na div com a lista de usuarios
				listaUsuarios.appendChild(divUsuario)
			}
		})
}

function listarClientes() {
	//da um GET no endpoint "clientes"
	fetch(url + 'clientes')
		.then(response => response.json())
		.then((clientes) => {
			//pega div que vai conter a lista de usuarios
			let listaClientes = document.getElementById('lista-clientes')

			//limpa div
			while (listaClientes.firstChild) {
				listaClientes.removeChild(listaClientes.firstChild)
			}

			//preenche div com usuarios recebidos do GET
			for (let cliente of clientes) {
				//cria div para as informacoes de um usuario
				let divCliente = document.createElement('div')
				divCliente.setAttribute('class', 'form')

				//pega o nome do cliente
				let divNomeCliente = document.createElement('input')
				divNomeCliente.placeholder = 'Nome Completo'
				divNomeCliente.value = cliente.nomeCliente
				divCliente.appendChild(divNomeCliente)

				//pega o cpf / cnpj do cliente
				let divCpfCnpjCliente = document.createElement('input')
				divCpfCnpjCliente.placeholder = 'CPF / CNPJ'
				divCpfCnpjCliente.value = cliente.cpfCnpjCliente
				divCliente.appendChild(divCpfCnpjCliente)

				//pega a empresa do cliente
				let divEmpresaCliente = document.createElement('input')
				divEmpresaCliente.placeholder = 'Empresa'
				divEmpresaCliente.value = cliente.empresaCliente
				divCliente.appendChild(divEmpresaCliente)

				//cria o botao para remover o cliente
				let btnRemoverCliente = document.createElement('button')
				btnRemoverCliente.innerHTML = 'Remover'
				btnRemoverCliente.onclick = c => removerCliente(cliente.id)
				btnRemoverCliente.style.marginRight = '5px'

				//cria o botao para atualizar o usuario
				let btnAtualizarCliente = document.createElement('button')
				btnAtualizarCliente.innerHTML = 'Atualizar'
				btnAtualizarCliente.onclick = u => atualizarCliente(cliente.id, divNomeCliente, divCpfCnpjCliente, divEmpresaCliente)
				btnAtualizarCliente.style.marginLeft = '5px'

				//cria a div com os dois botoes
				let divBotoes = document.createElement('div')
				divBotoes.style.display = 'flex'
				divBotoes.appendChild(btnRemoverCliente)
				divBotoes.appendChild(btnAtualizarCliente)
				divCliente.appendChild(divBotoes)

				//insere a div do usuario na div com a lista de usuarios
				listaClientes.appendChild(divCliente)
			}
		})
}

function listarFuncionarios() {
	//da um GET no endpoint "funcionarios"
	fetch(url + 'funcionarios')
		.then(response => response.json())
		.then((funcionarios) => {
			//pega div que vai conter a lista de usuarios
			let listaFuncionarios = document.getElementById('lista-funcionarios')

			//limpa div
			while (listaFuncionarios.firstChild) {
				listaFuncionarios.removeChild(listaFuncionarios.firstChild)
			}

			//preenche div com usuarios recebidos do GET
			for (let funcionario of funcionarios) {
				//cria div para as informacoes de um funcionario
				let divFuncionario = document.createElement('div')
				divFuncionario.setAttribute('class', 'form')

				//pega o nome do funcionario
				let divNomeFuncionario = document.createElement('input')
				divNomeFuncionario.placeholder = 'Nome Completo'
				divNomeFuncionario.value = funcionario.nomeFuncionario
				divFuncionario.appendChild(divNomeFuncionario)

				//pega o cpf / cnpj do funcionario
				let divCpfCnpjFuncionario = document.createElement('input')
				divCpfCnpjFuncionario.placeholder = 'CPF / CNPJ'
				divCpfCnpjFuncionario.value = funcionario.cpfCnpjFuncionario
				divFuncionario.appendChild(divCpfCnpjFuncionario)

				//pega a especialização do funcionario
				let divEspecializacaoFuncionario = document.createElement('input')
				divEspecializacaoFuncionario.placeholder = 'Especialização'
				divEspecializacaoFuncionario.value = funcionario.especializacaoFuncionario
				divFuncionario.appendChild(divEspecializacaoFuncionario)

				//cria o botao para remover o funcionario
				let btnRemoverFuncionario = document.createElement('button')
				btnRemoverFuncionario.innerHTML = 'Remover'
				btnRemoverFuncionario.onclick = f => removerFuncionario(funcionario.id)
				btnRemoverFuncionario.style.marginRight = '5px'

				//cria o botao para atualizar o funcionario
				let btnAtualizarFuncionario = document.createElement('button')
				btnAtualizarFuncionario.innerHTML = 'Atualizar'
				btnAtualizarFuncionario.onclick = f => atualizarFuncionario(funcionario.id, divNomeFuncionario, divCpfCnpjFuncionario, divEspecializacaoFuncionario)
				btnAtualizarFuncionario.style.marginLeft = '5px'

				//cria a div com os dois botoes
				let divBotoes = document.createElement('div')
				divBotoes.style.display = 'flex'
				divBotoes.appendChild(btnRemoverFuncionario)
				divBotoes.appendChild(btnAtualizarFuncionario)
				divFuncionario.appendChild(divBotoes)

				//insere a div do usuario na div com a lista de usuarios
				listaFuncionarios.appendChild(divFuncionario)
			}
		})
}


function listarChamados() {
	//da um GET no endpoint "chamados"
	fetch(url + 'chamados')
		.then(response => response.json())
		.then((chamados) => {
			//pega div que vai conter a lista de chamados
			let listaChamados = document.getElementById('lista-chamados')

			//limpa div
			while (listaChamados.firstChild) {
				listaChamados.removeChild(listaChamados.firstChild)
			}

			//preenche div com chamados recebidos do GET
			for (let chamado of chamados) {
				//cria div para as informacoes de um chamado
				let divChamado = document.createElement('div')
				divChamado.setAttribute('class', 'form')


				//pega o status do chamado
				let divStatusChamado = document.createElement('select')

				let stt1 = document.createElement('option')
				stt1.value = "Aberto"; stt1.text = "Aberto";
				divStatusChamado.add(stt1, divStatusChamado.options[0])

				let stt2 = document.createElement('option')
				stt2.value = "Em Atendimento"; stt2.text = "Em Atendimento";
				divStatusChamado.add(stt2, divStatusChamado.options[1])

				let stt3 = document.createElement('option')
				stt3.value = "Pendente"; stt3.text = "Pendente";
				divStatusChamado.add(stt3, divStatusChamado.options[2])

				let stt4 = document.createElement('option')
				stt4.value = "Fechado"; stt4.text = "Fechado";
				divStatusChamado.add(stt4, divStatusChamado.options[3])

				if (chamado.statusChamado == "Aberto") {
					divStatusChamado.selectedIndex = 0;
				} else if (chamado.statusChamado == "Em Atendimento") {
					divStatusChamado.selectedIndex = 1;
				} else if (chamado.statusChamado == "Pendente") {
					divStatusChamado.selectedIndex = 2;
				} else if (chamado.statusChamado == "Fechado") {
					divStatusChamado.selectedIndex = 3;
				}

				divChamado.appendChild(divStatusChamado)

				//pega a descrição do chamado
				let divDescricaoChamado = document.createElement('input')
				divDescricaoChamado.placeholder = 'Descrição'
				divDescricaoChamado.value = chamado.descricaoChamado
				divChamado.appendChild(divDescricaoChamado)

				//pega a natureza do chamado
				let divNaturezaChamado = document.createElement('input')
				divNaturezaChamado.placeholder = 'Natureza'
				divNaturezaChamado.value = chamado.naturezaChamado
				divChamado.appendChild(divNaturezaChamado)

				//Carrega lista de clientes nos combos
				let divIdClienteChamado = document.createElement('select')

				let c = 0;

				let idCli = document.createElement('option')
				idCli.value = 0;
				idCli.text = "";
				divIdClienteChamado.add(idCli, divIdClienteChamado.options[c])



				//busca e seleciona cliente do registro
				fetch(url + 'clientes')
					.then(response => response.json())
					.then((clientes) => {
						//preenche combo da div com clientes recebidos do GET
						for (let cliente of clientes) {
							c = c + 1;
							//cria div para as informacoes dos clientes
							let idCli = document.createElement('option')
							idCli.value = cliente.id;
							idCli.text = cliente.nomeCliente.split(" ").slice(0, 1) + ' - ' + cliente.empresaCliente;
							divIdClienteChamado.add(idCli, divIdClienteChamado.options[c])
						}
						//seta o cliente do chamado
						divIdClienteChamado.selectedIndex = chamado.idClienteChamado;
						divIdClienteChamado.options.remove(0)
					})
				divChamado.appendChild(divIdClienteChamado)


				//Carrega lista de Funcionarios nos combos
				let divIdFuncionarioChamado = document.createElement('select')

				let f = 0;

				let idFun = document.createElement('option')
				idFun.value = 0;
				idFun.text = "Sem Funcionario";
				divIdFuncionarioChamado.add(idFun, divIdFuncionarioChamado.options[f])
				divChamado.appendChild(divIdFuncionarioChamado)


				//busca e seleciona cliente do registro
				fetch(url + 'funcionarios')
					.then(response => response.json())
					.then((funcionarios) => {
						//preenche combo da div com clientes recebidos do GET
						for (let funcionario of funcionarios) {
							f = f + 1;
							//cria div para as informacoes dos clientes
							let idFun = document.createElement('option')
							idFun.value = funcionario.id;
							idFun.text = funcionario.nomeFuncionario;
							divIdFuncionarioChamado.add(idFun, divIdFuncionarioChamado.options[f])
						}
						//seta o funcionario do chamado
						divIdFuncionarioChamado.selectedIndex = chamado.idFuncionarioChamado;
					})

				//cria o botao para remover o chamado
				let btnRemoverChamado = document.createElement('button')
				btnRemoverChamado.innerHTML = 'Remover'
				btnRemoverChamado.onclick = c => removerChamado(chamado.id)
				btnRemoverChamado.style.marginRight = '5px'

				//cria o botao para atualizar o chamado
				let btnAtualizarChamado = document.createElement('button')
				btnAtualizarChamado.innerHTML = 'Atualizar'
				btnAtualizarChamado.onclick = u => atualizarChamado(chamado.id, divStatusChamado, divDescricaoChamado, divNaturezaChamado, divIdClienteChamado, divIdFuncionarioChamado)
				btnAtualizarChamado.style.marginLeft = '5px'

				//cria a div com os dois botoes
				let divBotoes = document.createElement('div')
				divBotoes.style.display = 'flex'
				divBotoes.appendChild(btnRemoverChamado)
				divBotoes.appendChild(btnAtualizarChamado)
				divChamado.appendChild(divBotoes)

				//insere a div do usuario na div com a lista de chamados
				listaChamados.appendChild(divChamado)
			}
		})
}

//EXEMPLO DE FUNCAO QUE CRIA OPTION DE SELECAO DE USUARIOS
function foo() {
	//da um GET no endpoint "usuarios"
	fetch(url + 'usuarios')
		.then(response => response.json())
		.then((usuarios) => {
			//PEGA OPTION VAZIA NO HTML
			let selUsuarios = document.getElementById('option-usuarios')

			//PREENCHE ELA COM O NOME E O ID DOS USUARIOS
			for (let usuario of usuarios) {
				let optUsuario = document.createElement('option')
				optUsuario.innerHTML = usuario.nome
				optUsuario.value = usuario.id
				selUsuarios.appendChild(optUsuario)
			}
		})
}

function atualizar(id, divNome, divEmail, divCpf) {
	let body =
	{
		'Nome': divNome.value,
		'Email': divEmail.value,
		'Cpf': divCpf.value
	}

	fetch(url + "usuarios/" + id,
		{
			'method': 'PUT',
			'redirect': 'follow',
			'headers':
			{
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			'body': JSON.stringify(body)
		})
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		.then((output) => {
			listar()
			console.log(output)
			alert('Usuário atualizado! \\o/')
		})
		.catch((error) => {
			console.log(error)
			alert('Não foi possível atualizar o usuário :/')
		})
}

function atualizarCliente(id, divNomeCliente, divCpfCnpjCliente, divEmpresaCliente) {
	let body =
	{
		'nomeCliente': divNomeCliente.value,
		'cpfCnpjCliente': divCpfCnpjCliente.value,
		'empresaCliente': divEmpresaCliente.value
	}

	fetch(url + "clientes/" + id,
		{
			'method': 'PUT',
			'redirect': 'follow',
			'headers':
			{
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			'body': JSON.stringify(body)
		})
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		.then((output) => {
			listarClientes()
			console.log(output)
			alert('Cliente atualizado! \\o/')
		})
		.catch((error) => {
			console.log(error)
			alert('Não foi possível atualizar o cliente :/')
		})
}

function atualizarFuncionario(id, divNomeFuncionario, divCpfCnpjFuncionario, divEspecializacaoFuncionario) {
	let body =
	{
		'nomeFuncionario': divNomeFuncionario.value,
		'cpfCnpjFuncionario': divCpfCnpjFuncionario.value,
		'especializacaoFuncionario': divEspecializacaoFuncionario.value
	}

	fetch(url + "funcionarios/" + id,
		{
			'method': 'PUT',
			'redirect': 'follow',
			'headers':
			{
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			'body': JSON.stringify(body)
		})
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		.then((output) => {
			listarFuncionarios()
			console.log(output)
			alert('Funcionario atualizado! \\o/')
		})
		.catch((error) => {
			console.log(error)
			alert('Não foi possível atualizar o funcionario :/' + error)
		})
}

function atualizarChamado(id, divStatusChamado, divDescricaoChamado, divNaturezaChamado, divIdClienteChamado, divIdFuncionarioChamado) {
	let body =
	{
		'statusChamado': divStatusChamado.value,
		'descricaoChamado': divDescricaoChamado.value,
		'naturezaChamado': divNaturezaChamado.value,
		'idClienteChamado': divIdClienteChamado.value,
		'idFuncionarioChamado': divIdFuncionarioChamado.value
	}

	fetch(url + "chamados/" + id,
		{
			'method': 'PUT',
			'redirect': 'follow',
			'headers':
			{
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			'body': JSON.stringify(body)
		})
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		.then((output) => {
			listarChamados()
			console.log(output)
			alert('Chamado atualizado! \\o/')
		})
		.catch((error) => {
			console.log(error)
			alert('Não foi possível atualizar o chamado :/' + error)
		})
}

function remover(id) {
	fetch(url + 'usuarios/' + id,
		{
			'method': 'DELETE',
			'redirect': 'follow'
		})
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		.then((output) => {
			listar()
			console.log(output)
			alert('Usuário removido! >=]')
		})
		.catch((error) => {
			console.log(error)
			alert('Não foi possível remover o usuário :/')
		})
}


function removerCliente(id) {
	fetch(url + 'clientes/' + id,
		{
			'method': 'DELETE',
			'redirect': 'follow'
		})
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		.then((output) => {
			listarClientes()
			console.log(output)
			alert('Cliente removido! >=]')
		})
		.catch((error) => {
			console.log(error)
			alert('Não foi possível remover o cliente :/')
		})
}

function removerFuncionario(id) {
	fetch(url + 'funcionarios/' + id,
		{
			'method': 'DELETE',
			'redirect': 'follow'
		})
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		.then((output) => {
			listarFuncionarios()
			console.log(output)
			alert('Funcionario removido! >=]')
		})
		.catch((error) => {
			console.log(error)
			alert('Não foi possível remover o Funcionario :/')
		})
}

function removerChamado(id) {
	fetch(url + 'chamados/' + id,
		{
			'method': 'DELETE',
			'redirect': 'follow'
		})
		.then((response) => {
			if (response.ok) {
				return response.text()
			}
			else {
				return response.text().then((text) => {
					throw new Error(text)
				})
			}
		})
		.then((output) => {
			listarChamados()
			console.log(output)
			alert('Chamado removido! >=]')
		})
		.catch((error) => {
			console.log(error)
			alert('Não foi possível remover o chamado :/')
		})
}


function carregarClientes() {
	//da um GET no endpoint "clientes"
	fetch(url + 'clientes')
		.then(response => response.json())
		.then((clientes) => {
			//pega o select que vai conter a lista de clientes
			let listaClientes = document.getElementById('id-cliente-chamado')

			let i = 0;

			// let idCli = document.createElement('option')
			// 	idCli.value = "";
			// 	idCli.text = "";
			// 	listaClientes.add(idCli, listaClientes.options[i])

			//preenche div com usuarios recebidos do GET
			for (let cliente of clientes) {
				i = i + 1;
				//cria div para as informacoes de um usuario
				let idCli = document.createElement('option')
				idCli.value = cliente.id;
				idCli.text = cliente.nomeCliente.split(" ").slice(0, 1) + ' - ' + cliente.empresaCliente;
				listaClientes.add(idCli, listaClientes.options[i])

			}
		})
}


function carregarFuncionarios() {
	//da um GET no endpoint "clientes"
	fetch(url + 'funcionarios')
		.then(response => response.json())
		.then((funcionarios) => {
			//pega o select que vai conter a lista de clientes
			let listaFuncionarios = document.getElementById('id-funcionario-chamado')

			let i = 0;

			let idFun = document.createElement('option')
			idFun.value = 0;
			idFun.text = "Sem Funcionario";
			listaFuncionarios.add(idFun, listaFuncionarios.options[i])

			//preenche div com usuarios recebidos do GET
			for (let funcionario of funcionarios) {
				i = i + 1;
				//cria div para as informacoes de um usuario
				let idFun = document.createElement('option')
				idFun.value = funcionario.id;
				idFun.text = funcionario.nomeFuncionario;
				listaFuncionarios.add(idFun, listaFuncionarios.options[i])

			}
		})
}