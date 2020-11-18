let cadastrar = document.querySelector("#cadastrar");

let u_nome = document.querySelector("#nome");
let u_email = document.querySelector("#email");
let u_senha = document.querySelector("#senha");
let u_confirma_senha = document.querySelector("#confirma_senha");
let u_cpf = document.querySelector("#cpf");
let u_dt_nasc = document.querySelector("#dt_nasc");
let u_cidade = document.querySelector("#cidade");
let u_estado = document.querySelector("#estado");
let u_genero = document.querySelector('input[name="genero"]:checked');



function registerUsers(data) {

    const url = 'https://itrampoficial.000webhostapp.com/server/controllers/ControllerUsuario.php';
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        if(response == 0){
            console.log(response)
            alert('Usuario Ja existe')
        }else if(response == 'erro'){
            alert('Erro ao cadastrar')
        }else{
            alert('Cadastrado com sucesso')
            window.location.href = "../login/index.html";
        }
    })
}


cadastrar.addEventListener("submit", function(event){

    event.preventDefault()
    let user_nome = u_nome.value;
    let user_email = u_email.value;
    let user_cpf = u_cpf.value;
    let user_dt_nasc = u_dt_nasc.value;
    let user_telefone = "997623050";
    let user_cidade = u_cidade.value;
    let user_estado = u_estado.value;
    let user_genero = u_genero.value;
    let user_foto = "img\/imagem.png";
    let user_descricao = "i-tramper";
    let user_senha = u_senha.value;
    let user_confirma_senha = u_confirma_senha.value;

    let user_data = {
        "usuario": [
          {
            "nome": user_nome,
            "email": user_email,
            "senha": user_senha,
            "cpf": user_cpf,
            "tel": user_telefone,
            "dt_nasc": user_dt_nasc,
            "cidade": user_cidade,
            "estado": user_estado,
            "genero": user_genero,
            "foto": user_foto,
            "desc": user_descricao
          }
              
          ]
      }
    if(user_senha != user_confirma_senha){
        alert('As senhas não são iguais')
    }else{

        registerUsers(user_data);
    }
})   


function selecionaEstado() {
    const ufSelect = document.querySelector('select[name=uf]')
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then( states => {
        
        for (state of states){
            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

selecionaEstado()

function selecionaCidades(event) {
    const cidade = document.querySelector('select[name=cidade]');
    const stateInput = document.querySelector('input[name=state]');
    const estado = document.querySelector('select[name=uf]');
    const ufValue = event.target.value;
    const indexOfSelectedState = event.target.selectedIndex
    
    stateInput.value = event.target.options[indexOfSelectedState].text

    estado.style.backgroundColor = 'transparent';

    
    

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    cidade.innerHTML = '<option value>Selecione a cidade</option>';
    
    cidade.disabled = false
    cidade.addEventListener("click", () =>{
        cidade.style.backgroundColor = "Transparent"
    })
    fetch(url)
    .then( res => res.json())
    .then( cities =>{
        for (const city of cities){
            cidade.innerHTML  += `<option value="${city.nome}">${city.nome}</option>`;
        }
        

    })
}

document.querySelector('select[name=cidade]').disabled = true;
    



document.querySelector('select[name=uf]').addEventListener('change', selecionaCidades);