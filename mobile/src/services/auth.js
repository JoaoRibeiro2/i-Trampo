export default function Auth(user) {
    const url ='https://itrampoficial.000webhostapp.com/server/controllers/authController.php';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(user)
        }).then(function (response) {
            return response.json();
        }).then(function (response) {
            if (response == 'senha_invalida') {
                console.log(response);
                alert('Senha Inválida')
            }else if(response == 'email_invalido'){
                console.log(response);
                console.log('Email inválido')
            }else{
                console.log('Logado com sucesso')
                console.log(response.nome)
            }
        })
}
