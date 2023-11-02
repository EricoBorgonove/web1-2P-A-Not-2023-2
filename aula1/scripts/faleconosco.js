const estadosBrasil = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
  ];
function limpar() {
    // document.getElementById("formulario").reset();
    const nome = document.querySelector('#nome')
    nome.value = ""
    document.getElementById('sobrenome').value = ""
}
function verSenha() {
    const senha1 = document.getElementById('senha1')
    const senha2 = document.getElementById('senha2')
    let btnVer = document.getElementById('btnVer')

    if (senha1.type === "password" || senha2.type === "password") {
        senha1.type = 'text'
        senha2.type = 'text'
        btnVer.value = 'Desver'
    } else {
        senha1.type = 'password'
        senha2.type = 'password'
        btnVer.value = 'Ver'
    }
}
function modoEscuro() {
     let btnModo = document.getElementById('btnModo')
    if (btnModo.value == 'Escuro') {
        document.getElementById('principal').classList.add('modoEscuro')
        btnModo.value = 'Claro'
    }else{
        console.log ('remover')
        document.getElementById('principal').classList.remove('modoEscuro')
        
    }
}
function verOutros(){
    const outros = document.getElementById('outros')
    const genero = document.getElementsByName('genero')
    if (genero[2].checked){
        outros.disabled = false
    }else{
        outros.disabled = true
    }
}
function verEstados(){
    const naturalidade = document.getElementById('naturalidade')
    const nacionalidade = document.getElementById('nacionalidade')
    if (nacionalidade.value == 'BR'){
        for(let i=0;i<estadosBrasil.length;i++){
            let option = document.createElement('option')
            option.setAttribute('value', estadosBrasil[i].sigla)
            option.textContent = estadosBrasil[i].nome
            naturalidade.appendChild(option)
        }
        naturalidade.hidden = false
    }else{
        naturalidade.hidden = true
    }
}