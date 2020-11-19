export default function Cadastro(data) {

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
            console.log(response)
        }else{
            console.log('Cadastrado com sucesso')
            console.log(response.nome)
        }
    })
}

